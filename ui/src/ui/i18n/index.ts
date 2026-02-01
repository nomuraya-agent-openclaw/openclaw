// Simple i18n implementation for OpenClaw UI
// Phase 1: Minimal implementation for Japanese localization

import { en } from "./locales/en";
import { ja } from "./locales/ja";

export type Locale = "en" | "ja";
export type TranslationKey = keyof typeof en;

const locales = { en, ja };

let currentLocale: Locale = "ja"; // Default to Japanese

export function setLocale(locale: Locale) {
  currentLocale = locale;
}

export function getLocale(): Locale {
  return currentLocale;
}

export function t(key: TranslationKey): string {
  return locales[currentLocale][key] || locales.en[key] || key;
}

// Initialize locale from browser or localStorage
// Default: Japanese (regardless of browser language)
export function initLocale() {
  const saved = localStorage.getItem("openclaw-locale") as Locale | null;
  if (saved && (saved === "en" || saved === "ja")) {
    currentLocale = saved;
  } else {
    // Default to Japanese, save it to localStorage
    currentLocale = "ja";
    localStorage.setItem("openclaw-locale", "ja");
  }
}

export function saveLocale(locale: Locale) {
  localStorage.setItem("openclaw-locale", locale);
  setLocale(locale);
}
