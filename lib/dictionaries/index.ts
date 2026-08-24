import type { Locale } from "../i18n";
import en, { type Dictionary } from "./en";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";
import ja from "./ja";
import ko from "./ko";
import de from "./de";
import fr from "./fr";
import es from "./es";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
  ja,
  ko,
  de,
  fr,
  es,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export type { Dictionary };
