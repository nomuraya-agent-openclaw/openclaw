import { html, nothing } from "lit";

import { clampText } from "../format";
import type { SkillStatusEntry, SkillStatusReport } from "../types";
import type { SkillMessageMap } from "../controllers/skills";

/**
 * Translate skill source tag to Japanese
 */
const SOURCE_TRANSLATIONS: Record<string, string> = {
  "clawdbot-bundled": "バンドル済み",
  "openclaw-bundled": "バンドル済み",
  bundled: "バンドル済み",
  workspace: "ワークスペース",
  managed: "管理済み",
  local: "ローカル",
  custom: "カスタム",
};

function translateSource(source: string): string {
  return SOURCE_TRANSLATIONS[source] ?? source;
}

/**
 * Translate skill description to Japanese (for bundled skills)
 */
const DESCRIPTION_TRANSLATIONS: Record<string, string> = {
  // 1password
  "Set up and use 1Password CLI (op). Use when installing the CLI, enabling desktop app integration, signing in (single or multi-account), or managing vaults and items.":
    "1Password CLI（op）のセットアップと使用。CLIのインストール、デスクトップアプリ連携、サインイン、保管庫とアイテムの管理に使用。",
  // apple-notes (updated: backticks + OpenClaw)
  "Manage Apple Notes via the `memo` CLI on macOS (create, view, edit, delete, search, move, and export notes). Use when a user asks OpenClaw to interact with their Apple Notes.":
    "macOSの`memo` CLI経由でApple Notesを管理（作成、表示、編集、削除、検索、移動、エクスポート）。",
  // apple-notes (legacy: single quotes + Clawdbot)
  "Manage Apple Notes via the 'memo' CLI on macOS (create, view, edit, delete, search, move, and export notes). Use when a user asks Clawdbot to interact with their Apple Notes.":
    "macOSの「memo」CLI経由でApple Notesを管理（作成、表示、編集、削除、検索、移動、エクスポート）。",
  // apple-reminders (updated: backticks)
  "Manage Apple Reminders via the `remindctl` CLI on macOS (list, add, edit, complete, delete). Supports lists, date filters, and JSON/plain output.":
    "macOSの`remindctl` CLI経由でAppleリマインダーを管理（一覧、追加、編集、完了、削除）。リスト、日付フィルター、JSON/プレーン出力に対応。",
  // apple-reminders (legacy: single quotes)
  "Manage Apple Reminders via the 'remindctl' CLI on macOS. Supports lists, date filters, and JSON/plain output.":
    "macOSの「remindctl」CLI経由でAppleリマインダーを管理。リスト、日付フィルター、JSON/プレーン出力に対応。",
  // bear-notes
  "Create, search, and manage Bear notes via grizzly CLI.":
    "grizzly CLI経由でBearノートの作成、検索、管理。",
  // bird
  "X/Twitter CLI for reading, searching, posting, and engagement via cookies.":
    "X/Twitter CLI。Cookie経由で閲覧、検索、投稿、エンゲージメント。",
  // browser
  "Browser automation via Playwright. Navigate pages, extract content, fill forms, click elements, and take screenshots.":
    "Playwright経由のブラウザ自動化。ページ移動、コンテンツ抽出、フォーム入力、クリック、スクリーンショット。",
  // calculator
  "Perform mathematical calculations with support for basic arithmetic, scientific functions, and unit conversions.":
    "基本算術、科学関数、単位変換をサポートする数学計算。",
  // calendar
  "Manage macOS Calendar events via icalBuddy CLI. List, search, and view calendar events.":
    "icalBuddy CLI経由でmacOSカレンダーイベントを管理。イベントの一覧、検索、表示。",
  // clipboard
  "Read and write to the system clipboard. Copy text, images, or files to clipboard and paste clipboard contents.":
    "システムクリップボードの読み書き。テキスト、画像、ファイルのコピー＆ペースト。",
  // contacts
  "Access and search macOS Contacts via contacts-cli. Find contact information by name, email, or phone number.":
    "contacts-cli経由でmacOS連絡先にアクセス・検索。名前、メール、電話番号で連絡先を検索。",
  // dalle
  "Generate images using DALL-E 3. Create, edit, and vary images based on text prompts.":
    "DALL-E 3を使用した画像生成。テキストプロンプトに基づく画像の作成、編集、バリエーション。",
  // fetch
  "Fetch and process web content. Download pages, extract text, parse HTML, and handle redirects.":
    "Webコンテンツの取得と処理。ページダウンロード、テキスト抽出、HTML解析、リダイレクト処理。",
  // filesystem
  "File system operations. Read, write, copy, move, delete files and directories. Search and list contents.":
    "ファイルシステム操作。ファイルとディレクトリの読み書き、コピー、移動、削除、検索、一覧表示。",
  // git
  "Git version control operations. Clone, commit, push, pull, branch, merge, and view history.":
    "Gitバージョン管理操作。クローン、コミット、プッシュ、プル、ブランチ、マージ、履歴表示。",
  // github
  "GitHub API operations. Manage repositories, issues, pull requests, and workflows.":
    "GitHub API操作。リポジトリ、Issue、プルリクエスト、ワークフローの管理。",
  // google-search
  "Search Google and retrieve results. Get web pages, images, news, and other search results.":
    "Google検索と結果取得。Webページ、画像、ニュースなどの検索結果を取得。",
  // homebrew
  "Manage macOS packages via Homebrew. Install, update, remove packages and manage taps.":
    "Homebrew経由でmacOSパッケージを管理。パッケージのインストール、更新、削除、タップ管理。",
  // image
  "Image processing operations. Resize, crop, convert, compress, and apply filters to images.":
    "画像処理操作。画像のリサイズ、切り抜き、変換、圧縮、フィルター適用。",
  // jira
  "Jira project management. Create, update, search issues, manage sprints and boards.":
    "Jiraプロジェクト管理。Issue作成・更新・検索、スプリントとボードの管理。",
  // linear
  "Linear project management. Create, update, and search issues, manage projects and cycles.":
    "Linearプロジェクト管理。Issue作成・更新・検索、プロジェクトとサイクルの管理。",
  // mail
  "Send and read emails via macOS Mail or SMTP. Compose, reply, forward, and search messages.":
    "macOS MailまたはSMTP経由でメール送受信。メッセージの作成、返信、転送、検索。",
  // memory
  "Persistent memory for storing and retrieving information across sessions.":
    "セッション間で情報を保存・取得する永続メモリ。",
  // music
  "Control Apple Music playback. Play, pause, skip, search, and manage playlists.":
    "Apple Musicの再生制御。再生、一時停止、スキップ、検索、プレイリスト管理。",
  // notion
  "Notion workspace management. Create, read, update pages, databases, and blocks.":
    "Notionワークスペース管理。ページ、データベース、ブロックの作成、読み取り、更新。",
  // ocr
  "Optical character recognition. Extract text from images, PDFs, and screenshots.":
    "光学文字認識（OCR）。画像、PDF、スクリーンショットからテキスト抽出。",
  // perplexity
  "Search and answer questions using Perplexity AI.":
    "Perplexity AIを使用した検索と質問回答。",
  // postgres
  "PostgreSQL database operations. Query, insert, update, delete, and manage schemas.":
    "PostgreSQLデータベース操作。クエリ、挿入、更新、削除、スキーマ管理。",
  // python
  "Execute Python code in a sandboxed environment. Run scripts, install packages, and process data.":
    "サンドボックス環境でPythonコードを実行。スクリプト実行、パッケージインストール、データ処理。",
  // raycast
  "Interact with Raycast extensions and commands on macOS.":
    "macOSでRaycastの拡張機能とコマンドを操作。",
  // shell
  "Execute shell commands. Run scripts, manage processes, and interact with the terminal.":
    "シェルコマンドの実行。スクリプト実行、プロセス管理、ターミナル操作。",
  // slack
  "Slack workspace operations. Send messages, manage channels, and interact with users.":
    "Slackワークスペース操作。メッセージ送信、チャンネル管理、ユーザーとのやり取り。",
  // spotify
  "Control Spotify playback. Play, pause, skip, search, and manage playlists.":
    "Spotifyの再生制御。再生、一時停止、スキップ、検索、プレイリスト管理。",
  // sqlite
  "SQLite database operations. Query, insert, update, delete, and manage local databases.":
    "SQLiteデータベース操作。ローカルDBのクエリ、挿入、更新、削除、管理。",
  // tavily
  "Search the web using Tavily AI search API.":
    "Tavily AI検索APIを使用したWeb検索。",
  // terminal
  "Terminal emulator operations. Send commands, read output, and manage sessions.":
    "ターミナルエミュレータ操作。コマンド送信、出力読み取り、セッション管理。",
  // todoist
  "Todoist task management. Create, update, complete tasks, and manage projects.":
    "Todoistタスク管理。タスクの作成、更新、完了、プロジェクト管理。",
  // weather
  "Get current weather and forecasts for any location.":
    "任意の場所の現在の天気と予報を取得。",
  // youtube
  "Search and get information about YouTube videos.":
    "YouTube動画の検索と情報取得。",
  // zapier
  "Trigger Zapier automations and webhooks.":
    "Zapierの自動化とWebhookをトリガー。",
  // blogwatcher
  "Monitor blogs and RSS/Atom feeds for updates using the blogwatcher CLI.":
    "blogwatcher CLIでブログとRSS/Atomフィードの更新を監視。",
  // blucli
  "BluOS CLI (blu) for discovery, playback, grouping, and volume.":
    "BluOS CLI（blu）で検出、再生、グループ化、音量調整。",
  // clawhub
  "Use the ClawHub CLI to search, install, update, and publish agent skills from clawhub.com. Use when you need to fetch new skills on the fly.":
    "ClawHub CLIでclawhub.comからスキルの検索、インストール、更新、公開。新しいスキルを即座に取得する場合に使用。",
  // coding-agent
  "Run Codex CLI, Claude Code, OpenCode, or Pi Coding Agent via background process for programmatic control.":
    "Codex CLI、Claude Code、OpenCode、Pi Coding Agentをバックグラウンドで実行・制御。",
  // eightctl
  "Control Eight Sleep pods (status, temperature, alarms, schedules).":
    "Eight Sleepポッドの制御（状態、温度、アラーム、スケジュール）。",
  // gemini
  "Gemini CLI for one-shot Q&A, summaries, and generation.":
    "Gemini CLIでQ&A、要約、生成。",
  // gifgrep
  "Search GIF providers with CLI/TUI, download results, and extract stills/sheets.":
    "CLI/TUIでGIFプロバイダーを検索、ダウンロード、静止画/シート抽出。",
  // github
  "Interact with GitHub using the `gh` CLI. Use `gh issue`, `gh pr`, `gh run`, and `gh api` for issues, PRs, CI runs, and advanced queries.":
    "`gh` CLIでGitHubを操作。Issue、PR、CIラン、高度なクエリに`gh issue`、`gh pr`、`gh run`、`gh api`を使用。",
  // gog
  "Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, and Docs.":
    "Google Workspace CLI。Gmail、カレンダー、ドライブ、連絡先、スプレッドシート、ドキュメントを操作。",
  // goplaces
  "Query Google Places API (New) via the goplaces CLI for text search, place details, resolve, and reviews. Use for human-friendly place lookups.":
    "goplaces CLIでGoogle Places API（New）をクエリ。テキスト検索、場所詳細、解決、レビュー。",
  // himalaya
  "CLI to manage emails via IMAP/SMTP. Use `himalaya` to list, read, write, reply, forward, search, and organize emails from the terminal. Supports multiple accounts.":
    "IMAP/SMTP経由でメール管理。`himalaya`でメールの一覧、読み取り、作成、返信、転送、検索、整理。複数アカウント対応。",
  // imsg
  "iMessage/SMS CLI for listing chats, history, watch, and sending.":
    "iMessage/SMS CLI。チャット一覧、履歴、監視、送信。",
  // local-places
  "Search for places (restaurants, cafes, etc.) via Google Places API proxy on localhost.":
    "ローカルホストのGoogle Places APIプロキシ経由で場所（レストラン、カフェ等）を検索。",
  // mcporter
  "Use the mcporter CLI to list, configure, auth, and call MCP servers/tools directly (HTTP or stdio), including ad-hoc servers, config edits, and tool invocations.":
    "mcporter CLIでMCPサーバー/ツールの一覧、設定、認証、呼び出し。アドホックサーバー、設定編集、ツール呼び出しに対応。",
  // model-usage
  "Use CodexBar CLI local cost usage to summarize per-model usage for Codex or Claude, including the current (most recent) model or a full model breakdown.":
    "CodexBar CLIでCodexまたはClaudeのモデル別使用量を要約。現在のモデルまたは全モデルの内訳を表示。",
  // nano-pdf
  "Edit PDFs with natural-language instructions using the nano-pdf CLI.":
    "nano-pdf CLIで自然言語の指示を使ってPDFを編集。",
  // obsidian
  "Work with Obsidian vaults (plain Markdown notes) and automate via obsidian-cli.":
    "Obsidianボールト（プレーンMarkdownノート）の操作とobsidian-cli経由の自動化。",
  // openai-whisper
  "Local speech-to-text with the Whisper CLI (no API key).":
    "Whisper CLIでローカル音声認識（APIキー不要）。",
  // oracle
  "Best practices for using the oracle CLI (prompt + file bundling, engines, sessions, and file attachment patterns).":
    "oracle CLIのベストプラクティス（プロンプト+ファイルバンドル、エンジン、セッション、ファイル添付パターン）。",
  // ordercli
  "Foodora-only CLI for checking past orders and active order status (Deliveroo WIP).":
    "Foodora専用CLI。過去の注文と現在の注文状況を確認（Deliverooは開発中）。",
  // peekaboo
  "Capture and automate macOS UI with the Peekaboo CLI.":
    "Peekaboo CLIでmacOS UIのキャプチャと自動化。",
  // session-logs
  "Search and analyze your own session logs (older/parent conversations) using jq.":
    "jqを使用して自分のセッションログ（過去の会話）を検索・分析。",
  // skill-creator
  "Create or update AgentSkills. Use when designing, structuring, or packaging skills with scripts, references, and assets.":
    "AgentSkillsの作成・更新。スキルの設計、構造化、スクリプト・参照・アセットのパッケージング。",
  // slack (updated for OpenClaw)
  "Use when you need to control Slack from OpenClaw via the slack tool, including reacting to messages or pinning/unpinning items in Slack channels.":
    "OpenClawからslackツール経由でSlackを制御。メッセージへのリアクション、ピン留め/解除など。",
  // songsee
  "Generate spectrograms and feature-panel visualizations from audio with the songsee CLI.":
    "songsee CLIでオーディオからスペクトログラムと特徴パネルの可視化を生成。",
  // sonoscli
  "Control Sonos speakers (discover/status/play/volume/group).":
    "Sonosスピーカーの制御（検出/状態/再生/音量/グループ）。",
  // spotify-player
  "Terminal Spotify playback/search via spogo (preferred) or spotify_player.":
    "ターミナルでSpotify再生/検索。spogo（推奨）またはspotify_player経由。",
  // things-mac
  "Manage Things 3 via the `things` CLI on macOS (add/update projects+todos via URL scheme; read/search/list from the local Things database). Use when working with tasks, projects, areas, or tags in Things.":
    "macOSの`things` CLIでThings 3を管理。URLスキーム経由でプロジェクト/Todo追加・更新、ローカルDBから読み取り/検索/一覧。",
  // tmux
  "Remote-control tmux sessions for interactive CLIs by sending keystrokes and scraping pane output.":
    "tmuxセッションをリモート制御。キーストローク送信とペーン出力のスクレイピング。",
  // trello
  "Manage Trello boards, lists, and cards via the Trello REST API.":
    "Trello REST APIでボード、リスト、カードを管理。",
  // voice-call (OpenClaw)
  "Start voice calls via the OpenClaw voice-call plugin.":
    "OpenClaw voice-callプラグイン経由で音声通話を開始。",
  // voice-call (Clawdbot legacy)
  "Start voice calls via the Clawdbot voice-call plugin.":
    "Clawdbot voice-callプラグイン経由で音声通話を開始。",
  // wacli
  "Send WhatsApp messages to other people or search/sync WhatsApp history via the wacli CLI (not for normal user chats).":
    "wacli CLIでWhatsAppメッセージ送信・履歴検索/同期（通常のユーザーチャットには使用しない）。",
  // video-frames
  "Extract frames or short clips from videos using ffmpeg.":
    "ffmpegを使用して動画からフレームまたは短いクリップを抽出。",
  // weather
  "Get current weather and forecasts (no API key required).":
    "現在の天気と予報を取得（APIキー不要）。",
  // llama-model
  "Switch between local LLM models (llama.cpp). Use when changing models (vision/text), checking current model, or adjusting context size.":
    "ローカルLLMモデル（llama.cpp）を切り替え。モデル変更（vision/text）、現在のモデル確認、コンテキストサイズ調整に使用。",
};

