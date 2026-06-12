import type { Locale } from "./i18n";

export type FaqEntry = { q: string; a: string };

export type FaqContent = {
  title: string;
  intro: string;
  entries: FaqEntry[];
  contact: {
    heading: string;
    body: string;
    emailLabel: string;
  };
};

export const faqLocales = ["en", "zh-Hans"] as const;
export type FaqLocale = (typeof faqLocales)[number];

export function hasFaq(locale: Locale): locale is FaqLocale {
  return (faqLocales as readonly string[]).includes(locale);
}

const en: FaqContent = {
  title: "Frequently Asked Questions",
  intro:
    "A short list of the things people ask most often — how blocking actually behaves, why certain taps are required, and how your data is handled.",
  entries: [
    {
      q: "Why does blocking sometimes take a few seconds?",
      a: "When you turn a rule on, TimeBack registers the block with iOS right away. The shield you see on a blocked app, though, is drawn by iOS itself — and iOS can take a few seconds (occasionally longer) to refresh it, especially right after several quick changes. If the shield hasn't appeared yet, the block is still already in place. Give it a moment; toggling the rule repeatedly can actually make iOS take longer.",
    },
    {
      q: "Why do I need to tap Continue after a break ends?",
      a: "When a break ends, the app locks again, and TimeBack waits for you to tap Continue instead of unlocking silently in the background. Part of this is a platform rule — the screen that shows the lock isn't allowed to complete an unlock on its own. And part of it is intentional: that one small tap is a moment to decide whether you really want to go back in.",
    },
    {
      q: "What is the difference between Daily Limits and Schedules?",
      a: "A Daily Limit is a time budget: an app stays available until you've used up the minutes you allowed for today, then it locks. A Schedule is a time window: the apps it covers are locked during the hours you set (for example 22:00–08:00), no matter how little you've used them. They work independently, and one app can be covered by both.",
    },
    {
      q: "What should I check if a rule does not work?",
      a: "1) Open TimeBack once — rules re-sync with the system every time the app comes to the foreground. 2) Make sure Screen Time permission is still granted (iOS Settings → Screen Time). 3) Open the rule and confirm it is enabled and still has apps selected. 4) For Schedules, double-check the time window and the repeat days. 5) Still stuck? Email us from Settings → Support — the message comes pre-filled with your app version, so we can help faster.",
    },
    {
      q: "Does TimeBack upload my app usage?",
      a: "No. Your usage data stays on your device. TimeBack has no accounts and no analytics. Apple's Screen Time framework is also built so that TimeBack itself only works with anonymous app references — not a readable list of what you use.",
    },
    {
      q: "Why does TimeBack need Screen Time permission?",
      a: "Screen Time permission (Apple's Family Controls) is the only mechanism iOS offers that lets one app limit another. Everything TimeBack does — shields, minute counting, schedules — is built on it. Without the permission nothing can be blocked, and if it is revoked later, all rules stop until it is granted again.",
    },
  ],
  contact: {
    heading: "Didn't find your answer?",
    body: "Email us — we read every message.",
    emailLabel: "Email:",
  },
};

const zhHans: FaqContent = {
  title: "常见问题",
  intro:
    "把大家最常问的几件事集中放在这里：屏蔽到底是怎么生效的，为什么有些地方要多按一下，以及你的数据是怎么被处理的。",
  entries: [
    {
      q: "为什么有时屏蔽会延迟几秒？",
      a: "当你打开一条规则时，TimeBack 会立刻把屏蔽登记给 iOS。但你在被屏蔽 App 上看到的那层挡板是 iOS 自己绘制的——它有时需要几秒（偶尔更久）才刷新出来，尤其是在连续快速改动之后。挡板还没出现，不代表屏蔽没有生效；稍等片刻就好，反复开关反而可能让 iOS 刷新得更慢。",
    },
    {
      q: "休息结束后，为什么还要点一下「继续」？",
      a: "休息结束时 App 会重新锁上，TimeBack 会等你点一下「继续」，而不是在后台悄悄解锁。这一半是平台规则——负责显示锁定页的组件，不被允许自行完成解锁；另一半是有意为之：多这一下，正好给你一个想清楚「要不要继续」的瞬间。",
    },
    {
      q: "定时规则和每日限额有什么区别？",
      a: "每日限额是用量预算：在你今天允许的分钟数用完之前，App 一直可用，用完后锁定。定时规则是时间窗口：在你设定的时间段内（比如 22:00–08:00），它覆盖的 App 一律锁定，和用了多久无关。两者各自独立生效，同一个 App 可以同时被两种规则覆盖。",
    },
    {
      q: "规则没生效时，我该怎么检查？",
      a: "1）先把 TimeBack 打开一次——每次回到前台，规则都会和系统重新核对一遍。2）确认屏幕使用时间权限还在（iOS 设置 → 屏幕使用时间）。3）打开这条规则，确认它处于开启状态、选中的 App 还在。4）定时规则再核对一下时间段和重复日。5）还不行？从 设置 → Support 给我们发邮件——邮件会自动带上你的版本号，我们能更快帮你定位。",
    },
    {
      q: "TimeBack 会上传我的使用记录吗？",
      a: "不会。你的使用数据只留在你的设备上。TimeBack 没有账号体系，也没有任何数据统计上报。Apple 的屏幕使用时间框架在设计上也让 TimeBack 自己只能拿到匿名化的 App 引用——而不是一份可读的使用清单。",
    },
    {
      q: "为什么 TimeBack 需要屏幕使用时间权限？",
      a: "屏幕使用时间权限（Apple 的 Family Controls）是 iOS 上唯一允许一个 App 去限制另一个 App 的机制。TimeBack 的挡板、计时、定时规则都建立在它之上。没有这个权限就无法屏蔽任何东西；如果之后撤销，所有规则也会停摆，直到重新授权。",
    },
  ],
  contact: {
    heading: "还是没有找到答案？",
    body: "给我们发邮件吧，每一封我们都会看。",
    emailLabel: "邮箱：",
  },
};

const faqByLocale: Record<FaqLocale, FaqContent> = {
  en,
  "zh-Hans": zhHans,
};

export function getFaq(locale: FaqLocale): FaqContent {
  return faqByLocale[locale];
}
