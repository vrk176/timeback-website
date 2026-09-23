import type { Locale } from "@/lib/i18n";

/**
 * Localized screenshot paths under public/shots/{locale}/.
 * iPhone: every locale ships all ten names below.
 * iPad: only rules / schedules / zones exist for every locale
 * (en has no weekly-review / block-screen), so the site only uses these three.
 */
export type IPhoneShot =
  | "onboarding"
  | "rule"
  | "schedule"
  | "zone"
  | "weekly-review"
  | "block-screen"
  | "passcode"
  | "shield"
  | "daily-limit"
  | "rule-blocked";

export type IPadShot = "rules" | "schedules" | "zones";

export function iphoneShot(locale: Locale, name: IPhoneShot) {
  return `/shots/${locale}/iphone/${name}.webp`;
}

export function ipadShot(locale: Locale, name: IPadShot) {
  return `/shots/${locale}/ipad/${name}.webp`;
}

type ImgProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  eager?: boolean;
};

/**
 * Lightweight CSS iPhone frame. Sizes scale with the frame's own width via
 * container-query units, so pass the width through `className`.
 * The simulator captures already contain the Dynamic Island; set `island`
 * only for captures that don't (e.g. the real-device shield shot).
 */
export function PhoneFrame({
  src,
  alt,
  width = 660,
  height = 1434,
  eager = false,
  island = false,
  className = "",
}: Partial<ImgProps> & { src: string; alt: string; island?: boolean; className?: string }) {
  return (
    <div className={`@container relative ${className}`}>
      <div className="relative rounded-[15cqw] bg-[#17112b] p-[3.2cqw] shadow-[0_30px_60px_-20px_rgba(32,15,63,0.55),0_12px_24px_-12px_rgba(32,15,63,0.35)]">
        {/* side buttons */}
        <span aria-hidden="true" className="absolute -left-[0.9cqw] top-[18%] h-[5%] w-[1.2cqw] rounded-l-full bg-[#17112b]" />
        <span aria-hidden="true" className="absolute -left-[0.9cqw] top-[26%] h-[9%] w-[1.2cqw] rounded-l-full bg-[#17112b]" />
        <span aria-hidden="true" className="absolute -right-[0.9cqw] top-[24%] h-[13%] w-[1.2cqw] rounded-r-full bg-[#17112b]" />
        <div className="relative overflow-hidden rounded-[11.8cqw] bg-black">
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className="block h-auto w-full"
          />
          {island && (
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-[2.4cqw] h-[7.6cqw] w-[26cqw] -translate-x-1/2 rounded-full bg-black"
            />
          )}
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[15cqw] ring-1 ring-inset ring-white/15"
        />
      </div>
    </div>
  );
}

/** Lightweight CSS iPad frame with a thinner, uniform bezel. */
export function TabletFrame({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`@container relative ${className}`}>
      <div className="relative rounded-[5.2cqw] bg-[#17112b] p-[2.4cqw] shadow-[0_40px_80px_-30px_rgba(32,15,63,0.6),0_16px_32px_-16px_rgba(32,15,63,0.35)]">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-[0.9cqw] h-[0.7cqw] w-[0.7cqw] -translate-x-1/2 rounded-full bg-[#2c2447]"
        />
        <div className="relative overflow-hidden rounded-[2.9cqw] bg-white">{children}</div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[5.2cqw] ring-1 ring-inset ring-white/15"
        />
      </div>
    </div>
  );
}
