/**
 * Translation key sync checker (UX-based)
 *
 * Compares keys between:
 * - UI keys: All keys that appear in the UI (from zod-schema property paths)
 * - Japanese translation: ui/src/ui/i18n/config-hints-ja.ts (CONFIG_HINTS_JA)
 *
 * UX Coverage = Japanese translated keys / All UI-visible keys
 *
 * Reports:
 * - Missing in JA: Keys visible in UI but not translated (user sees English)
 * - Translated: Keys that have Japanese translations
 *
 * Usage:
 *   pnpm tsx scripts/check-i18n-keys.ts          # Check and report
 *   pnpm tsx scripts/check-i18n-keys.ts --fix    # Show template for missing keys
 *   pnpm tsx scripts/check-i18n-keys.ts --json   # JSON output for CI
 *
 * Exit codes:
 *   0 - Coverage above threshold (default 90%)
 *   1 - Coverage below threshold or critical keys missing
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

// Paths
const ZOD_SCHEMA_DIR = path.join(ROOT, "src/config");
const JA_HINTS_PATH = path.join(ROOT, "ui/src/ui/i18n/config-hints-ja.ts");

/**
 * Extract all property paths from zod-schema files
 * These represent keys that appear in the config UI
 */
function extractZodSchemaKeys(): Set<string> {
  const keys = new Set<string>();

  // Read all zod-schema files
  const schemaFiles = fs.readdirSync(ZOD_SCHEMA_DIR).filter((f) => f.startsWith("zod-schema") && f.endsWith(".ts"));

  for (const file of schemaFiles) {
    const content = fs.readFileSync(path.join(ZOD_SCHEMA_DIR, file), "utf-8");
    extractKeysFromZodContent(content, keys);
  }

  // Also extract from main schema.ts FIELD_LABELS/FIELD_HELP
  const schemaContent = fs.readFileSync(path.join(ZOD_SCHEMA_DIR, "schema.ts"), "utf-8");
  const keyPattern = /"([a-zA-Z0-9_.*[\]]+)":\s*(?:"[^"]*"|'[^']*')/g;

  const labelsMatch = schemaContent.match(/const FIELD_LABELS[^=]*=\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/s);
  if (labelsMatch) {
    let match;
    while ((match = keyPattern.exec(labelsMatch[1])) !== null) {
      keys.add(match[1]);
    }
  }

  const helpMatch = schemaContent.match(/const FIELD_HELP[^=]*=\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/s);
  if (helpMatch) {
    keyPattern.lastIndex = 0;
    let match;
    while ((match = keyPattern.exec(helpMatch[1])) !== null) {
      keys.add(match[1]);
    }
  }

  return keys;
}

/**
 * Extract property keys from zod schema content
 */
function extractKeysFromZodContent(content: string, keys: Set<string>): void {
  // Find schema definitions and extract property names
  // Pattern: .object({ propName: z.something() })

  // Extract top-level schema names and their properties
  const schemaPattern = /export const (\w+Schema)\s*=\s*z\s*\.object\(\{([^}]+(?:\{[^}]*\}[^}]*)*)\}\)/gs;
  const propPattern = /(\w+):\s*(?:z\.|[A-Z]\w+Schema)/g;

  // Map schema names to their prefixes
  const schemaPrefixes: Record<string, string> = {
    SessionSchema: "session",
    MessagesSchema: "messages",
    CommandsSchema: "commands",
    ChannelsSchema: "channels",
    ToolsSchema: "tools",
    AgentsSchema: "agents",
    ModelsConfigSchema: "models",
    GatewaySchema: "gateway",
    AuthSchema: "auth",
    BindingsSchema: "bindings",
    BroadcastSchema: "broadcast",
    AudioSchema: "audio",
    NodeHostSchema: "nodeHost",
    ApprovalsSchema: "approvals",
    TtsConfigSchema: "messages.tts",
    GroupChatSchema: "messages.groupChat",
    QueueSchema: "messages.queue",
    InboundDebounceSchema: "messages.inbound",
  };

  let schemaMatch;
  while ((schemaMatch = schemaPattern.exec(content)) !== null) {
    const schemaName = schemaMatch[1];
    const schemaBody = schemaMatch[2];
    const prefix = schemaPrefixes[schemaName] || "";

    let propMatch;
    propPattern.lastIndex = 0;
    while ((propMatch = propPattern.exec(schemaBody)) !== null) {
      const propName = propMatch[1];
      const key = prefix ? `${prefix}.${propName}` : propName;
      keys.add(key);
    }
  }

  // Also extract nested objects
  const nestedPattern = /(\w+):\s*z\s*\.object\(\{([^}]+)\}\)/gs;
  // This is simplified - a full parser would be more complex
}

/**
 * Extract keys from CONFIG_HINTS_JA in config-hints-ja.ts
 */
