"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";

function detectLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  // 1. Honor saved preference from previous visit
  try {
    const saved = localStorage.getItem("timeback-locale");
    if (saved && (locales as readonly string[]).includes(saved)) {
      return saved as Locale;
    }
  } catch {}

  // 2. Fall back to browser / system language
  const browserLangs = navigator.languages ?? [navigator.language];
  for (const lang of browserLangs) {
    // Exact match first (e.g. zh-Hans)
    if ((locales as readonly string[]).includes(lang)) {
      return lang as Locale;
    }
    // Chinese special handling (zh-CN → zh-Hans, zh-TW → zh-Hant)
    if (lang.startsWith("zh")) {
      if (lang.includes("TW") || lang.includes("HK") || lang.includes("Hant")) {
        return "zh-Hant";
      }
      return "zh-Hans";
    }
    // Language-only match (e.g. ja from ja-JP, de from de-DE)
    const base = lang.split("-")[0];
    if ((locales as readonly string[]).includes(base)) {
      return base as Locale;
    }
  }
  return defaultLocale;
}

export default function RootPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/${detectLocale()}`);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-page-bg">
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}`} />
        <a href={`/${defaultLocale}`}>Continue to TimeBack</a>
      </noscript>
      <div className="text-text-secondary">Loading…</div>
    </div>
  );
}
