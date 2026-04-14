"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({
  currentLocale,
  label,
  variant = "floating",
}: {
  currentLocale: Locale;
  label: string;
  variant?: "floating" | "inline";
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function handleSelect(locale: Locale) {
    // Persist user's choice so root `/` honors it on next visit
    try {
      localStorage.setItem("timeback-locale", locale);
    } catch {}

    // Replace the locale segment in the current pathname
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${locale}`);
    } else {
      segments[0] = locale;
      router.push(`/${segments.join("/")}`);
    }
    setOpen(false);
  }

  if (variant === "floating") {
    return (
      <div
        className="fixed top-5 right-5 z-50"
        ref={ref}
      >
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white/60 text-sm font-semibold text-text-primary hover:bg-white hover:shadow-xl transition-all"
          aria-label={label}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <span>{localeNames[currentLocale]}</span>
          <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[160px]">
            {locales.map((locale) => (
              <button
                key={locale}
                type="button"
                onClick={() => handleSelect(locale)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-brand/5 transition-colors ${
                  locale === currentLocale
                    ? "text-brand font-semibold"
                    : "text-text-primary"
                }`}
              >
                {localeNames[locale]}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-brand transition-colors"
        aria-label={label}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        <span>{localeNames[currentLocale]}</span>
      </button>
      {open && (
        <div className="absolute bottom-full mb-2 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[160px] z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => handleSelect(locale)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-brand/5 transition-colors ${
                locale === currentLocale
                  ? "text-brand font-semibold"
                  : "text-text-primary"
              }`}
            >
              {localeNames[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
