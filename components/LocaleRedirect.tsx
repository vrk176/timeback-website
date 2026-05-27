"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";

function detectLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  try {
    const saved = localStorage.getItem("timeback-locale");
    if (saved && (locales as readonly string[]).includes(saved)) {
      return saved as Locale;
    }
  } catch {}

  const browserLangs = navigator.languages ?? [navigator.language];
  for (const lang of browserLangs) {
    if ((locales as readonly string[]).includes(lang)) {
      return lang as Locale;
    }

    if (lang.startsWith("zh")) {
      if (lang.includes("TW") || lang.includes("HK") || lang.includes("Hant")) {
        return "zh-Hant";
      }
      return "zh-Hans";
    }

    const base = lang.split("-")[0];
    if ((locales as readonly string[]).includes(base)) {
      return base as Locale;
    }
  }

  return defaultLocale;
}

export default function LocaleRedirect() {
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
      <div className="text-text-secondary">Loading...</div>
    </div>
  );
}
