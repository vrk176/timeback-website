import type { Dictionary } from "./en";

const zhHans: Dictionary = {
  meta: {
    title: "TimeBack — 管好你的屏幕使用时间",
    description:
      "TimeBack 是一款注重隐私的 iOS 屏幕使用时间工具,支持每日限额、休息模式、时间表、地理围栏、守护者密码和自定义拦截页面。免费,不用注册账号,没有广告。",
  },
  hero: {
    badge: "现已支持 iPhone 和 iPad",
    titleLine1: "把时间",
    titleLine2: "还给生活",
    subtitle:
      "借助 Apple 屏幕使用时间,给应用设置限额、休息、时间表和地理围栏。不用注册账号,没有广告,数据只留在你的设备上。",
    exploreFeatures: "看看功能",
    comingSoon: "在 App Store 下载",
    trustNote: "免费 • 私密 • 无需账号",
    badgePrivateTitle: "100% 私密",
    badgePrivateSub: "数据只在本机",
    badgeBreaksTitle: "休息模式",
    badgeBreaksSub: "用久了就歇一会儿",
    screenshotAlt: "TimeBack 规则页面:今日用量、每日限额与休息模式",
    mascotAlt: "TimeBack 的沙漏守护者,坐在云朵上,手持盾牌和钥匙",
  },
  features: {
    eyebrow: "功能",
    titlePart1: "贴合日常的",
    titleHighlight: "屏幕时间管理",
    subtitle: "上课、上班、睡前,或者人在办公室、图书馆时,TimeBack 按你定的规则挡住让你分心的应用,不用交出个人数据。",
    items: [
      {
        title: "每日限额",
        description:
          "给应用、类别或网站设定每天可用时长,也可以按星期分别设置,工作日和周末不必一刀切。",
      },
      {
        title: "休息模式",
        description:
          "连续用了一段时间后,TimeBack 会把选中的应用暂停一会儿,休息结束后自动恢复。",
      },
      {
        title: "时间表",
        description:
          "给工作、学习、睡觉或陪家人的时段排好时间表,到点自动拦截干扰应用,也支持 22:00 到次日 8:00 这样的跨夜时段。",
      },
      {
        title: "地理围栏",
        description: "在学校、办公室、图书馆或家里划一块围栏,一进去应用就被拦截,离开后自动恢复。",
      },
      {
        title: "自定义拦截页面",
        description: "限额、休息、时间表和地点在拦截页面上各有自己的小人。标题、文字、图标和解锁延迟都能改,原来的图标也还在「拦截页面设置」里。",
      },
      {
        title: "应用锁与守护者密码",
        description:
          "用面容 ID、触控 ID 或 Optic ID 锁住 TimeBack;家长、伴侣或自律搭子可以保管独立的守护者密码,输错后冷却时间逐次变长。",
      },
      {
        title: "每周回顾",
        description:
          "每周日会有一份回顾:七天的用量和每日限额画在同一张图上,还有表现最好的一天、没超限额的天数,以及和上周的对比。分享图上,这一周的时间变成了沙漏里的沙。",
      },
      {
        title: "防止删除 App",
        description:
          "堵住「删了拦截器就自由了」的冲动。受 iOS 限制,开启期间设备上所有 App 都删不掉,开启前会先跟你说清楚。",
      },
      {
        title: "小组件",
        description:
          "一眼看到现在拦着什么、接下来是什么。主屏幕有小号和中号,锁定屏幕上也有两种尺寸。",
      },
      {
        title: "深色模式",
        description:
          "TimeBack 跟随系统设置,设备换成深色外观时,它也一起变暗。",
      },
      {
        title: "一分钟上手",
        description:
          "第一次打开 TimeBack 时,先选你最想管住的那一块,再允许访问屏幕使用时间,选好应用。第一条规则大概一分钟就设好了。",
      },
      {
        title: "分享 TimeBack",
        description:
          "在设置里生成一张带二维码的卡片,可以附上本周拿回的时间,再保存到相册或发给别人。",
      },
    ],
  },
  showcase: {
    eyebrow: "应用预览",
    titlePart1: "看看",
    titleHighlight: "实际界面",
    subtitle: "下面是 iPhone 上的截图:规则、时间表、围栏、拦截页面和守护者密码。",
    newBadge: "新功能",
    swipeHint: "左右滑动查看更多",
    items: [
      {
        tag: "每周回顾",
        line1: "少刷的时间",
        line2: "都看得见",
        subtitle: "每周回顾,看见拿回时间的每一步",
        detail: "每天的用量都对着限额画出来,哪天最好、几天没超、比上周多还是少,一看就知道。分享图上,这一周的时间变成了沙漏里的沙。",
        alt: "TimeBack 每周回顾页面,七日图表对照每日限额",
      },
      {
        tag: "自动屏蔽",
        line1: "该专注时",
        line2: "自动安静",
        subtitle: "工作、学习、睡眠,按计划屏蔽干扰",
        detail: "自选星期与时段,跨夜也没问题,比如 22:30 到次日 7:00 的睡眠时间。",
        alt: "TimeBack 睡眠时间表,22:30 至次日 7:00",
      },
      {
        tag: "地点屏蔽",
        line1: "换个地点",
        line2: "进入专注",
        subtitle: "走进指定区域,让干扰自动暂停",
        detail: "在地图上选好地点和半径。进入区域后应用暂停,离开后自动恢复。",
        alt: "TimeBack 围栏:地图上的地点与拦截半径",
      },
      {
        tag: "限额拦截",
        line1: "到点就停",
        line2: "留点时间给自己",
        subtitle: "达到每日限额,自动拦截分心应用",
        detail: "某条规则的每日限额用完后,相关应用当天都会被拦截,午夜自动重置。",
        alt: "TimeBack 中已达到每日限额的规则",
      },
      {
        tag: "安全守护",
        line1: "多一层守护",
        line2: "少一次破例",
        subtitle: "让信任的人,一起守护你的使用规则",
        detail: "应用锁支持面容 ID、触控 ID 或 Optic ID。把守护者密码交给信任的人,输错后冷却时间逐次变长。",
        alt: "TimeBack 密码设置:面容 ID、密码与守护者密码",
      },
      {
        tag: "页面定制",
        line1: "连提醒",
        line2: "都很像你",
        subtitle: "自选图标与文字,定制专属屏蔽页面",
        detail: "限额、休息、时间表和地点各有自己的小人。拦截页面上的图标、标题、文字和按钮也都能自己选。",
        alt: "TimeBack 拦截页面设置与拦截页面预览",
      },
    ],
  },
  ipad: {
    eyebrow: "iPad",
    titleLine1: "现已支持 iPad",
    titleLine2: "找回你的时间",
    subtitle: "iPad 上改为左右两栏:左边是规则、时间表和地点,右边是各自的详情面板,设置也并排打开。小尺寸 iPad 使用单栏。",
    requirement: "需要 iOS 或 iPadOS 26.2 及以上版本。",
    tabsLabel: "TimeBack iPad 版",
    tabs: [
      {
        label: "规则",
        title: "设定使用限额",
        subtitle: "为每个应用选择使用时长",
        alt: "iPad 上的 TimeBack:左侧规则列表,右侧所选规则的详情面板",
      },
      {
        label: "时间表",
        title: "按计划自动屏蔽",
        subtitle: "把时间留给真正重要的事",
        alt: "iPad 上的 TimeBack:左侧时间表列表,右侧时间表详情面板",
      },
      {
        label: "围栏",
        title: "按地点屏蔽干扰",
        subtitle: "进入指定区域后自动暂停干扰",
        alt: "iPad 上的 TimeBack:左侧围栏列表,右侧所选地点的地图",
      },
    ],
  },
  howItWorks: {
    eyebrow: "怎么用",
    titlePart1: "设好规则,",
    titleHighlight: "让它帮你坚持",
    steps: [
      {
        title: "选应用,定规则",
        description:
          "选好应用、类别或网站,再按自己的作息加上每日限额、休息模式、时间表或围栏。第一次打开时跟着引导走,大概一分钟就能设好第一条规则。",
      },
      {
        title: "交给系统执行",
        description:
          "拦截由 iOS 完成,TimeBack 用的是 Apple 官方的屏幕使用时间框架。规则一生效,你设好的拦截页面就会出现。",
      },
      {
        title: "把习惯留下来",
        description:
          "拦截页面上加一点等待,需要时可以临时解锁,再请人帮你保管守护者密码,少刷手机就没那么难。",
      },
    ],
  },
  privacy: {
    eyebrow: "隐私优先",
    titlePart1: "100% 私密。",
    titleHighlight: "数据零上传。",
    ever: "一直如此。",
    trustBadge: "免费、无广告、不用第三方 SDK。",
    items: [
      {
        title: "只存在本机",
        description: "规则、设置和拦截页面文字都只存在你的设备上,密码放在系统钥匙串里。",
      },
      {
        title: "无需账号",
        description: "装好就能用,不用注册,也不要邮箱。",
      },
      {
        title: "不追踪",
        description: "没有统计分析、没有遥测、没有广告,也没接入任何第三方追踪 SDK。",
      },
      {
        title: "Apple 官方 API",
        description: "你选中的应用以 Apple 的私密屏幕使用时间令牌记录,TimeBack 读不到应用内容,也看不到浏览记录。",
      },
    ],
  },
  cta: {
    title: "立即下载 TimeBack",
    subtitle: "App Store 免费下载,支持 iPhone 和 iPad。",
    badge: "在 App Store 下载",
  },
  footer: {
    features: "功能",
    privacy: "隐私政策",
    terms: "使用条款",
    faq: "常见问题",
    contact: "联系我们",
    discord: "加入 Discord",
    rights: "保留所有权利。",
    language: "语言",
  },
  legal: {
    backToHome: "返回首页",
    lastUpdated: "最后更新:2026 年 10 月 1 日",
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
            ["时间表规则", "您配置的拦截时间表"],
            ["地理围栏规则", "区域拦截的位置坐标和半径"],
            ["拦截页面设置", "您自定义的拦截页面外观"],
            ["密码哈希", "您的密码和守护者密码的 SHA-256 哈希(原始密码从不存储)"],
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
            "用于监控应用使用时长并执行拦截",
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
        body: "TimeBack 可通过守护者密码功能作为家长控制工具使用。本应用不会有意收集儿童的个人信息。所有数据都保留在设备本地。",
      },
      thirdParty: {
        heading: "第三方服务",
        body: "TimeBack 不集成任何第三方分析、广告或追踪服务。仅与 Apple 服务器进行以下外部通信:",
        items: [
          "应用内购买交易验证(StoreKit)",
          "地图与地理编码(MapKit,用于创建区域时)—— 包括瓦片加载、地址搜索、附近地点搜索、反向地理编码(由 Apple 处理,详见 Apple 隐私政策)",
        ],
      },
      website: {
        heading: "关于本网站",
        body: "以上内容说明的是 TimeBack App。本网站(timeback.hominexis.com)与 App 相互独立,只处理少量数据:",
        items: [
          "访问统计:我们使用 Vercel Web Analytics 统计页面浏览量。它会记录访问的页面、来源网站、大致位置(国家、地区、城市)、浏览器、操作系统和设备类型,仅用于匿名的汇总统计。它不使用第三方 cookie;访问以请求生成的哈希值计数,24 小时后即被丢弃,数据不与你的 IP 地址关联,也不会用于在其他网站上追踪你。",
          "语言偏好:当你用语言切换器选择语言时,网站会把你的选择保存在一个 cookie(timeback-locale)和浏览器本地存储中,下次打开时直接显示该语言。其中只有语言代码,绝不用于追踪。",
          "本网站收集的任何信息都不会与 TimeBack App 或你设备上的数据关联。",
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
          "休息模式",
          "基于时间表的拦截",
          "基于位置(地理围栏)的拦截",
          "可自定义的拦截页面",
          "每周回顾",
          "可选的防止删除 App 保护(设备级)",
        ],
        outro:
          "本应用使用 Apple 的屏幕使用时间 API(FamilyControls、ManagedSettings、DeviceActivity)来提供这些功能。",
      },
      responsibilities: {
        heading: "3. 用户责任",
        passcode: {
          heading: "3.1 密码管理",
          items: [
            "您有责任记住您的密码和守护者密码",
            "守护者密码一旦遗忘将无法恢复;唯一的解决办法是卸载并重新安装本应用,这将删除所有规则和设置",
            "我们强烈建议将守护者密码交由可信任的人保管",
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
            "本应用需要 iOS 26.2 或更高版本",
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
          heading: "4.2 拦截可靠性",
          items: [
            "应用拦截依赖 Apple 的 ManagedSettings 框架,受 iOS 系统行为影响",
            "在极少数情况下,系统更新或权限变更可能影响拦截功能",
            "本应用无法保证在所有情况下 100% 有效拦截",
          ],
        },
        extension: {
          heading: "4.3 扩展限制",
          items: [
            "拦截页面(Shield)自定义由 iOS 系统渲染,自定义选项有限",
            "由于 Apple API 限制,拦截页面上无法显示自定义输入字段(如密码输入)",
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
          "因拦截功能而无法访问应用",
          "使用时间追踪的不准确",
          "拦截功能未按预期启用或停用",
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