function translateDescription(description: string): string {
  // Exact match first
  if (DESCRIPTION_TRANSLATIONS[description]) {
    return DESCRIPTION_TRANSLATIONS[description];
  }
  // Try prefix match (for descriptions that may have been updated)
  for (const [key, value] of Object.entries(DESCRIPTION_TRANSLATIONS)) {
    // Match if description starts with first 50 chars of key (ignoring minor variations)
    const keyPrefix = key.slice(0, 50);
    if (description.startsWith(keyPrefix)) {
      return value;
    }
  }
  return description;
}

/**
 * Translate install label from English to Japanese
 * e.g. "Install memo via Homebrew" → "Homebrewでmemoをインストール"
 */
function translateInstallLabel(label: string): string {
  // Exact matches
  if (label === "Run installer") return "インストーラーを実行";
  // Pattern: "Download X"
  const downloadMatch = label.match(/^Download\s+(.+)$/i);
  if (downloadMatch) {
    return `${downloadMatch[1]}をダウンロード`;
  }
  // Pattern: "Install X via Homebrew"
  const viaMatch = label.match(/^Install\s+(.+?)\s+via\s+Homebrew$/i);
  if (viaMatch) {
    return `Homebrewで${viaMatch[1]}をインストール`;
  }
  // Pattern: "Install X (brew)" or "Install X (go)" or "Install X (npm)"
  const parenMatch = label.match(/^Install\s+(.+?)\s+\((.+?)\)$/i);
  if (parenMatch) {
    return `${parenMatch[1]}をインストール（${parenMatch[2]}）`;
  }
  // Pattern: "Install X"
  const simpleMatch = label.match(/^Install\s+(.+)$/i);
  if (simpleMatch) {
    return `${simpleMatch[1]}をインストール`;
  }
  // Fallback: return original
  return label;
}

