const en = {
  meta: {
    title: "TimeBack — Take Back Control of Your Screen Time",
    description:
      "TimeBack helps you build healthier screen habits with powerful, privacy-first tools. Daily limits, forced breaks, schedules, location zones, and more. Free and 100% private.",
  },
  hero: {
    badge: "Coming Soon to App Store",
    titleLine1: "Take Back",
    titleLine2: "Your Time",
    subtitle:
      "Build healthier screen habits with powerful, privacy-first tools. Free. No account needed. No ads. Ever.",
    exploreFeatures: "Explore Features",
    comingSoon: "Coming Soon",
    badgePrivateTitle: "100% Private",
    badgePrivateSub: "On-device only",
    badgeBreaksTitle: "Smart Breaks",
    badgeBreaksSub: "Protect your eyes",
  },
  features: {
    eyebrow: "Features",
    titlePart1: "Everything you need to",
    titleHighlight: "stay focused",
    subtitle:
      "Powerful tools that work quietly in the background, helping you build better screen habits without getting in the way.",
    items: [
      {
        title: "Daily Limits",
        description:
          "Set usage limits for any app or category. Auto-blocks when time is up — no willpower needed.",
      },
      {
        title: "Break Mode",
        description:
          "Force breaks after continuous use to protect your focus and eyes. Auto-resumes when ready.",
      },
      {
        title: "Schedules",
        description:
          "Block distracting apps during work, study, or sleep hours. Supports overnight schedules.",
      },
      {
        title: "Location Zones",
        description:
          "Automatically block apps when you enter a specific area like school or office.",
      },
      {
        title: "Custom Block Screen",
        description:
          "Personalize the blocking screen with your own icon, message, and unlock method.",
      },
      {
        title: "Guardian Mode",
        description:
          "A separate passcode held by a parent or accountability partner. Prevents rules from being bypassed.",
      },
    ],
  },
  showcase: {
    eyebrow: "App Preview",
    titlePart1: "See it in",
    titleHighlight: "action",
    subtitle:
      "Beautiful, intuitive interface designed to stay out of your way while keeping you on track.",
    labels: [
      "Welcome",
      "Daily Limits",
      "Schedules",
      "Location Zones",
      "Block Screen",
      "Guardian Mode",
    ],
  },
  howItWorks: {
    eyebrow: "How It Works",
    titlePart1: "Simple as",
    titleHighlight: "1-2-3",
    steps: [
      {
        title: "Set Your Rules",
        description:
          "Choose which apps to limit and configure daily limits, schedules, or location-based blocking. It takes less than a minute.",
      },
      {
        title: "Stay Focused",
        description:
          "TimeBack works quietly in the background. When you hit a limit, a customizable block screen appears — gently nudging you to take a break.",
      },
      {
        title: "Build Better Habits",
        description:
          "Over time, you'll naturally reach for your phone less. TimeBack helps you reclaim hours for the things that truly matter.",
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy First",
    titlePart1: "100% Private.",
    titleHighlight: "Zero Data Uploaded.",
    ever: "Ever.",
    trustBadge: "Free. No ads. No third-party SDKs. No compromises.",
    items: [
      {
        title: "On-Device Only",
        description:
          "All your data stays on your iPhone. Nothing leaves your device.",
      },
      {
        title: "No Account Required",
        description:
          "Start using TimeBack instantly. No sign-up, no email, no hassle.",
      },
      {
        title: "Zero Tracking",
        description:
          "No analytics, no telemetry, no data collection. We can't see your data.",
      },
      {
        title: "Apple Official API",
        description:
          "Built with Apple's Screen Time API. Secure, sandboxed, and reliable.",
      },
    ],
  },
  cta: {
    title: "Coming Soon",
    subtitle:
      "TimeBack is coming soon to the App Store — completely free. Stay tuned.",
    badge: "Available on App Store Soon",
  },
  footer: {
    features: "Features",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    contact: "Contact",
    rights: "All rights reserved.",
    language: "Language",
  },
  legal: {
    backToHome: "Back to Home",
    lastUpdated: "Last updated: March 30, 2026",
  },
  privacyPolicyPage: {
    title: "Privacy Policy",
    sections: {
      overview: {
        heading: "Overview",
        body: 'TimeBack ("the App") is developed by Hominexis. We take your privacy seriously. This policy explains how the App handles your data.',
        principle:
          "The core principle: TimeBack does not collect, transmit, or store any personal data on external servers. All data remains on your device.",
      },
      notCollect: {
        heading: "Data We Do NOT Collect",
        items: [
          "We do not collect personal information (name, email, phone number)",
          "We do not collect usage analytics or behavioral data",
          "We do not use advertising SDKs or tracking frameworks",
          "We do not share any data with third parties",
          "We do not use cookies or cross-app tracking",
          "We do not require account creation or login",
        ],
      },
      localData: {
        heading: "Data Stored Locally on Your Device",
        intro:
          "The following data is stored exclusively on your device using Apple's App Group container and is never transmitted:",
        table: {
          headers: ["Data", "Purpose"],
          rows: [
            [
              "App usage rules",
              "Your configured time limits, break modes, and on-demand settings",
            ],
            ["Schedule rules", "Your configured blocking schedules"],
            [
              "Geofence rules",
              "Location coordinates and radius for zone-based blocking",
            ],
            [
              "Shield configuration",
              "Your customized blocking screen appearance",
            ],
            [
              "Passcode hashes",
              "SHA-256 hashes of your PIN and guardian PIN (original PINs are never stored)",
            ],
            [
              "Notification preferences",
              "Your per-category notification toggle states",
            ],
            [
              "Usage checkpoints",
              "Approximate app usage minutes for dashboard display",
            ],
            [
              "Distraction counts",
              'Number of times "Continue Using" was tapped per day',
            ],
          ],
        },
      },
      appleFrameworks: {
        heading: "Apple Frameworks & APIs",
        screenTime: {
          heading:
            "Screen Time API (FamilyControls / ManagedSettings / DeviceActivity)",
          items: [
            "Used to monitor app usage time and enforce blocking",
            "All usage data is processed locally by Apple's system extensions",
            "TimeBack does not have access to your browsing history, message content, or app-specific data",
            "TimeBack can only see opaque app tokens and aggregate usage durations",
          ],
        },
        location: {
          heading: "Location Services (CoreLocation)",
          items: [
            "Used only for the Geofence feature",
            "Location data is processed locally to determine if you are inside a configured zone",
            "Location coordinates are stored only in your zone rule configurations on-device",
            "No location data is transmitted to any server",
            "You can disable location access at any time in system Settings",
          ],
        },
        biometric: {
          heading: "Biometric Authentication (LocalAuthentication)",
          items: [
            "Used optionally for Face ID / Touch ID app lock",
            "Biometric data is handled entirely by Apple's Secure Enclave",
            "TimeBack never accesses or stores biometric data",
          ],
        },
        storeKit: {
          heading: "StoreKit (In-App Purchase)",
          items: [
            'Used for the optional "Buy Developer a Coffee" tip',
            "Purchase transactions are handled by Apple",
            "We do not receive any personal payment information",
          ],
        },
      },
      retention: {
        heading: "Data Retention",
        items: [
          "All data is stored on your device only",
          "Uninstalling the App permanently deletes all data",
          "There is no cloud backup of TimeBack-specific data",
          "Daily counters (usage, distraction count) reset automatically at midnight",
        ],
      },
      children: {
        heading: "Children's Privacy",
        body: "TimeBack can be used as a parental control tool via the Guardian Passcode feature. The App does not knowingly collect personal information from children. All data remains local to the device.",
      },
      thirdParty: {
        heading: "Third-Party Services",
        body: "TimeBack does not integrate any third-party analytics, advertising, or tracking services. The only external communication is with Apple's servers for:",
        items: [
          "In-App Purchase transaction verification (StoreKit)",
          "Map tile loading (MapKit, for the Geofence feature)",
        ],
      },
      rights: {
        heading: "Your Rights",
        body: "Since we do not collect any personal data, there is no personal data to access, modify, or delete from our servers. All data on your device is under your full control and can be deleted by uninstalling the App.",
      },
      changes: {
        heading: "Changes to This Policy",
        body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the App after changes constitutes acceptance of the updated policy.',
      },
      contact: {
        heading: "Contact",
        body: "If you have any questions about this Privacy Policy, please contact us at:",
        emailLabel: "Email:",
      },
      footer: "TimeBack is developed and maintained by Hominexis.",
    },
  },
  termsOfUsePage: {
    title: "Terms of Use",
    sections: {
      acceptance: {
        heading: "1. Acceptance of Terms",
        body: 'By downloading, installing, or using TimeBack ("the App"), you agree to these Terms of Use. If you do not agree, please do not use the App.',
      },
      description: {
        heading: "2. Description of Service",
        intro:
          "TimeBack is a screen time management application for iOS that helps users manage their app usage through:",
        items: [
          "Daily usage time limits",
          "Forced break intervals",
          "Time-based blocking schedules",
          "Location-based (geofence) blocking",
          "Customizable blocking screens",
        ],
        outro:
          "The App uses Apple's Screen Time API (FamilyControls, ManagedSettings, DeviceActivity) to provide these features.",
      },
      responsibilities: {
        heading: "3. User Responsibilities",
        passcode: {
          heading: "3.1 Passcode Management",
          items: [
            "You are responsible for remembering your PIN passcode and Guardian Passcode",
            "Guardian Passcodes cannot be recovered if forgotten; the only remedy is to uninstall and reinstall the App, which deletes all rules and settings",
            "We strongly recommend that Guardian Passcodes be shared with a trusted person",
          ],
        },
        appropriate: {
          heading: "3.2 Appropriate Use",
          items: [
            "The App is intended for personal screen time management and parental control purposes",
            "You agree not to use the App to restrict access on devices you do not own or have authority over",
            "You agree not to reverse engineer, modify, or redistribute the App",
          ],
        },
        device: {
          heading: "3.3 Device Requirements",
          items: [
            "The App requires iOS 16.0 or later",
            'Screen Time API features require the "Screen Time" permission to be granted',
            'Geofence features require "Always Allow" location permission',
            "Some features require biometric hardware (Face ID / Touch ID)",
          ],
        },
      },
      limitations: {
        heading: "4. Limitations of Service",
        accuracy: {
          heading: "4.1 Usage Data Accuracy",
          items: [
            "App usage data displayed in the dashboard is an approximation based on Apple's DeviceActivity framework",
            "Usage values may differ from iOS Screen Time due to different measurement methodologies",
            "Usage tracking checkpoints have a granularity of approximately 30 minutes",
          ],
        },
        reliability: {
          heading: "4.2 Blocking Reliability",
          items: [
            "App blocking relies on Apple's ManagedSettings framework and is subject to iOS system behavior",
            "In rare cases, system updates or permission changes may affect blocking functionality",
            "The App cannot guarantee 100% blocking effectiveness in all scenarios",
          ],
        },
        extension: {
          heading: "4.3 Extension Limitations",
          items: [
            "Shield (blocking screen) customization is rendered by the iOS system and has limited customization options",
            "Custom input fields (such as passcode entry) cannot be displayed on the Shield screen due to Apple API restrictions",
          ],
        },
      },
      purchases: {
        heading: "5. In-App Purchases",
        items: [
          'The App offers an optional tip ("Buy Developer a Coffee") as a consumable in-app purchase',
          "This purchase is voluntary and does not unlock additional features",
          "All purchases are processed through Apple's App Store and are subject to Apple's terms",
          "Consumable purchases are non-refundable (refund requests should be directed to Apple)",
        ],
      },
      privacy: {
        heading: "6. Privacy",
        bodyBefore: "Your privacy is important to us. Please refer to our ",
        link: "Privacy Policy",
        bodyAfter:
          " for details on how the App handles data. In summary: all data is stored locally on your device and is never transmitted to external servers.",
      },
      ip: {
        heading: "7. Intellectual Property",
        items: [
          "TimeBack and its associated branding, illustrations, and code are the intellectual property of the developer",
          "Apple, iOS, Screen Time, FamilyControls, Face ID, and Touch ID are trademarks of Apple Inc.",
        ],
      },
      disclaimer: {
        heading: "8. Disclaimer of Warranties",
        body: 'THE APP IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. THE DEVELOPER DOES NOT WARRANT THAT THE APP WILL BE ERROR-FREE, UNINTERRUPTED, OR FREE OF HARMFUL COMPONENTS.',
      },
      liability: {
        heading: "9. Limitation of Liability",
        intro:
          "TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE DEVELOPER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP, INCLUDING BUT NOT LIMITED TO:",
        items: [
          "Loss of data due to app uninstallation or device reset",
          "Inability to access apps due to blocking features",
          "Inaccuracy of usage time tracking",
          "Failure of blocking features to engage or disengage as expected",
        ],
      },
      termination: {
        heading: "10. Termination",
        body: "You may stop using the App at any time by uninstalling it. Uninstallation permanently deletes all local data associated with the App.",
      },
      changes: {
        heading: "11. Changes to Terms",
        body: 'We may update these Terms of Use from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the App after changes constitutes acceptance of the updated terms.',
      },
      governing: {
        heading: "12. Governing Law",
        body: "These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to conflict of law provisions.",
      },
      contact: {
        heading: "13. Contact",
        body: "If you have any questions about these Terms of Use, please contact us at:",
        emailLabel: "Email:",
      },
      footer: "TimeBack is developed and maintained by Hominexis.",
    },
  },
};

export default en;
export type Dictionary = typeof en;
