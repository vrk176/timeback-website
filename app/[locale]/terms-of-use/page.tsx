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
    title: `${dict.termsOfUsePage.title} — TimeBack`,
    description: dict.meta.description,
  };
}

export default function TermsOfUse({
  params,
}: {
  params: { locale: string };
}) {
  if (!isValidLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);
  const t = dict.termsOfUsePage;
  const s = t.sections;

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
            {t.title}
          </h1>
          <p className="text-white/70 mt-3">{dict.legal.lastUpdated}</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 prose prose-lg prose-gray">
        <section>
          <h2>{s.acceptance.heading}</h2>
          <p>{s.acceptance.body}</p>
        </section>

        <section>
          <h2>{s.description.heading}</h2>
          <p>{s.description.intro}</p>
          <ul>
            {s.description.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>{s.description.outro}</p>
        </section>

        <section>
          <h2>{s.responsibilities.heading}</h2>

          <h3>{s.responsibilities.passcode.heading}</h3>
          <ul>
            {s.responsibilities.passcode.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{s.responsibilities.appropriate.heading}</h3>
          <ul>
            {s.responsibilities.appropriate.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{s.responsibilities.device.heading}</h3>
          <ul>
            {s.responsibilities.device.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{s.limitations.heading}</h2>

          <h3>{s.limitations.accuracy.heading}</h3>
          <ul>
            {s.limitations.accuracy.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{s.limitations.reliability.heading}</h3>
          <ul>
            {s.limitations.reliability.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>{s.limitations.extension.heading}</h3>
          <ul>
            {s.limitations.extension.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{s.purchases.heading}</h2>
          <ul>
            {s.purchases.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{s.privacy.heading}</h2>
          <p>
            {s.privacy.bodyBefore}
            <Link
              href={`/${params.locale}/privacy-policy`}
              className="text-brand hover:underline"
            >
              {s.privacy.link}
            </Link>
            {s.privacy.bodyAfter}
          </p>
        </section>

        <section>
          <h2>{s.ip.heading}</h2>
          <ul>
            {s.ip.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{s.disclaimer.heading}</h2>
          <p className="text-sm">{s.disclaimer.body}</p>
        </section>

        <section>
          <h2>{s.liability.heading}</h2>
          <p className="text-sm">{s.liability.intro}</p>
          <ul>
            {s.liability.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{s.termination.heading}</h2>
          <p>{s.termination.body}</p>
        </section>

        <section>
          <h2>{s.changes.heading}</h2>
          <p>{s.changes.body}</p>
        </section>

        <section>
          <h2>{s.governing.heading}</h2>
          <p>{s.governing.body}</p>
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
