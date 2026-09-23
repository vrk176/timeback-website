import type { Dictionary } from "@/lib/dictionaries/en";
import type { Locale } from "@/lib/i18n";

const DISCORD_URL = "https://discord.gg/HB5pU9sYU";

export default function Footer({
  dict,
  locale,
}: {
  dict: Dictionary["footer"];
  locale: Locale;
}) {
  return (
    <footer className="border-t border-ink/[0.06] px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-xl" />
          <span className="text-lg font-bold text-ink">TimeBack</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-sm text-text-secondary">
          <a href="#features" className="transition-colors hover:text-brand">
            {dict.features}
          </a>
          <a href={`/${locale}/privacy-policy`} className="transition-colors hover:text-brand">
            {dict.privacy}
          </a>
          <a href={`/${locale}/terms-of-use`} className="transition-colors hover:text-brand">
            {dict.terms}
          </a>
          <a href={`/${locale}/faq`} className="transition-colors hover:text-brand">
            {dict.faq}
          </a>
          <a href="mailto:connect@hominexis.com" className="transition-colors hover:text-brand">
            {dict.contact}
          </a>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
            {dict.discord}
          </a>
        </div>

        <p className="text-center text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} Hominexis. {dict.rights}
        </p>
      </div>
    </footer>
  );
}
