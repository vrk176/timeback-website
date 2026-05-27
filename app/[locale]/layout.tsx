import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isValidLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { createSeoMetadata, localeSeo } from "@/lib/seo";
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
  return createSeoMetadata({
    locale: params.locale,
    title: dict.meta.title,
    description: dict.meta.description,
  });
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
  const locale = params.locale as Locale;
  return (
    <div lang={localeSeo[locale].htmlLang}>
      <LanguageSwitcher
        currentLocale={locale}
        label={dict.footer.language}
      />
      {children}
    </div>
  );
}