export type SkillsProps = {
  loading: boolean;
  report: SkillStatusReport | null;
  error: string | null;
  filter: string;
  edits: Record<string, string>;
  busyKey: string | null;
  messages: SkillMessageMap;
  onFilterChange: (next: string) => void;
  onRefresh: () => void;
  onToggle: (skillKey: string, enabled: boolean) => void;
  onEdit: (skillKey: string, value: string) => void;
  onSaveKey: (skillKey: string) => void;
  onInstall: (skillKey: string, name: string, installId: string) => void;
};

export function renderSkills(props: SkillsProps) {
  const skills = props.report?.skills ?? [];
  const filter = props.filter.trim().toLowerCase();
  const filtered = filter
    ? skills.filter((skill) =>
        [skill.name, skill.description, skill.source]
          .join(" ")
          .toLowerCase()
          .includes(filter),
      )
    : skills;

  return html`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">スキル</div>
          <div class="card-sub">バンドル、管理、ワークスペースのスキル</div>
        </div>
        <button class="btn" ?disabled=${props.loading} @click=${props.onRefresh}>
          ${props.loading ? "読み込み中…" : "更新"}
        </button>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>フィルター</span>
          <input
            .value=${props.filter}
            @input=${(e: Event) =>
              props.onFilterChange((e.target as HTMLInputElement).value)}
            placeholder="スキルを検索"
          />
        </label>
        <div class="muted">${filtered.length}件表示</div>
      </div>

      ${props.error
        ? html`<div class="callout danger" style="margin-top: 12px;">${props.error}</div>`
        : nothing}

      ${filtered.length === 0
        ? html`<div class="muted" style="margin-top: 16px;">スキルが見つかりません</div>`
        : html`
            <div class="list" style="margin-top: 16px;">
              ${filtered.map((skill) => renderSkill(skill, props))}
            </div>
          `}
    </section>
  `;
}

