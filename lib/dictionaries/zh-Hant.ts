import type { Dictionary } from "./en";

const zhHant: Dictionary = {
  meta: {
    title: "TimeBack — 奪回你的螢幕時間",
    description:
      "TimeBack 幫你用強大的隱私優先工具建立更健康的手機使用習慣。每日限額、強制休息、定時計劃、位置區域等功能,免費使用,100% 私密。",
  },
  hero: {
    badge: "即將登陸 App Store",
    titleLine1: "把時間,",
    titleLine2: "還給自己。",
    subtitle:
      "用強大的隱私優先工具建立更健康的螢幕使用習慣。完全免費。無需帳號。永無廣告。",
    exploreFeatures: "探索功能",
    comingSoon: "敬請期待",
    badgePrivateTitle: "100% 私密",
    badgePrivateSub: "僅儲存於裝置",
    badgeBreaksTitle: "智能休息",
    badgeBreaksSub: "保護你的眼睛",
  },
  features: {
    eyebrow: "功能",
    titlePart1: "你所需的一切,助你",
    titleHighlight: "保持專注",
    subtitle: "強大的工具在背景默默運作,助你養成更好的螢幕使用習慣,毫不打擾。",
    items: [
      {
        title: "每日限額",
        description:
          "為任何應用程式或類別設定使用時長。時間用完時自動封鎖 — 無需意志力。",
      },
      {
        title: "強制休息",
        description:
          "持續使用後強制休息,保護你的專注力和眼睛。休息結束後自動恢復。",
      },
      {
        title: "定時計劃",
        description:
          "在工作、學習或睡眠時段封鎖干擾應用程式。支援跨夜時段設定。",
      },
      {
        title: "位置區域",
        description: "當你進入學校或辦公室等特定區域時自動封鎖應用程式。",
      },
      {
        title: "自訂封鎖頁",
        description: "用你自己的圖示、文字和解鎖方式個人化封鎖頁面。",
      },
      {
        title: "監護人模式",
        description:
          "由家長或督促夥伴持有的獨立密碼。防止規則被繞過。",
      },
    ],
  },
  showcase: {
    eyebrow: "應用預覽",
    titlePart1: "看看它",
    titleHighlight: "如何運作",
    subtitle: "精美直觀的介面,默默守護你的專注力,絕不礙事。",
    labels: ["歡迎", "每日限額", "定時計劃", "位置區域", "封鎖頁面", "監護人模式"],
  },
  howItWorks: {
    eyebrow: "運作原理",
    titlePart1: "簡單如",
    titleHighlight: "1-2-3",
    steps: [
      {
        title: "設定你的規則",
        description:
          "選擇要限制的應用程式,配置每日限額、定時計劃或位置區域封鎖。不到一分鐘搞定。",
      },
      {
        title: "保持專注",
        description:
          "TimeBack 在背景默默運作。達到限額時,可自訂的封鎖頁面會出現 — 溫柔地提醒你休息一下。",
      },
      {
        title: "養成更好習慣",
        description:
          "隨著時間推移,你會自然而然地減少拿起手機的次數。TimeBack 幫你奪回時間,投入真正重要的事情。",
      },
    ],
  },
  privacy: {
    eyebrow: "隱私優先",
    titlePart1: "100% 私密。",
    titleHighlight: "零資料上傳。",
    ever: "從不。",
    trustBadge: "免費。無廣告。無第三方 SDK。毫不妥協。",
    items: [
      {
        title: "僅儲存於裝置",
        description: "你的所有資料都保存在 iPhone 上。沒有任何資料離開你的裝置。",
      },
      {
        title: "無需帳號",
        description: "立即開始使用 TimeBack。無需註冊、無需電子郵件、毫不麻煩。",
      },
      {
        title: "零追蹤",
        description: "無分析、無遙測、無資料收集。我們看不到你的資料。",
      },
      {
        title: "Apple 官方 API",
        description: "基於 Apple 的 Screen Time API 打造。安全、沙盒隔離、可靠。",
      },
    ],
  },
  cta: {
    title: "敬請期待",
    subtitle: "TimeBack 即將登陸 App Store — 完全免費。敬請關注。",
    badge: "即將在 App Store 上架",
  },
  footer: {
    features: "功能",
    privacy: "隱私政策",
    terms: "使用條款",
    contact: "聯絡我們",
    rights: "保留所有權利。",
    language: "語言",
  },
  legal: {
    backToHome: "返回首頁",
    lastUpdated: "最後更新:2026 年 3 月 30 日",
  },
  privacyPolicyPage: {
    title: "隱私政策",
    sections: {
      overview: {
        heading: "概述",
        body: "TimeBack(以下簡稱「本應用程式」)由 Hominexis 開發。我們高度重視您的隱私。本政策說明本應用程式如何處理您的資料。",
        principle:
          "核心原則:TimeBack 不在任何外部伺服器上收集、傳輸或儲存任何個人資料。所有資料都保留在您的裝置上。",
      },
      notCollect: {
        heading: "我們不收集的資料",
        items: [
          "我們不收集個人資訊(姓名、電子郵件、電話號碼)",
          "我們不收集使用分析或行為資料",
          "我們不使用廣告 SDK 或追蹤框架",
          "我們不與任何第三方共享資料",
          "我們不使用 Cookie 或跨應用程式追蹤",
          "我們不要求建立帳號或登入",
        ],
      },
      localData: {
        heading: "儲存在您裝置上的本地資料",
        intro:
          "以下資料僅透過 Apple 的 App Group 容器儲存在您的裝置上,從不傳輸:",
        table: {
          headers: ["資料", "用途"],
          rows: [
            ["應用程式使用規則", "您設定的時間限額、休息模式和按需存取設定"],
            ["定時規則", "您設定的封鎖時間表"],
            ["地理圍欄規則", "區域封鎖的位置座標和半徑"],
            ["封鎖頁設定", "您自訂的封鎖頁面外觀"],
            ["密碼雜湊", "您的 PIN 和監護人 PIN 的 SHA-256 雜湊(原始 PIN 從不儲存)"],
            ["通知偏好", "您按類別設定的通知開關狀態"],
            ["使用檢查點", "用於儀表板顯示的應用程式使用分鐘數近似值"],
            ["干擾計數", "每日點選「繼續使用」的次數"],
          ],
        },
      },
      appleFrameworks: {
        heading: "Apple 框架與 API",
        screenTime: {
          heading:
            "螢幕使用時間 API(FamilyControls / ManagedSettings / DeviceActivity)",
          items: [
            "用於監控應用程式使用時長並執行封鎖",
            "所有使用資料由 Apple 的系統擴充元件在本地處理",
            "TimeBack 無權存取您的瀏覽歷史、訊息內容或應用程式內資料",
            "TimeBack 只能看到不透明的應用程式標記和彙總使用時長",
          ],
        },
        location: {
          heading: "定位服務(CoreLocation)",
          items: [
            "僅用於地理圍欄功能",
            "位置資料在本地處理以判斷您是否在已設定區域內",
            "位置座標僅儲存在裝置上的區域規則設定中",
            "不向任何伺服器傳輸位置資料",
            "您可以隨時在系統設定中關閉位置存取",
          ],
        },
        biometric: {
          heading: "生物認證(LocalAuthentication)",
          items: [
            "可選用於 Face ID / Touch ID 應用程式鎖",
            "生物資料完全由 Apple 的 Secure Enclave 處理",
            "TimeBack 從不存取或儲存生物資料",
          ],
        },
        storeKit: {
          heading: "StoreKit(應用程式內購買)",
          items: [
            "用於可選的「請開發者喝咖啡」打賞",
            "購買交易由 Apple 處理",
            "我們不接收任何個人付款資訊",
          ],
        },
      },
      retention: {
        heading: "資料保留",
        items: [
          "所有資料僅儲存在您的裝置上",
          "解除安裝應用程式將永久刪除所有資料",
          "TimeBack 相關資料沒有雲端備份",
          "每日計數器(使用量、干擾次數)在午夜自動重置",
        ],
      },
      children: {
        heading: "兒童隱私",
        body: "TimeBack 可透過監護人密碼功能作為家長控制工具使用。本應用程式不會有意收集兒童的個人資訊。所有資料都保留在裝置本地。",
      },
      thirdParty: {
        heading: "第三方服務",
        body: "TimeBack 不整合任何第三方分析、廣告或追蹤服務。僅與 Apple 伺服器進行以下外部通訊:",
        items: [
          "應用程式內購買交易驗證(StoreKit)",
          "地圖圖塊載入(MapKit,用於地理圍欄功能)",
        ],
      },
      rights: {
        heading: "您的權利",
        body: "由於我們不收集任何個人資料,我們的伺服器上沒有可存取、修改或刪除的個人資料。您裝置上的所有資料完全由您掌控,可透過解除安裝應用程式刪除。",
      },
      changes: {
        heading: "政策變更",
        body: "我們可能會不時更新本隱私政策。變更將以更新的「最後更新」日期發佈在此頁面。變更後繼續使用本應用程式即表示接受更新後的政策。",
      },
      contact: {
        heading: "聯絡我們",
        body: "如您對本隱私政策有任何疑問,請透過以下方式聯絡我們:",
        emailLabel: "電子郵件:",
      },
      footer: "TimeBack 由 Hominexis 開發並維護。",
    },
  },
  termsOfUsePage: {
    title: "使用條款",
    sections: {
      acceptance: {
        heading: "1. 條款接受",
        body: "透過下載、安裝或使用 TimeBack(以下簡稱「本應用程式」),您即同意本使用條款。如果您不同意,請勿使用本應用程式。",
      },
      description: {
        heading: "2. 服務描述",
        intro:
          "TimeBack 是一款 iOS 螢幕使用時間管理應用程式,透過以下方式幫助使用者管理應用程式使用:",
        items: [
          "每日使用時間限額",
          "強制休息間隔",
          "基於時間的封鎖計劃",
          "基於位置(地理圍欄)的封鎖",
          "可自訂的封鎖頁面",
        ],
        outro:
          "本應用程式使用 Apple 的 Screen Time API(FamilyControls、ManagedSettings、DeviceActivity)來提供這些功能。",
      },
      responsibilities: {
        heading: "3. 使用者責任",
        passcode: {
          heading: "3.1 密碼管理",
          items: [
            "您有責任記住您的 PIN 密碼和監護人密碼",
            "監護人密碼一旦遺忘將無法恢復;唯一的解決辦法是解除安裝並重新安裝本應用程式,這將刪除所有規則和設定",
            "我們強烈建議將監護人密碼交由可信任的人保管",
          ],
        },
        appropriate: {
          heading: "3.2 合理使用",
          items: [
            "本應用程式旨在用於個人螢幕使用時間管理和家長控制",
            "您同意不在您沒有所有權或管理權的裝置上使用本應用程式進行存取限制",
            "您同意不對本應用程式進行逆向工程、修改或再散佈",
          ],
        },
        device: {
          heading: "3.3 裝置需求",
          items: [
            "本應用程式需要 iOS 16.0 或更高版本",
            "螢幕使用時間 API 功能需要授予「螢幕使用時間」權限",
            "地理圍欄功能需要「永遠允許」位置權限",
            "部分功能需要生物硬體(Face ID / Touch ID)",
          ],
        },
      },
      limitations: {
        heading: "4. 服務限制",
        accuracy: {
          heading: "4.1 使用資料準確性",
          items: [
            "儀表板中顯示的應用程式使用資料是基於 Apple DeviceActivity 框架的近似值",
            "由於測量方法不同,使用值可能與 iOS 螢幕使用時間不同",
            "使用追蹤檢查點的粒度約為 30 分鐘",
          ],
        },
        reliability: {
          heading: "4.2 封鎖可靠性",
          items: [
            "應用程式封鎖依賴 Apple 的 ManagedSettings 框架,受 iOS 系統行為影響",
            "在極少數情況下,系統更新或權限變更可能影響封鎖功能",
            "本應用程式無法保證在所有情況下 100% 有效封鎖",
          ],
        },
        extension: {
          heading: "4.3 擴充元件限制",
          items: [
            "封鎖頁(Shield)自訂由 iOS 系統渲染,自訂選項有限",
            "由於 Apple API 限制,封鎖頁上無法顯示自訂輸入欄位(如密碼輸入)",
          ],
        },
      },
      purchases: {
        heading: "5. 應用程式內購買",
        items: [
          "本應用程式提供可選的打賞(「請開發者喝咖啡」),作為消耗型應用程式內購買",
          "此購買為自願性質,不會解鎖額外功能",
          "所有購買都透過 Apple App Store 處理,受 Apple 條款約束",
          "消耗型購買不可退款(退款請求應向 Apple 提出)",
        ],
      },
      privacy: {
        heading: "6. 隱私",
        bodyBefore: "您的隱私對我們很重要。請參閱我們的",
        link: "隱私政策",
        bodyAfter:
          "了解本應用程式如何處理資料。總結:所有資料都儲存在您的裝置本地,從不向外部伺服器傳輸。",
      },
      ip: {
        heading: "7. 智慧財產權",
        items: [
          "TimeBack 及其相關品牌、插圖和程式碼均為開發者的智慧財產",
          "Apple、iOS、螢幕使用時間、FamilyControls、Face ID 和 Touch ID 是 Apple Inc. 的商標",
        ],
      },
      disclaimer: {
        heading: "8. 免責聲明",
        body: "本應用程式按「現狀」提供,不作任何明示或暗示的保證。開發者不保證本應用程式無錯誤、不中斷或不含有害元件。",
      },
      liability: {
        heading: "9. 責任限制",
        intro:
          "在法律允許的最大範圍內,開發者不對您使用本應用程式而產生的任何間接、附帶、特殊、後果性或懲罰性損害承擔責任,包括但不限於:",
        items: [
          "由於應用程式解除安裝或裝置重置造成的資料遺失",
          "因封鎖功能而無法存取應用程式",
          "使用時間追蹤的不準確",
          "封鎖功能未按預期啟用或停用",
        ],
      },
      termination: {
        heading: "10. 終止",
        body: "您可以隨時透過解除安裝應用程式停止使用。解除安裝將永久刪除與本應用程式相關的所有本地資料。",
      },
      changes: {
        heading: "11. 條款變更",
        body: "我們可能會不時更新本使用條款。變更將以更新的「最後更新」日期發佈在此頁面。變更後繼續使用本應用程式即表示接受更新後的條款。",
      },
      governing: {
        heading: "12. 管轄法律",
        body: "本條款受新加坡法律管轄並據其解釋,不適用衝突法規則。",
      },
      contact: {
        heading: "13. 聯絡我們",
        body: "如您對本使用條款有任何疑問,請透過以下方式聯絡我們:",
        emailLabel: "電子郵件:",
      },
      footer: "TimeBack 由 Hominexis 開發並維護。",
    },
  },
};

export default zhHant;
