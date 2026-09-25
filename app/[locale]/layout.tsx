import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { locales, isValidLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import {
  baseMetadata,
  baseViewport,
  createSeoMetadata,
  localeSeo,
} from "@/lib/seo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = baseViewport;

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isValidLocale(params.locale)) return baseMetadata;
  const dict = getDictionary(params.locale);
  return {
    ...baseMetadata,
    ...createSeoMetadata({
      locale: params.locale,
      title: dict.meta.title,
      description: dict.meta.description,
    }),
  };
}

// Root layout for every /[locale]/* page, so the static HTML carries
// <html lang="…"> for the page's locale.
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
    <html lang={localeSeo[locale].htmlLang}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageSwitcher
          currentLocale={locale}
          label={dict.footer.language}
        />
        {children}
      </body>
    </html>
  );
}
