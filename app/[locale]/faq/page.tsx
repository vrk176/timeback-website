import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import {
  absoluteUrl,
  createSeoMetadata,
  getLocalePath,
  jsonLd,
  siteConfig,
} from "@/lib/seo";
import { faqLocales, getFaq, hasFaq } from "@/lib/faq";
import FaqRedirect from "@/components/FaqRedirect";

const REDIRECT_TARGET = "/en/faq";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isValidLocale(params.locale)) return {};
  const locale = params.locale as Locale;

  if (!hasFaq(locale)) {
    return {
      title: "FAQ — TimeBack",
      robots: { index: false, follow: false },
      alternates: { canonical: absoluteUrl(REDIRECT_TARGET) },
    };
  }

  const dict = getDictionary(locale);
  const faq = getFaq(locale);
  return createSeoMetadata({
    locale,
    path: "/faq",
    title: `${faq.title} — TimeBack`,
    description: dict.meta.description,
    availableLocales: faqLocales,
  });
}

export default function FaqPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isValidLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  if (!hasFaq(locale)) {
    return <FaqRedirect target={REDIRECT_TARGET} />;
  }

  const dict = getDictionary(locale);
  const faq = getFaq(locale);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    url: absoluteUrl(getLocalePath(locale, "/faq")),
    mainEntity: faq.entries.map((entry) => ({
      "@type": "Question",
      name: entry.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-page-bg">
      <header className="gradient-hero py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <img src="/logo.png" alt="TimeBack" className="w-6 h-6 rounded-lg" />
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {dict.legal.backToHome}
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            {faq.title}
          </h1>
          <p className="text-white/80 mt-4 max-w-2xl leading-relaxed">
            {faq.intro}
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-4">
          {faq.entries.map((entry, i) => (
            <details
              key={i}
              className="group bg-card-bg rounded-2xl border border-gray-100 shadow-sm open:shadow-md transition-shadow"
              open={i === 0}
            >
              <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-4">
                <h2 className="text-lg md:text-xl font-bold text-text-primary leading-snug">
                  {entry.q}
                </h2>
                <svg
                  className="w-5 h-5 mt-1 shrink-0 text-text-secondary transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-text-secondary leading-relaxed whitespace-pre-line">
                {entry.a}
              </div>
            </details>
          ))}
        </div>

        <section className="mt-16 rounded-3xl bg-card-bg border border-gray-100 p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-text-primary mb-2">
            {faq.contact.heading}
          </h3>
          <p className="text-text-secondary mb-4">{faq.contact.body}</p>
          <p>
            <strong className="text-text-primary">
              {faq.contact.emailLabel}
            </strong>{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-brand hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }}
      />
    </div>
  );
}
