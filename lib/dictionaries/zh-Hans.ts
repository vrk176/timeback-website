import type { Dictionary } from "./en";

const zhHans: Dictionary = {
  meta: {
    title: "TimeBack — 夺回你的屏幕时间",
    description:
      "TimeBack 帮你用强大的隐私优先工具建立更健康的手机使用习惯。每日限额、强制休息、定时计划、位置区域等功能,免费使用,100% 私密。",
  },
  hero: {
    badge: "即将登陆 App Store",
    titleLine1: "把时间,",
    titleLine2: "还给自己。",
    subtitle:
      "用强大的隐私优先工具建立更健康的屏幕使用习惯。完全免费。无需账号。永无广告。",
    exploreFeatures: "探索功能",
    comingSoon: "敬请期待",
    badgePrivateTitle: "100% 私密",
    badgePrivateSub: "仅存储于设备",
    badgeBreaksTitle: "智能休息",
    badgeBreaksSub: "保护你的眼睛",
  },
  features: {
    eyebrow: "功能",
    titlePart1: "你所需的一切,助你",
    titleHighlight: "保持专注",
    subtitle: "强大的工具在后台默默运行,助你养成更好的屏幕使用习惯,毫不打扰。",
    items: [
      {
        title: "每日限额",
        description:
          "为任何应用或类别设置使用时长。时间用完时自动屏蔽 — 无需意志力。",
      },
      {
        title: "强制休息",
        description:
          "持续使用后强制休息,保护你的专注力和眼睛。休息结束后自动恢复。",
      },
      {
        title: "定时计划",
        description:
          "在工作、学习或睡眠时段屏蔽干扰应用。支持跨夜时段设置。",
      },
      {
        title: "位置区域",
        description: "当你进入学校或办公室等特定区域时自动屏蔽应用。",
      },
      {
        title: "自定义屏蔽页",
        description: "用你自己的图标、文字和解锁方式个性化屏蔽页面。",
      },
      {
        title: "监护人模式",
        description:
          "由家长或督促伙伴持有的独立密码。防止规则被绕过。",
      },
    ],
  },
  showcase: {
    eyebrow: "应用预览",
    titlePart1: "看看它",
    titleHighlight: "如何运作",
    subtitle: "精美直观的界面,默默守护你的专注力,绝不碍事。",
    labels: ["欢迎", "每日限额", "定时计划", "位置区域", "屏蔽页面", "监护人模式"],
  },
  howItWorks: {
    eyebrow: "工作原理",
    titlePart1: "简单如",
    titleHighlight: "1-2-3",
    steps: [
      {
        title: "设定你的规则",
        description:
          "选择要限制的应用,配置每日限额、定时计划或位置区域屏蔽。不到一分钟搞定。",
      },
      {
        title: "保持专注",
        description:
          "TimeBack 在后台默默运行。达到限额时,可自定义的屏蔽页面会出现 — 温柔地提醒你休息一下。",
      },
      {
        title: "养成更好习惯",
        description:
          "随着时间推移,你会自然而然地减少拿起手机的次数。TimeBack 帮你夺回时间,投入真正重要的事情。",
      },
    ],
  },
  privacy: {
    eyebrow: "隐私优先",
    titlePart1: "100% 私密。",
    titleHighlight: "零数据上传。",
    ever: "从不。",
    trustBadge: "免费。无广告。无第三方 SDK。毫不妥协。",
    items: [
      {
        title: "仅存储于设备",
        description: "你的所有数据都保存在 iPhone 上。没有任何数据离开你的设备。",
      },
      {
        title: "无需账号",
        description: "立即开始使用 TimeBack。无需注册、无需邮箱、毫不麻烦。",
      },
      {
        title: "零追踪",
        description: "无分析、无遥测、无数据收集。我们看不到你的数据。",
      },
      {
        title: "Apple 官方 API",
        description: "基于 Apple 的 Screen Time API 打造。安全、沙盒隔离、可靠。",
      },
    ],
  },
  cta: {
    title: "敬请期待",
    subtitle: "TimeBack 即将登陆 App Store — 完全免费。敬请关注。",
    badge: "即将在 App Store 上架",
  },
  footer: {
    features: "功能",
    privacy: "隐私政策",
    terms: "使用条款",
    contact: "联系我们",
    rights: "保留所有权利。",
    language: "语言",
  },
  legal: {
    backToHome: "返回首页",
    lastUpdated: "最后更新:2026 年 3 月 30 日",
  },
  privacyPolicyPage: {
    title: "隐私政策",
    sections: {
      overview: {
        heading: "概述",
        body: "TimeBack(以下简称“本应用”)由 Hominexis 开发。我们高度重视您的隐私。本政策说明本应用如何处理您的数据。",
        principle:
          "核心原则:TimeBack 不在任何外部服务器上收集、传输或存储任何个人数据。所有数据都保留在您的设备上。",
      },
      notCollect: {
        heading: "我们不收集的数据",
        items: [
          "我们不收集个人信息(姓名、邮箱、电话号码)",
          "我们不收集使用分析或行为数据",
          "我们不使用广告 SDK 或追踪框架",
          "我们不与任何第三方共享数据",
          "我们不使用 Cookie 或跨应用追踪",
          "我们不要求创建账号或登录",
        ],
      },
      localData: {
        heading: "存储在您设备上的本地数据",
        intro:
          "以下数据仅通过 Apple 的 App Group 容器存储在您的设备上,从不传输:",
        table: {
          headers: ["数据", "用途"],
          rows: [
            ["应用使用规则", "您配置的时间限额、休息模式和按需访问设置"],
            ["定时规则", "您配置的屏蔽时间表"],
            ["地理围栏规则", "区域屏蔽的位置坐标和半径"],
            ["屏蔽页配置", "您自定义的屏蔽页面外观"],
            ["密码哈希", "您的 PIN 和监护人 PIN 的 SHA-256 哈希(原始 PIN 从不存储)"],
            ["通知偏好", "您按类别设置的通知开关状态"],
            ["使用检查点", "用于仪表板显示的应用使用分钟数近似值"],
            ["干扰计数", "每日点击“继续使用”的次数"],
          ],
        },
      },
      appleFrameworks: {
        heading: "Apple 框架与 API",
        screenTime: {
          heading:
            "屏幕使用时间 API(FamilyControls / ManagedSettings / DeviceActivity)",
          items: [
            "用于监控应用使用时长并执行屏蔽",
            "所有使用数据由 Apple 的系统扩展在本地处理",
            "TimeBack 无权访问您的浏览历史、消息内容或应用内数据",
            "TimeBack 只能看到不透明的应用标记和聚合使用时长",
          ],
        },
        location: {
          heading: "定位服务(CoreLocation)",
          items: [
            "仅用于地理围栏功能",
            "位置数据在本地处理以判断您是否在已配置区域内",
            "位置坐标仅存储在设备上的区域规则配置中",
            "不向任何服务器传输位置数据",
            "您可以随时在系统设置中关闭位置访问",
          ],
        },
        biometric: {
          heading: "生物认证(LocalAuthentication)",
          items: [
            "可选用于 Face ID / Touch ID 应用锁",
            "生物数据完全由 Apple 的 Secure Enclave 处理",
            "TimeBack 从不访问或存储生物数据",
          ],
        },
        storeKit: {
          heading: "StoreKit(应用内购买)",
          items: [
            "用于可选的“请开发者喝咖啡”打赏",
            "购买交易由 Apple 处理",
            "我们不接收任何个人支付信息",
          ],
        },
      },
      retention: {
        heading: "数据保留",
        items: [
          "所有数据仅存储在您的设备上",
          "卸载应用将永久删除所有数据",
          "TimeBack 相关数据没有云端备份",
          "每日计数器(使用量、干扰次数)在午夜自动重置",
        ],
      },
      children: {
        heading: "儿童隐私",
        body: "TimeBack 可通过监护人密码功能作为家长控制工具使用。本应用不会有意收集儿童的个人信息。所有数据都保留在设备本地。",
      },
      thirdParty: {
        heading: "第三方服务",
        body: "TimeBack 不集成任何第三方分析、广告或追踪服务。仅与 Apple 服务器进行以下外部通信:",
        items: [
          "应用内购买交易验证(StoreKit)",
          "地图瓦片加载(MapKit,用于地理围栏功能)",
        ],
      },
      rights: {
        heading: "您的权利",
        body: "由于我们不收集任何个人数据,我们的服务器上没有可访问、修改或删除的个人数据。您设备上的所有数据完全由您掌控,可通过卸载应用删除。",
      },
      changes: {
        heading: "政策变更",
        body: "我们可能会不时更新本隐私政策。变更将以更新的“最后更新”日期发布在此页面。变更后继续使用本应用即表示接受更新后的政策。",
      },
      contact: {
        heading: "联系我们",
        body: "如您对本隐私政策有任何疑问,请通过以下方式联系我们:",
        emailLabel: "邮箱:",
      },
      footer: "TimeBack 由 Hominexis 开发并维护。",
    },
  },
  termsOfUsePage: {
    title: "使用条款",
    sections: {
      acceptance: {
        heading: "1. 条款接受",
        body: "通过下载、安装或使用 TimeBack(以下简称“本应用”),您即同意本使用条款。如果您不同意,请勿使用本应用。",
      },
      description: {
        heading: "2. 服务描述",
        intro:
          "TimeBack 是一款 iOS 屏幕使用时间管理应用,通过以下方式帮助用户管理应用使用:",
        items: [
          "每日使用时间限额",
          "强制休息间隔",
          "基于时间的屏蔽计划",
          "基于位置(地理围栏)的屏蔽",
          "可自定义的屏蔽页面",
        ],
        outro:
          "本应用使用 Apple 的 Screen Time API(FamilyControls、ManagedSettings、DeviceActivity)来提供这些功能。",
      },
      responsibilities: {
        heading: "3. 用户责任",
        passcode: {
          heading: "3.1 密码管理",
          items: [
            "您有责任记住您的 PIN 密码和监护人密码",
            "监护人密码一旦遗忘将无法恢复;唯一的解决办法是卸载并重新安装本应用,这将删除所有规则和设置",
            "我们强烈建议将监护人密码交由可信任的人保管",
          ],
        },
        appropriate: {
          heading: "3.2 合理使用",
          items: [
            "本应用旨在用于个人屏幕使用时间管理和家长控制",
            "您同意不在您没有所有权或管理权的设备上使用本应用进行访问限制",
            "您同意不对本应用进行逆向工程、修改或再分发",
          ],
        },
        device: {
          heading: "3.3 设备要求",
          items: [
            "本应用需要 iOS 16.0 或更高版本",
            "屏幕使用时间 API 功能需要授予“屏幕使用时间”权限",
            "地理围栏功能需要“始终允许”位置权限",
            "部分功能需要生物硬件(Face ID / Touch ID)",
          ],
        },
      },
      limitations: {
        heading: "4. 服务限制",
        accuracy: {
          heading: "4.1 使用数据准确性",
          items: [
            "仪表板中显示的应用使用数据是基于 Apple DeviceActivity 框架的近似值",
            "由于测量方法不同,使用值可能与 iOS 屏幕使用时间不同",
            "使用追踪检查点的粒度约为 30 分钟",
          ],
        },
        reliability: {
          heading: "4.2 屏蔽可靠性",
          items: [
            "应用屏蔽依赖 Apple 的 ManagedSettings 框架,受 iOS 系统行为影响",
            "在极少数情况下,系统更新或权限变更可能影响屏蔽功能",
            "本应用无法保证在所有情况下 100% 有效屏蔽",
          ],
        },
        extension: {
          heading: "4.3 扩展限制",
          items: [
            "屏蔽页(Shield)自定义由 iOS 系统渲染,自定义选项有限",
            "由于 Apple API 限制,屏蔽页上无法显示自定义输入字段(如密码输入)",
          ],
        },
      },
      purchases: {
        heading: "5. 应用内购买",
        items: [
          "本应用提供可选的打赏(“请开发者喝咖啡”),作为消耗型应用内购买",
          "此购买为自愿性质,不会解锁额外功能",
          "所有购买都通过 Apple App Store 处理,受 Apple 条款约束",
          "消耗型购买不可退款(退款请求应向 Apple 提出)",
        ],
      },
      privacy: {
        heading: "6. 隐私",
        bodyBefore: "您的隐私对我们很重要。请参阅我们的",
        link: "隐私政策",
        bodyAfter:
          "了解本应用如何处理数据。总结:所有数据都存储在您的设备本地,从不向外部服务器传输。",
      },
      ip: {
        heading: "7. 知识产权",
        items: [
          "TimeBack 及其相关品牌、插图和代码均为开发者的知识产权",
          "Apple、iOS、屏幕使用时间、FamilyControls、Face ID 和 Touch ID 是 Apple Inc. 的商标",
        ],
      },
      disclaimer: {
        heading: "8. 免责声明",
        body: "本应用按“现状”提供,不作任何明示或暗示的保证。开发者不保证本应用无错误、不中断或不含有害组件。",
      },
      liability: {
        heading: "9. 责任限制",
        intro:
          "在法律允许的最大范围内,开发者不对您使用本应用而产生的任何间接、附带、特殊、后果性或惩罚性损害承担责任,包括但不限于:",
        items: [
          "由于应用卸载或设备重置造成的数据丢失",
          "因屏蔽功能而无法访问应用",
          "使用时间追踪的不准确",
          "屏蔽功能未按预期启用或停用",
        ],
      },
      termination: {
        heading: "10. 终止",
        body: "您可以随时通过卸载应用停止使用。卸载将永久删除与本应用相关的所有本地数据。",
      },
      changes: {
        heading: "11. 条款变更",
        body: "我们可能会不时更新本使用条款。变更将以更新的“最后更新”日期发布在此页面。变更后继续使用本应用即表示接受更新后的条款。",
      },
      governing: {
        heading: "12. 管辖法律",
        body: "本条款受新加坡法律管辖并据其解释,不适用冲突法规则。",
      },
      contact: {
        heading: "13. 联系我们",
        body: "如您对本使用条款有任何疑问,请通过以下方式联系我们:",
        emailLabel: "邮箱:",
      },
      footer: "TimeBack 由 Hominexis 开发并维护。",
    },
  },
};

export default zhHans;
