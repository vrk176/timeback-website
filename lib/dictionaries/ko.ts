import type { Dictionary } from "./en";

const ko: Dictionary = {
  meta: {
    title: "TimeBack — 폰 사용을 줄여 주는 스크린 타임 앱",
    description:
      "일일 제한, 휴식 모드, 스케줄, 위치 차단, 보호자 비밀번호, 차단 화면 꾸미기까지. TimeBack은 데이터를 기기 밖으로 보내지 않는 iOS 스크린 타임 앱이에요. 무료이고 계정도 광고도 없어요.",
  },
  hero: {
    badge: "iPhone과 iPad에서 사용 가능",
    titleLine1: "시간을",
    titleLine2: "내 삶에 돌려요",
    subtitle:
      "Apple 스크린 타임 기능으로 제한, 휴식, 스케줄, 집중 구역을 설정해요. 계정도 광고도 없고, 데이터는 기기 밖으로 나가지 않아요.",
    exploreFeatures: "기능 살펴보기",
    comingSoon: "App Store에서 다운로드",
    trustNote: "무료 • 개인정보 보호 • 계정 불필요",
    badgePrivateTitle: "외부 전송 없음",
    badgePrivateSub: "기기 안에만",
    badgeBreaksTitle: "틈틈이 휴식",
    badgeBreaksSub: "오래 쓰면 잠깐 쉬어요",
    screenshotAlt: "오늘 사용량, 일일 제한, 휴식 모드가 보이는 TimeBack 규칙 화면",
    mascotAlt: "방패와 열쇠를 들고 구름 위에 앉은 TimeBack 모래시계 수호자",
  },
  features: {
    eyebrow: "기능",
    titlePart1: "일상에 맞춘",
    titleHighlight: "스크린 타임 관리",
    subtitle:
      "공부할 때, 일할 때, 잠들기 전. 학교나 사무실 같은 장소마다 규칙을 정해 폰을 덜 쓰게 도와줘요.",
    items: [
      {
        title: "일일 제한",
        description:
          "앱, 카테고리, 웹사이트별로 하루 사용 시간을 정해요. 평일과 주말을 다르게 설정할 수도 있어요.",
      },
      {
        title: "휴식 모드",
        description:
          "계속 쓴 시간이 정해 둔 만큼 쌓이면 선택한 앱을 잠깐 차단해요. 휴식이 끝나면 자동으로 다시 열려요.",
      },
      {
        title: "스케줄",
        description:
          "공부, 업무, 수면, 가족 시간에 맞춰 앱을 차단해요. 밤 10시~아침 8시처럼 자정을 넘는 스케줄도 돼요.",
      },
      {
        title: "집중 구역",
        description:
          "학교, 사무실, 도서관 같은 곳을 구역으로 정해 두면, 들어갈 때 앱이 차단되고 나오면 풀려요.",
      },
      {
        title: "맞춤 차단 화면",
        description:
          "제한, 휴식, 스케줄, 구역마다 제목, 메시지, 아이콘, 잠금 해제 지연 시간을 바꿀 수 있어요.",
      },
      {
        title: "앱 잠금과 보호자 비밀번호",
        description:
          "Face ID, Touch ID, Optic ID로 TimeBack을 잠가요. 보호자 비밀번호는 따로 정해 부모님이나 믿을 만한 사람에게 맡길 수 있고, 틀릴 때마다 대기 시간이 길어져요.",
      },
      {
        title: "주간 리뷰",
        description:
          "매주 일요일, 지난 7일의 사용 시간을 일일 제한과 나란히 놓은 차트가 나와요. 가장 잘 지킨 날, 제한 안에 든 날수, 지난주와의 비교도 보고 이미지로 공유할 수 있어요.",
      },
      {
        title: "앱 삭제 방지",
        description:
          "'그냥 차단 앱을 지워 버릴까' 싶을 때를 막아 주는 선택 기능이에요. iOS 특성상 켜 두는 동안에는 기기의 모든 앱을 삭제할 수 없고, 이 점은 켜기 전에 알려 드려요.",
      },
    ],
  },
  showcase: {
    eyebrow: "앱 미리보기",
    titlePart1: "직접",
    titleHighlight: "살펴보기",
    subtitle: "규칙, 스케줄, 구역, 차단 화면, 보호자 설정을 iPhone에서 쓰기 편한 화면에 담았어요.",
    newBadge: "1.3 새 기능",
    swipeHint: "옆으로 밀어 더 보기",
    items: [
      {
        tag: "주간 리뷰",
        line1: "되찾은 시간",
        line2: "한눈에 보여요",
        subtitle: "매주 돌아보며, 되찾은 시간의 변화를 확인해요",
        detail: "하루하루를 일일 제한과 나란히 놓은 7일 차트에 가장 잘 지킨 날, 제한 안에 든 날수, 지난주와의 비교까지 담겨요. 이미지로 공유할 수 있어요.",
        alt: "일일 제한과 비교한 7일 차트가 있는 TimeBack 주간 리뷰",
      },
      {
        tag: "예약 차단",
        line1: "집중할 땐",
        line2: "자동으로 조용히",
        subtitle: "일과 공부, 수면 시간에 맞춰 방해를 자동으로 차단해요",
        detail: "요일과 시간대만 고르면 돼요. 밤 10:30부터 아침 7:00까지처럼 자정을 넘는 수면 시간도 지원해요.",
        alt: "밤 10:30부터 아침 7:00까지의 TimeBack 수면 스케줄",
      },
      {
        tag: "위치 차단",
        line1: "장소를 바꾸면",
        line2: "집중이 시작돼요",
        subtitle: "지정한 구역에 들어가면 방해 앱을 잠시 멈춰요",
        detail: "지도에서 장소와 반경을 정하세요. 구역 안에서는 앱이 멈추고, 떠나면 다시 풀려요.",
        alt: "지도 위 장소와 차단 반경이 표시된 TimeBack 구역",
      },
      {
        tag: "한도 차단",
        line1: "한도가 차면",
        line2: "잠시 멈춰요",
        subtitle: "하루 한도에 도달하면 방해 앱을 자동으로 막아요",
        detail: "규칙의 일일 제한을 다 쓰면 그날은 앱이 계속 차단되고, 자정에 초기화돼요.",
        alt: "일일 제한에 도달한 TimeBack 규칙",
      },
      {
        tag: "안심 보호",
        line1: "보호는 더하고",
        line2: "예외는 줄여요",
        subtitle: "믿을 수 있는 사람과 함께 규칙을 지켜요",
        detail: "앱 잠금은 Face ID, Touch ID, Optic ID를 지원해요. 보호자 비밀번호는 믿을 수 있는 사람에게 맡기고, 틀릴수록 대기 시간이 길어져요.",
        alt: "Face ID, 비밀번호, 보호자 비밀번호가 있는 TimeBack 비밀번호 설정",
      },
      {
        tag: "화면 꾸미기",
        line1: "알림도",
        line2: "내 취향대로",
        subtitle: "아이콘과 문구, 버튼까지 골라 나만의 차단 화면을 만들어요",
        detail: "차단 화면의 아이콘, 제목, 메시지, 버튼을 직접 골라요.",
        alt: "차단 화면 미리보기가 있는 TimeBack 차단 화면 설정",
      },
    ],
  },
  ipad: {
    eyebrow: "1.3 새 기능",
    titleLine1: "이제 iPad에서도",
    titleLine2: "내 시간을 되찾아요",
    subtitle: "iPad에서는 화면이 두 칸으로 나뉘어요. 왼쪽에 규칙, 스케줄, 구역 목록, 오른쪽에 선택한 항목의 상세 화면이 뜨고 설정도 두 칸으로 보여요. 작은 iPad에서는 한 칸으로 보여요.",
    requirement: "iOS 또는 iPadOS 26.2 이상이 필요해요.",
    tabsLabel: "iPad용 TimeBack",
    tabs: [
      {
        label: "규칙",
        title: "한도를 정해요",
        subtitle: "앱마다 하루 사용 시간을 골라요",
        alt: "iPad의 TimeBack: 규칙 목록과 선택한 규칙의 상세 화면",
      },
      {
        label: "스케줄",
        title: "일정에 맞춰 차단해요",
        subtitle: "정해 둔 시간에는 앱을 막아요",
        alt: "iPad의 TimeBack: 스케줄 목록과 스케줄 상세 화면",
      },
      {
        label: "구역",
        title: "장소별로 차단해요",
        subtitle: "구역에 들어가면 방해 앱을 잠시 멈춰요",
        alt: "iPad의 TimeBack: 구역 목록과 선택한 장소의 지도",
      },
    ],
  },
  howItWorks: {
    eyebrow: "사용 방법",
    titlePart1: "한 번 정하면,",
    titleHighlight: "지키기 쉬워요",
    steps: [
      {
        title: "나만의 기준 정하기",
        description:
          "앱, 카테고리, 웹사이트를 고르고, 일일 제한·휴식·스케줄·구역을 내 생활에 맞게 조합해요.",
      },
      {
        title: "Apple 시스템으로 차단",
        description:
          "TimeBack은 Apple 공식 스크린 타임 프레임워크를 써요. 규칙 조건에 맞으면 직접 꾸민 차단 화면이 떠요.",
      },
      {
        title: "습관으로 이어가기",
        description:
          "잠금 해제 지연, 꼭 필요할 때만 쓰는 임시 해제, 보호자 비밀번호. 스스로 정한 규칙을 지키기 쉽게 도와줘요.",
      },
    ],
  },
  privacy: {
    eyebrow: "개인정보 우선",
    titlePart1: "데이터는 기기 안에만.",
    titleHighlight: "업로드는 없어요.",
    ever: "앞으로도요.",
    trustBadge: "무료. 광고 없음. 타사 SDK 없음.",
    items: [
      {
        title: "기기에만 저장",
        description:
          "규칙, 설정, 차단 화면 문구는 기기에만 저장되고, 비밀번호는 기기 키체인에 보관돼요.",
      },
      {
        title: "계정 불필요",
        description:
          "가입도 이메일 주소도 필요 없어요. 설치하면 바로 쓸 수 있어요.",
      },
      {
        title: "추적 없음",
        description:
          "분석 도구, 원격 측정, 광고, 제3자 추적 SDK가 들어 있지 않아요.",
      },
      {
        title: "Apple 공식 API",
        description:
          "선택한 앱은 Apple의 비공개 스크린 타임 토큰으로 처리해요. TimeBack은 앱 내용이나 방문 기록을 볼 수 없어요.",
      },
    ],
  },
  cta: {
    title: "지금 TimeBack 다운로드",
    subtitle:
      "App Store에서 무료로 받을 수 있어요. iPhone과 iPad 모두 지원해요.",
    badge: "App Store에서 다운로드",
  },
  footer: {
    features: "기능",
    privacy: "개인정보 처리방침",
    terms: "이용약관",
    faq: "자주 묻는 질문",
    contact: "문의하기",
    discord: "Discord 참여",
    rights: "All rights reserved.",
    language: "언어",
  },
  legal: {
    backToHome: "홈으로 돌아가기",
    lastUpdated: "최종 업데이트: 2026년 10월 1일",
  },
  privacyPolicyPage: {
    title: "개인정보 처리방침",
    sections: {
      overview: {
        heading: "개요",
        body: "TimeBack(이하 \"본 앱\")은 Hominexis에서 개발합니다. 우리는 귀하의 개인정보를 진지하게 생각합니다. 본 방침은 본 앱이 귀하의 데이터를 어떻게 처리하는지 설명합니다.",
        principle:
          "핵심 원칙: TimeBack은 외부 서버에 개인 데이터를 수집, 전송 또는 저장하지 않습니다. 모든 데이터는 귀하의 기기에 남아 있습니다.",
      },
      notCollect: {
        heading: "수집하지 않는 데이터",
        items: [
          "개인정보(이름, 이메일, 전화번호)를 수집하지 않습니다",
          "사용 분석이나 행동 데이터를 수집하지 않습니다",
          "광고 SDK나 추적 프레임워크를 사용하지 않습니다",
          "제3자와 데이터를 공유하지 않습니다",
          "쿠키나 크로스 앱 추적을 사용하지 않습니다",
          "계정 생성이나 로그인이 필요하지 않습니다",
        ],
      },
      localData: {
        heading: "기기에 로컬로 저장되는 데이터",
        intro:
          "다음 데이터는 Apple의 App Group 컨테이너를 사용하여 귀하의 기기에만 저장되며 전송되지 않습니다:",
        table: {
          headers: ["데이터", "용도"],
          rows: [
            [
              "앱 사용 규칙",
              "구성된 시간 제한, 휴식 모드, 온디맨드 설정",
            ],
            ["일정 규칙", "구성된 차단 일정"],
            ["지오펜스 규칙", "구역 기반 차단을 위한 위치 좌표와 반경"],
            ["차단 화면 설정", "맞춤화된 차단 화면 모양"],
            [
              "암호 해시",
              "PIN과 보호자 PIN의 SHA-256 해시(원본 PIN은 절대 저장되지 않음)",
            ],
            ["알림 기본 설정", "카테고리별 알림 토글 상태"],
            [
              "사용량 체크포인트",
              "대시보드 표시용 대략적인 앱 사용 분 수",
            ],
            [
              "방해 횟수",
              "하루 동안 \"계속 사용\"을 탭한 횟수",
            ],
          ],
        },
      },
      appleFrameworks: {
        heading: "Apple 프레임워크 및 API",
        screenTime: {
          heading:
            "Screen Time API (FamilyControls / ManagedSettings / DeviceActivity)",
          items: [
            "앱 사용 시간 모니터링과 차단 실행에 사용",
            "모든 사용 데이터는 Apple의 시스템 확장에 의해 로컬로 처리됩니다",
            "TimeBack은 귀하의 브라우징 기록, 메시지 내용 또는 앱별 데이터에 접근할 수 없습니다",
            "TimeBack은 불투명한 앱 토큰과 집계된 사용 시간만 볼 수 있습니다",
          ],
        },
        location: {
          heading: "위치 서비스 (CoreLocation)",
          items: [
            "지오펜스 기능에만 사용",
            "기기의 현재 위치는 구성된 구역 내에 있는지 판단하기 위해 로컬로 처리됩니다 — TimeBack은 업로드하지 않습니다(TimeBack에는 서버가 없습니다)",
            "구성하신 구역 좌표는 기기의 규칙 구성에만 저장됩니다",
            "언제든지 시스템 설정에서 위치 접근을 비활성화할 수 있습니다",
          ],
        },
        // TODO: native review — translated from EN reference
        mapKit: {
          heading: "지도 (MapKit)",
          items: [
            "구역 생성 시 지도를 표시하고 장소를 찾는 데 사용됩니다 — 주소 검색, 주변 장소, 역지오코딩 포함",
            "주소 검색창에 입력하면 쿼리 텍스트와 대략적인 지도 영역이 제안을 받기 위해 Apple Maps로 전송됩니다",
            "핀을 놓거나 주변 장소(학교, 도서관)를 검색하면 좌표가 주소나 관심 지점을 받기 위해 Apple Maps로 전송됩니다",
            "이러한 지도 요청은 Apple의 개인정보 보호정책에 따라 Apple이 처리합니다 — TimeBack은 이를 저장, 기록 또는 중계하지 않으며 지도 데이터는 TimeBack으로 전송되지 않습니다",
            "구역 생성 지도를 열지 않으면 지도 요청이 이루어지지 않습니다",
          ],
        },
        biometric: {
          heading: "생체 인증 (LocalAuthentication)",
          items: [
            "Face ID / Touch ID 앱 잠금에 선택적으로 사용",
            "생체 데이터는 전적으로 Apple의 Secure Enclave에 의해 처리됩니다",
            "TimeBack은 생체 데이터에 절대 접근하거나 저장하지 않습니다",
          ],
        },
        storeKit: {
          heading: "StoreKit (앱 내 구매)",
          items: [
            "선택적 \"개발자에게 커피 한 잔 사주기\" 팁에 사용",
            "구매 거래는 Apple에서 처리합니다",
            "개인 결제 정보를 받지 않습니다",
          ],
        },
      },
      retention: {
        heading: "데이터 보관",
        items: [
          "모든 데이터는 귀하의 기기에만 저장됩니다",
          "앱을 삭제하면 모든 데이터가 영구적으로 삭제됩니다",
          "TimeBack 전용 데이터의 클라우드 백업은 없습니다",
          "일일 카운터(사용량, 방해 횟수)는 자정에 자동으로 재설정됩니다",
        ],
      },
      children: {
        heading: "아동 개인정보",
        body: "TimeBack은 보호자 암호 기능을 통해 자녀 보호 도구로 사용될 수 있습니다. 본 앱은 아동으로부터 개인정보를 의도적으로 수집하지 않습니다. 모든 데이터는 기기 로컬에 유지됩니다.",
      },
      thirdParty: {
        heading: "제3자 서비스",
        body: "TimeBack은 어떠한 제3자 분석, 광고 또는 추적 서비스도 통합하지 않습니다. 외부 통신은 Apple의 서버에 대해서만 이루어집니다:",
        items: [
          "앱 내 구매 거래 확인 (StoreKit)",
          "지도 및 지오코딩 (MapKit, 구역 생성 시) — 타일 로딩, 주소 검색, 주변 장소 검색, 역지오코딩 (Apple이 처리, Apple 개인정보 보호정책 참조)",
        ],
      },
      website: {
        heading: "이 웹사이트에 대해",
        body: "위 내용은 TimeBack 앱에 관한 설명입니다. 이 웹사이트(timeback.hominexis.com)는 앱과 별개이며, 아주 적은 양의 데이터만 다룹니다.",
        items: [
          "방문 통계: 페이지 조회 수를 집계하기 위해 Vercel Web Analytics를 사용합니다. 방문한 페이지, 유입 사이트, 대략적인 위치(국가, 지역, 도시), 브라우저, 운영체제, 기기 유형을 기록하며 익명의 집계 통계에만 사용합니다. 서드파티 쿠키를 사용하지 않고, 방문은 요청으로 만든 해시로 집계되며 24시간 후 폐기됩니다. 데이터는 IP 주소와 연결되지 않으며 다른 웹사이트에서 사용자를 추적하는 데 쓰이지 않습니다.",
          "언어 설정: 언어 전환기로 언어를 고르면 다음에도 그 언어로 열리도록 선택한 내용을 쿠키(timeback-locale)와 브라우저 로컬 저장소에 저장합니다. 언어 코드만 담기며 추적에 쓰이지 않습니다.",
          "이 웹사이트에서 수집한 어떤 정보도 TimeBack 앱이나 기기의 데이터와 연결되지 않습니다.",
        ],
      },
      rights: {
        heading: "귀하의 권리",
        body: "우리는 개인 데이터를 수집하지 않으므로 서버에 접근, 수정 또는 삭제할 개인 데이터가 없습니다. 귀하의 기기에 있는 모든 데이터는 귀하의 완전한 통제 하에 있으며 앱을 삭제하여 삭제할 수 있습니다.",
      },
      changes: {
        heading: "본 방침의 변경",
        body: "본 개인정보 처리방침은 수시로 업데이트될 수 있습니다. 변경 사항은 업데이트된 \"최종 업데이트\" 날짜와 함께 이 페이지에 게시됩니다. 변경 후에도 앱을 계속 사용하는 것은 업데이트된 방침을 수락하는 것으로 간주됩니다.",
      },
      contact: {
        heading: "문의하기",
        body: "본 개인정보 처리방침에 관한 질문이 있으시면 다음으로 문의해 주세요:",
        emailLabel: "이메일:",
      },
      footer: "TimeBack은 Hominexis에서 개발 및 유지 관리합니다.",
    },
  },
  termsOfUsePage: {
    title: "이용약관",
    sections: {
      acceptance: {
        heading: "1. 약관 수락",
        body: "TimeBack(이하 \"본 앱\")을 다운로드, 설치 또는 사용함으로써 귀하는 본 이용약관에 동의하는 것입니다. 동의하지 않으시면 본 앱을 사용하지 마세요.",
      },
      description: {
        heading: "2. 서비스 설명",
        intro:
          "TimeBack은 다음 방법으로 사용자가 앱 사용을 관리하는 데 도움을 주는 iOS용 스크린 타임 관리 애플리케이션입니다:",
        items: [
          "일일 사용 시간 제한",
          "강제 휴식 간격",
          "시간 기반 차단 일정",
          "위치 기반 (지오펜스) 차단",
          "맞춤형 차단 화면",
          "주간 사용 리뷰",
          "선택적 앱 삭제 방지 (기기 전체)",
        ],
        outro:
          "본 앱은 이러한 기능을 제공하기 위해 Apple의 Screen Time API(FamilyControls, ManagedSettings, DeviceActivity)를 사용합니다.",
      },
      responsibilities: {
        heading: "3. 사용자 책임",
        passcode: {
          heading: "3.1 암호 관리",
          items: [
            "귀하는 PIN 암호와 보호자 암호를 기억할 책임이 있습니다",
            "보호자 암호는 잊어버린 경우 복구할 수 없습니다; 유일한 해결책은 앱을 삭제하고 다시 설치하는 것이며, 이로 인해 모든 규칙과 설정이 삭제됩니다",
            "보호자 암호는 신뢰할 수 있는 사람과 공유할 것을 강력히 권장합니다",
          ],
        },
        appropriate: {
          heading: "3.2 적절한 사용",
          items: [
            "본 앱은 개인 스크린 타임 관리 및 자녀 보호 목적으로 사용되도록 의도되었습니다",
            "소유하거나 관리 권한이 없는 기기에 대한 접근을 제한하기 위해 본 앱을 사용하지 않기로 동의합니다",
            "본 앱을 역공학, 수정 또는 재배포하지 않기로 동의합니다",
          ],
        },
        device: {
          heading: "3.3 기기 요구사항",
          items: [
            "본 앱은 iOS 26.2 이상이 필요합니다",
            "Screen Time API 기능은 \"스크린 타임\" 권한 부여가 필요합니다",
            "지오펜스 기능은 \"항상 허용\" 위치 권한이 필요합니다",
            "일부 기능은 생체 하드웨어(Face ID / Touch ID)가 필요합니다",
          ],
        },
      },
      limitations: {
        heading: "4. 서비스 제한",
        accuracy: {
          heading: "4.1 사용 데이터 정확성",
          items: [
            "대시보드에 표시되는 앱 사용 데이터는 Apple의 DeviceActivity 프레임워크를 기반으로 한 근사치입니다",
            "측정 방법의 차이로 인해 사용 값은 iOS 스크린 타임과 다를 수 있습니다",
            "사용 추적 체크포인트의 세분화 정도는 약 30분입니다",
          ],
        },
        reliability: {
          heading: "4.2 차단 신뢰성",
          items: [
            "앱 차단은 Apple의 ManagedSettings 프레임워크에 의존하며 iOS 시스템 동작의 영향을 받습니다",
            "드문 경우, 시스템 업데이트나 권한 변경으로 차단 기능에 영향을 미칠 수 있습니다",
            "본 앱은 모든 상황에서 100% 차단 효과를 보장할 수 없습니다",
          ],
        },
        extension: {
          heading: "4.3 확장 제한",
          items: [
            "차단 화면(Shield) 맞춤 설정은 iOS 시스템에 의해 렌더링되며 맞춤화 옵션이 제한적입니다",
            "Apple API 제한으로 인해 맞춤 입력 필드(암호 입력 등)는 차단 화면에 표시할 수 없습니다",
          ],
        },
      },
      purchases: {
        heading: "5. 앱 내 구매",
        items: [
          "본 앱은 소비성 앱 내 구매로 선택적 팁(\"개발자에게 커피 한 잔 사주기\")을 제공합니다",
          "이 구매는 자발적이며 추가 기능을 잠금 해제하지 않습니다",
          "모든 구매는 Apple App Store를 통해 처리되며 Apple의 약관이 적용됩니다",
          "소비성 구매는 환불 불가입니다(환불 요청은 Apple에 직접 제기해야 합니다)",
        ],
      },
      privacy: {
        heading: "6. 개인정보",
        bodyBefore: "귀하의 개인정보는 우리에게 중요합니다. 본 앱이 데이터를 어떻게 처리하는지 자세한 내용은 ",
        link: "개인정보 처리방침",
        bodyAfter:
          "을 참조하세요. 요약: 모든 데이터는 귀하의 기기 로컬에 저장되며 외부 서버로 절대 전송되지 않습니다.",
      },
      ip: {
        heading: "7. 지적 재산권",
        items: [
          "TimeBack 및 관련 브랜딩, 일러스트, 코드는 개발자의 지적 재산입니다",
          "Apple, iOS, Screen Time, FamilyControls, Face ID, Touch ID는 Apple Inc.의 상표입니다",
        ],
      },
      disclaimer: {
        heading: "8. 보증 부인",
        body: "본 앱은 명시적 또는 묵시적인 어떠한 종류의 보증도 없이 \"있는 그대로\" 제공됩니다. 개발자는 본 앱이 오류 없음, 중단 없음 또는 유해한 구성 요소 없음을 보장하지 않습니다.",
      },
      liability: {
        heading: "9. 책임 제한",
        intro:
          "법이 허용하는 최대 범위 내에서, 개발자는 다음을 포함하되 이에 국한되지 않는, 본 앱 사용으로 인해 발생하는 간접적, 부수적, 특별, 결과적 또는 징벌적 손해에 대해 책임을 지지 않습니다:",
        items: [
          "앱 삭제나 기기 재설정으로 인한 데이터 손실",
          "차단 기능으로 인한 앱 접근 불가",
          "사용 시간 추적의 부정확성",
          "차단 기능이 예상대로 활성화 또는 비활성화되지 않음",
        ],
      },
      termination: {
        heading: "10. 종료",
        body: "귀하는 언제든지 앱을 삭제하여 사용을 중단할 수 있습니다. 삭제하면 본 앱과 관련된 모든 로컬 데이터가 영구적으로 삭제됩니다.",
      },
      changes: {
        heading: "11. 약관 변경",
        body: "본 이용약관은 수시로 업데이트될 수 있습니다. 변경 사항은 업데이트된 \"최종 업데이트\" 날짜와 함께 이 페이지에 게시됩니다. 변경 후에도 앱을 계속 사용하는 것은 업데이트된 약관을 수락하는 것으로 간주됩니다.",
      },
      governing: {
        heading: "12. 준거법",
        body: "본 약관은 싱가포르 법률에 따라 해석되며, 법 충돌 규정은 고려하지 않습니다.",
      },
      contact: {
        heading: "13. 문의하기",
        body: "본 이용약관에 관한 질문이 있으시면 다음으로 문의해 주세요:",
        emailLabel: "이메일:",
      },
      footer: "TimeBack은 Hominexis에서 개발 및 유지 관리합니다.",
    },
  },
};

export default ko;
