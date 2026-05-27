import type { Metadata } from "next";
import { APP_STORE_URL } from "@/lib/appStore";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://timeback.hominexis.com";

export const siteConfig = {
  name: "TimeBack",
  fullName: "TimeBack: Take Back Your Time",
  url: rawSiteUrl.replace(/\/$/, ""),
  appStoreUrl: APP_STORE_URL,
  appStoreId: "6759700323",
  publisher: "Hominexis",
  contactEmail: "connect@hominexis.com",
  themeColor: "#7c6ef0",
  backgroundColor: "#f8f7fc",
  ogImage: "/screenshots/hero.jpg",
  ogImageWidth: 553,
  ogImageHeight: 1200,
};

export const localeSeo: Record<
  Locale,
  { htmlLang: string; ogLocale: string; keywords: string[] }
> = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    keywords: [
      "screen time app",
      "iOS app blocker",
      "digital wellbeing",
      "focus app",
      "app limits",
      "parental controls",
    ],
  },
  "zh-Hans": {
    htmlLang: "zh-Hans",
    ogLocale: "zh_CN",
    keywords: [
      "屏幕时间管理",
      "iOS 应用限制",
      "专注工具",
      "防沉迷",
      "应用限额",
      "家长控制",
    ],
  },
  "zh-Hant": {
    htmlLang: "zh-Hant",
    ogLocale: "zh_TW",
    keywords: [
      "螢幕時間管理",
      "iOS App 限制",
      "專注工具",
      "數位健康",
      "App 使用限額",
      "家長控制",
    ],
  },
  ja: {
    htmlLang: "ja",
    ogLocale: "ja_JP",
    keywords: [
      "スクリーンタイム",
      "iOS アプリ制限",
      "集中アプリ",
      "スマホ依存対策",
      "デジタルウェルビーイング",
      "ペアレンタルコントロール",
    ],
  },
  ko: {
    htmlLang: "ko",
    ogLocale: "ko_KR",
    keywords: [
      "스크린 타임",
      "iOS 앱 차단",
      "집중 앱",
      "디지털 웰빙",
      "앱 사용 제한",
      "자녀 보호",
    ],
  },
  de: {
    htmlLang: "de",
    ogLocale: "de_DE",
    keywords: [
      "Bildschirmzeit App",
      "iOS App Blocker",
      "Digital Wellbeing",
      "Fokus App",
      "App Limits",
      "Kindersicherung",
    ],
  },
  fr: {
    htmlLang: "fr",
    ogLocale: "fr_FR",
    keywords: [
      "temps d'écran",
      "bloqueur d'apps iOS",
      "bien-etre numerique",
      "application de concentration",
      "limites d'apps",
      "controle parental",
    ],
  },
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

export function getLocalePath(locale: Locale, path = "") {
  const suffix = path && !path.startsWith("/") ? `/${path}` : path;
  return `/${locale}${suffix}`;
}

export function getLanguageAlternates(path = "") {
  const languages: Record<string, string> = {
    "x-default": getLocalePath(defaultLocale, path),
  };

  for (const locale of locales) {
    languages[localeSeo[locale].htmlLang] = getLocalePath(locale, path);
  }

  return languages;
}

export function getAbsoluteLanguageAlternates(path = "") {
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    languages[localeSeo[locale].htmlLang] = absoluteUrl(
      getLocalePath(locale, path),
    );
  }

  languages["x-default"] = absoluteUrl(getLocalePath(defaultLocale, path));
  return languages;
}

export function createSeoMetadata({
  locale,
  path = "",
  title,
  description,
  noIndex = false,
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  noIndex?: boolean;
}): Metadata {
  const canonical = getLocalePath(locale, path);

  return {
    title,
    description,
    keywords: localeSeo[locale].keywords,
    alternates: {
      canonical,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: localeSeo[locale].ogLocale,
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => localeSeo[item].ogLocale),
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
          alt: "TimeBack iPhone app preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function createSoftwareApplicationJsonLd({
  locale,
  description,
  features,
}: {
  locale: Locale;
  description: string;
  features: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    alternateName: siteConfig.fullName,
    applicationCategory: "ProductivityApplication",
    applicationSubCategory: "Screen Time Management",
    operatingSystem: "iOS",
    description,
    inLanguage: localeSeo[locale].htmlLang,
    url: absoluteUrl(getLocalePath(locale)),
    image: absoluteUrl(siteConfig.ogImage),
    downloadUrl: siteConfig.appStoreUrl,
    installUrl: siteConfig.appStoreUrl,
    sameAs: [siteConfig.appStoreUrl],
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: features,
    publisher: {
      "@type": "Organization",
      name: siteConfig.publisher,
      email: siteConfig.contactEmail,
    },
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