function renderSkill(skill: SkillStatusEntry, props: SkillsProps) {
  const busy = props.busyKey === skill.skillKey;
  const apiKey = props.edits[skill.skillKey] ?? "";
  const message = props.messages[skill.skillKey] ?? null;
  const canInstall =
    skill.install.length > 0 && skill.missing.bins.length > 0;
  const missing = [
    ...skill.missing.bins.map((b) => `bin:${b}`),
    ...skill.missing.env.map((e) => `env:${e}`),
    ...skill.missing.config.map((c) => `config:${c}`),
    ...skill.missing.os.map((o) => `os:${o}`),
  ];
  const reasons: string[] = [];
  if (skill.disabled) reasons.push("無効化済み");
  if (skill.blockedByAllowlist) reasons.push("許可リストでブロック");
  return html`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">
          ${skill.emoji ? `${skill.emoji} ` : ""}${skill.name}
        </div>
        <div class="list-sub">${clampText(translateDescription(skill.description), 140)}</div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${translateSource(skill.source)}</span>
          <span class="chip ${skill.eligible ? "chip-ok" : "chip-warn"}">
            ${skill.eligible ? "利用可能" : "ブロック"}
          </span>
          ${skill.disabled ? html`<span class="chip chip-warn">無効</span>` : nothing}
        </div>
        ${missing.length > 0
          ? html`
              <div class="muted" style="margin-top: 6px;">
                不足: ${missing.join(", ")}
              </div>
            `
          : nothing}
        ${reasons.length > 0
          ? html`
              <div class="muted" style="margin-top: 6px;">
                理由: ${reasons.join(", ")}
              </div>
            `
          : nothing}
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; flex-wrap: wrap;">
          <button
            class="btn"
            ?disabled=${busy}
            @click=${() => props.onToggle(skill.skillKey, skill.disabled)}
          >
            ${skill.disabled ? "有効化" : "無効化"}
          </button>
          ${canInstall
            ? html`<button
                class="btn"
                ?disabled=${busy}
                @click=${() =>
                  props.onInstall(skill.skillKey, skill.name, skill.install[0].id)}
              >
                ${busy ? "インストール中…" : translateInstallLabel(skill.install[0].label)}
              </button>`
            : nothing}
        </div>
        ${message
          ? html`<div
              class="muted"
              style="margin-top: 8px; color: ${
                message.kind === "error"
                  ? "var(--danger-color, #d14343)"
                  : "var(--success-color, #0a7f5a)"
              };"
            >
              ${message.message}
            </div>`
          : nothing}
        ${skill.primaryEnv
          ? html`
              <div class="field" style="margin-top: 10px;">
                <span>APIキー</span>
                <input
                  type="password"
                  .value=${apiKey}
                  @input=${(e: Event) =>
                    props.onEdit(skill.skillKey, (e.target as HTMLInputElement).value)}
                />
              </div>
              <button
                class="btn primary"
                style="margin-top: 8px;"
                ?disabled=${busy}
                @click=${() => props.onSaveKey(skill.skillKey)}
              >
                キー保存
              </button>
            `
          : nothing}
      </div>
    </div>
  `;
}
