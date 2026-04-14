import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

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
  return {
    title: `${dict.privacyPolicyPage.title} — TimeBack`,
    description: dict.meta.description,
  };
}

export default function PrivacyPolicy({
  params,
}: {
  params: { locale: string };
}) {
  if (!isValidLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);
  const p = dict.privacyPolicyPage;
  const s = p.sections;

  return (
    <div className="min-h-screen bg-page-bg">
      <header className="gradient-hero py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/${params.locale}`}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <img src="/logo.png" alt="TimeBack" className="w-6 h-6 rounded-lg" />
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {dict.legal.backToHome}
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            {p.title}
          </h1>
          <p className="text-white/70 mt-3">{dict.legal.lastUpdated}</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 prose prose-lg prose-gray">
        <section>
          <h2>{s.overview.heading}</h2>
          <p>{s.overview.body}</p>
          <p className="font-semibold text-brand">{s.overview.principle}</p>
        </section>

        <section>
          <h2>{s.notCollect.heading}</h2>
          <ul>
            {s.notCollect.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{s.localData.heading}</h2>
          <p>{s.localData.intro}</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  {s.localData.table.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.localData.table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>{s.appleFrameworks.heading}</h2>

          <h3>{s.appleFrameworks.screenTime.heading}</h3>
          <ul>
            {s.appleFrameworks.screenTime.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{s.appleFrameworks.location.heading}</h3>
          <ul>
            {s.appleFrameworks.location.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{s.appleFrameworks.biometric.heading}</h3>
          <ul>
            {s.appleFrameworks.biometric.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{s.appleFrameworks.storeKit.heading}</h3>
          <ul>
            {s.appleFrameworks.storeKit.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{s.retention.heading}</h2>
          <ul>
            {s.retention.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{s.children.heading}</h2>
          <p>{s.children.body}</p>
        </section>

        <section>
          <h2>{s.thirdParty.heading}</h2>
          <p>{s.thirdParty.body}</p>
          <ul>
            {s.thirdParty.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{s.rights.heading}</h2>
          <p>{s.rights.body}</p>
        </section>

        <section>
          <h2>{s.changes.heading}</h2>
          <p>{s.changes.body}</p>
        </section>

        <section>
          <h2>{s.contact.heading}</h2>
          <p>{s.contact.body}</p>
          <p>
            <strong>{s.contact.emailLabel}</strong>{" "}
            <a href="mailto:connect@hominexis.com">connect@hominexis.com</a>
          </p>
        </section>

        <hr />
        <p className="text-text-secondary italic">{s.footer}</p>
      </main>
    </div>
  );
}
