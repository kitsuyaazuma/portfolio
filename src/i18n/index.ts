import { getRelativeLocaleUrl } from "astro:i18n";
import en from "../../messages/en.json";
import ja from "../../messages/ja.json";

export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];
export type PagePath = "" | "/publications" | "/reads";

const messages = { en, ja };

export function getMessages(locale: Locale) {
  return messages[locale];
}

export function localizedPath(locale: Locale, page: PagePath = "") {
  return getRelativeLocaleUrl(locale, page.slice(1));
}