function extractJapaneseKeys(): Set<string> {
  const content = fs.readFileSync(JA_HINTS_PATH, "utf-8");
  const keys = new Set<string>();

  // Match patterns like: "key.path": { or key: {
  const keyPattern = /(?:"([a-zA-Z0-9_.*[\]]+)"|(\w+)):\s*\{/g;

  let match;
  while ((match = keyPattern.exec(content)) !== null) {
    const key = match[1] || match[2];
    // Skip internal object properties like 'label', 'help'
    if (key && !["label", "help"].includes(key)) {
      keys.add(key);
    }
  }

  return keys;
}

/**
 * Get all possible UI keys by combining zod-schema and existing translations
 * This gives us the universe of keys that could appear in the UI
 */
function getAllUIKeys(): Set<string> {
  const zodKeys = extractZodSchemaKeys();
  const jaKeys = extractJapaneseKeys();

  // The UI shows all keys from zod-schema, plus any parent keys
  // Japanese translations may include parent keys (e.g., "tools", "channels")
  // These are valid UI keys even if not in zod-schema
  const allKeys = new Set([...zodKeys, ...jaKeys]);

  return allKeys;
}

/**
 * Compare key sets and report differences
 */
function compareKeys(
  uiKeys: Set<string>,
  japaneseKeys: Set<string>
): { missingInJa: string[]; translated: string[] } {
  const missingInJa: string[] = [];
  const translated: string[] = [];

  for (const key of uiKeys) {
    if (japaneseKeys.has(key)) {
      translated.push(key);
    } else {
      missingInJa.push(key);
    }
  }

  return {
    missingInJa: missingInJa.sort(),
    translated: translated.sort(),
  };
}

/**
 * Generate template for missing keys
 */
function generateTemplate(keys: string[]): string {
  const lines: string[] = [];
  for (const key of keys) {
    const isSimpleKey = !key.includes(".");
    if (isSimpleKey) {
      lines.push(`  ${key}: {`);
    } else {
      lines.push(`  "${key}": {`);
    }
    lines.push(`    label: "", // TODO: Add Japanese translation`);
    lines.push(`  },`);
  }
  return lines.join("\n");
}

// Main
function main() {
  const args = process.argv.slice(2);
  const showFix = args.includes("--fix");
  const jsonOutput = args.includes("--json");
  const quietMode = args.includes("--quiet") || args.includes("-q");
  const threshold = 90; // UX coverage threshold

  if (!quietMode) {
    console.log("🔍 Checking i18n UX coverage...\n");
  }

  const uiKeys = getAllUIKeys();
  const japaneseKeys = extractJapaneseKeys();

  if (!quietMode) {
    console.log(`  UI keys (from zod-schema + translations): ${uiKeys.size}`);
    console.log(`  Japanese translated keys: ${japaneseKeys.size}\n`);
  }

  const { missingInJa, translated } = compareKeys(uiKeys, japaneseKeys);
  const coverage = ((translated.length / uiKeys.size) * 100).toFixed(1);

  if (jsonOutput) {
    console.log(
      JSON.stringify(
        {
          coverage: parseFloat(coverage),
          total: uiKeys.size,
          translated: translated.length,
          missing: missingInJa.length,
          missingKeys: missingInJa,
        },
        null,
        2
      )
    );
    process.exit(parseFloat(coverage) >= threshold ? 0 : 1);
  }

  // Report coverage
  const coverageNum = parseFloat(coverage);
  const coverageIcon = coverageNum >= 90 ? "✅" : coverageNum >= 70 ? "⚠️" : "❌";

  console.log(`${coverageIcon} UX Coverage: ${coverage}% (${translated.length}/${uiKeys.size})`);
  console.log();

  // Report missing keys
  if (missingInJa.length > 0) {
    console.log(`📋 Missing translations (${missingInJa.length} keys):`);

    // Group by prefix for better readability
    const grouped: Record<string, string[]> = {};
    for (const key of missingInJa) {
      const prefix = key.split(".")[0];
      if (!grouped[prefix]) grouped[prefix] = [];
      grouped[prefix].push(key);
    }

    for (const [prefix, keys] of Object.entries(grouped).slice(0, 10)) {
      console.log(`   ${prefix}: ${keys.length} keys`);
      for (const key of keys.slice(0, 3)) {
        console.log(`      - ${key}`);
      }
      if (keys.length > 3) {
        console.log(`      ... and ${keys.length - 3} more`);
      }
    }

    if (Object.keys(grouped).length > 10) {
      console.log(`   ... and ${Object.keys(grouped).length - 10} more groups`);
    }
    console.log();

    if (showFix) {
      console.log("📝 Template to add to config-hints-ja.ts:\n");
      console.log(generateTemplate(missingInJa.slice(0, 20)));
      if (missingInJa.length > 20) {
        console.log(`\n... and ${missingInJa.length - 20} more keys`);
      }
      console.log();
    } else {
      console.log("   Run with --fix to see template for missing keys\n");
    }
  }

  // Summary
  console.log("📊 Summary:");
  console.log(`   UX Coverage: ${coverage}%`);
  console.log(`   Translated: ${translated.length}`);
  console.log(`   Missing: ${missingInJa.length}`);
  console.log(`   Threshold: ${threshold}%`);

  if (coverageNum < threshold) {
    console.log(`\n⚠️  Coverage below ${threshold}% threshold`);
    process.exit(1);
  }
}

main();
