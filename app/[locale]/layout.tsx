import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isValidLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isValidLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `/${l}`;
  }
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages,
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isValidLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);
  return (
    <div lang={params.locale as Locale}>
      <LanguageSwitcher
        currentLocale={params.locale as Locale}
        label={dict.footer.language}
      />
      {children}
    </div>
  );
}
