import type { Dictionary } from "./en";

const zhHans: Dictionary = {
  meta: {
    title: "TimeBack — 夺回你的屏幕时间",
    description:
      "TimeBack 是一款隐私优先的 iOS 屏幕使用时间工具,支持每日限额、间歇休息、定时计划、场景区域、监护人密码和自定义屏蔽页。免费、无需账号、无广告。",
  },
  hero: {
    badge: "已在 App Store 上架",
    titleLine1: "把时间,",
    titleLine2: "还给自己。",
    subtitle:
      "用 Apple 屏幕使用时间能力设置限额、休息、时间表和场景区域。无需账号、无广告,数据留在你的 iPhone 上。",
    exploreFeatures: "探索功能",
    comingSoon: "在 App Store 下载",
    trustNote: "免费 • 私密 • 无需账号",
    badgePrivateTitle: "100% 私密",
    badgePrivateSub: "仅存储于设备",
    badgeBreaksTitle: "智能休息",
    badgeBreaksSub: "保护你的眼睛",
  },
  features: {
    eyebrow: "功能",
    titlePart1: "为真实生活场景设计的",
    titleHighlight: "屏幕管理",
    subtitle: "上课、工作、睡前、在办公室或图书馆,TimeBack 用规则和场景帮你少一点分心,不用交出个人数据。",
    items: [
      {
        title: "每日限额",
        description:
          "给应用、类别或网站设定每天可用时长,也可以按星期分别设置,工作日和周末不必一刀切。",
      },
      {
        title: "间歇休息",
        description:
          "连续使用一段时间后,自动帮你停一下。短暂休息结束后可自动恢复,更适合长期坚持。",
      },
      {
        title: "定时计划",
        description:
          "睡前、上课、工作时段自动收起干扰应用,跨夜时间段也能正常处理。",
      },
      {
        title: "场景区域",
        description: "到学校、办公室、图书馆等地点自动进入专注状态;离开后自动恢复。",
      },
      {
        title: "自定义屏蔽页",
        description: "为限额、休息、时间表和区域分别设置屏蔽页文案、图标和解锁等待时间。",
      },
      {
        title: "监护人密码",
        description:
          "由家长、伴侣或自律搭子保管独立密码,降低临时改规则的冲动。",
      },
    ],
  },
  showcase: {
    eyebrow: "应用预览",
    titlePart1: "看看它",
    titleHighlight: "如何运作",
    subtitle: "围绕规则、时间表、地点区域、屏蔽页和监护人密码设计,界面轻量,不打扰。",
    labels: ["欢迎", "每日限额", "定时计划", "场景区域", "屏蔽页面", "监护人密码"],
  },
  howItWorks: {
    eyebrow: "工作原理",
    titlePart1: "设好规则,",
    titleHighlight: "让它帮你坚持",
    steps: [
      {
        title: "先定好边界",
        description:
          "选择应用、类别或网站,再设置每日限额、间歇休息、时间表或地点区域。",
      },
      {
        title: "交给系统执行",
        description:
          "TimeBack 基于 Apple 官方 Screen Time 框架运行。规则触发时,自定义屏蔽页会在合适的时候出现。",
      },
      {
        title: "把习惯留下来",
        description:
          "用一点恰到好处的阻力、可选临时解锁和监护人密码,让少刷一会儿变得更容易。",
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
        description: "规则、设置、屏蔽页文字和密码哈希都保存在你的 iPhone 上。",
      },
      {
        title: "无需账号",
        description: "立即开始使用 TimeBack。无需注册、无需邮箱、毫不麻烦。",
      },
      {
        title: "零追踪",
        description: "无分析、无遥测、无广告,也不集成第三方追踪 SDK。",
      },
      {
        title: "Apple 官方 API",
        description: "应用选择使用 Apple 的私密 Screen Time token,TimeBack 看不到应用内容或浏览历史。",
      },
    ],
  },
  cta: {
    title: "立即下载 TimeBack",
    subtitle: "TimeBack 已在 App Store 上架 — 完全免费。",
    badge: "在 App Store 下载",
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
            "您设备的当前位置在本地处理以判断是否在已配置区域内 —— TimeBack 不会上传(TimeBack 没有服务器)",
            "您配置的区域坐标仅存储在设备上的规则配置中",
            "您可以随时在系统设置中关闭位置访问",
          ],
        },
        mapKit: {
          heading: "地图(MapKit)",
          items: [
            "用于在创建区域时显示地图并帮助您查找地点 —— 包括地址搜索、附近地点、反向地理编码",
            "当您在地址搜索框中输入文字时,您的查询文字和大致地图区域会发送至 Apple Maps 以返回建议",
            "当您拖动图钉或查找附近地点(学校、图书馆)时,坐标会发送至 Apple Maps 以返回地址或兴趣点",
            "这些地图请求由 Apple 按其自身隐私政策处理 —— TimeBack 不存储、不记录、不中转这些请求,也不会收到任何地图数据",
            "如果您不打开区域创建地图,则不会发起任何地图请求",
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
          "地图与地理编码(MapKit,用于创建区域时)—— 包括瓦片加载、地址搜索、附近地点搜索、反向地理编码(由 Apple 处理,详见 Apple 隐私政策)",
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
          "间歇休息机制",
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
