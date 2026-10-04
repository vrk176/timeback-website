import type { Dictionary } from "./en";

const de: Dictionary = {
  meta: {
    title: "TimeBack — Hol dir deine Bildschirmzeit zurück",
    description:
      "TimeBack ist eine datenschutzfreundliche iOS-App für Bildschirmzeit: Tageslimits, Pausenmodus, Zeitpläne, ortsbasierte Sperren, Wächter-Code und eigene Sperrbildschirme. Kostenlos, ohne Konto, ohne Werbung.",
  },
  hero: {
    badge: "Jetzt für iPhone und iPad",
    titleLine1: "Weniger Scrollen",
    titleLine2: "Mehr vom Leben",
    subtitle:
      "Setz dir Limits, Pausen, Zeitpläne und Zonen über Apples Bildschirmzeit. Kein Konto, keine Werbung, und deine Daten bleiben auf deinem iPhone oder iPad.",
    exploreFeatures: "Funktionen entdecken",
    comingSoon: "Im App Store laden",
    trustNote: "Kostenlos • Privat • Kein Konto nötig",
    badgePrivateTitle: "100 % privat",
    badgePrivateSub: "Nur auf dem Gerät",
    badgeBreaksTitle: "Automatische Pausen",
    badgeBreaksSub: "Pause nach langer Nutzung",
    screenshotAlt: "TimeBack-Regeln mit heutiger Nutzung, Tageslimit und Pausenmodus",
    mascotAlt: "Der Sanduhr-Wächter von TimeBack mit Schild und Schlüssel auf einer Wolke",
  },
  features: {
    eyebrow: "Funktionen",
    titlePart1: "Gemacht für",
    titleHighlight: "deinen Alltag",
    subtitle:
      "Regeln, Zeitpläne, Zonen und eigene Sperrbildschirme gegen Ablenkung. Deine Daten gibst du dafür nicht aus der Hand.",
    items: [
      {
        title: "Tageslimits",
        description:
          "Lege Tagesbudgets für Apps, Kategorien oder Websites fest. Wochentage und Wochenenden können eigene Limits haben.",
      },
      {
        title: "Pausenmodus",
        description:
          "Nach längerer Nutzung kann TimeBack ausgewählte Apps kurz sperren und danach automatisch wieder freigeben.",
      },
      {
        title: "Zeitpläne",
        description:
          "Leg Sperrzeiten für Arbeit, Lernen, Schlaf oder Familie fest, auch über Mitternacht, etwa von 22 bis 8 Uhr.",
      },
      {
        title: "Zonen",
        description:
          "Leg Zonen für Schule, Büro, Bibliothek oder Zuhause an. Kommst du an, werden Apps gesperrt, gehst du, sind sie wieder frei.",
      },
      {
        title: "Eigener Sperrbildschirm",
        description:
          "Titel, Nachricht, Symbol und Entsperrverzögerung legst du für Limits, Pausen, Zeitpläne und Zonen selbst fest.",
      },
      {
        title: "App-Sperre & Wächter-Code",
        description:
          "Sperre TimeBack mit Face ID, Touch ID oder Optic ID. Eltern, Partner oder Freunde können einen eigenen Wächter-Code verwahren. Nach jeder Fehleingabe wird die Wartezeit länger.",
      },
      {
        title: "Wochenrückblick",
        description:
          "Jeden Sonntag siehst du sieben Tage im Vergleich zu deinem Tageslimit, deinen stärksten Tag, die Tage unter dem Limit und den Unterschied zur Vorwoche. Als Bild teilbar.",
      },
      {
        title: "App-Löschung verhindern",
        description:
          "Optional: Damit du den Blocker nicht aus einem Impuls heraus löschst. Solange es an ist, verhindert iOS das Löschen aller Apps auf dem Gerät. Darauf weist die App vorher hin.",
      },
    ],
  },
  showcase: {
    eyebrow: "App-Vorschau",
    titlePart1: "Ein Blick in",
    titleHighlight: "die App",
    subtitle: "So sehen Regeln, Zeitpläne, Zonen, Sperrbildschirm und Wächter-Code auf dem iPhone aus.",
    newBadge: "Neu in 1.3",
    swipeHint: "Wischen für mehr",
    items: [
      {
        tag: "Wochenrückblick",
        line1: "Zeit gewonnen",
        line2: "Fortschritt im Blick",
        subtitle: "Sieh Woche für Woche, wie viel Zeit du zurückgewinnst.",
        detail: "Jeder Tag im Vergleich zu deinem Tageslimit, dazu dein stärkster Tag, die Tage unter dem Limit und die Vorwoche. Als Bild teilbar.",
        alt: "TimeBack-Wochenrückblick: sieben Tage im Vergleich zum Tageslimit",
      },
      {
        tag: "Fokusmodus",
        line1: "Fokuszeit",
        line2: "Ganz automatisch",
        subtitle: "Blockiere Ablenkungen nach deinem Zeitplan.",
        detail: "Wähle Tage und Uhrzeiten, auch über Mitternacht hinaus, etwa 22:30 bis 7:00 Uhr für die Nacht.",
        alt: "TimeBack-Schlafzeitplan von 22:30 bis 7:00 Uhr",
      },
      {
        tag: "Fokuszonen",
        line1: "Neuer Ort",
        line2: "Klarer Fokus",
        subtitle: "Deine Fokuszone startet, sobald du ankommst.",
        detail: "Setz einen Ort auf der Karte und wähle den Radius. Apps pausieren, solange du dort bist, und sind wieder da, wenn du gehst.",
        alt: "TimeBack-Zone auf der Karte mit Sperrradius",
      },
      {
        tag: "Limit erreicht",
        line1: "Zeit ist um",
        line2: "Zeit für Pause",
        subtitle: "Apps stoppen, sobald du dein Tageslimit erreichst.",
        detail: "Ist das Tageslimit einer Regel aufgebraucht, bleiben ihre Apps für den Rest des Tages gesperrt. Um Mitternacht beginnt es neu.",
        alt: "TimeBack-Regel, deren Tageslimit erreicht ist",
      },
      {
        tag: "Vertrauensperson",
        line1: "Bessere Routinen",
        line2: "Mit Rückhalt",
        subtitle: "Eine Vertrauensperson hilft dir, deine Regeln zu schützen.",
        detail: "Die App-Sperre nutzt Face ID, Touch ID oder Optic ID. Den Wächter-Code gibst du einer Vertrauensperson. Nach jeder Fehleingabe wird die Wartezeit länger.",
        alt: "TimeBack-Code-Einstellungen mit Face ID, Code und Wächter-Code",
      },
      {
        tag: "Dein Stil",
        line1: "Deine Erinnerung",
        line2: "Dein Stil",
        subtitle: "Gestalte deinen Sperrbildschirm ganz nach dir.",
        detail: "Wähle Symbol, Titel, Nachricht und Tasten deines Sperrbildschirms.",
        alt: "TimeBack-Sperrbildschirm-Einstellungen mit Vorschau",
      },
    ],
  },
  ipad: {
    eyebrow: "Neu in 1.3",
    titleLine1: "Jetzt auf dem iPad",
    titleLine2: "Zeit zurückgewinnen",
    subtitle: "Auf dem iPad hat TimeBack zwei Spalten: links Regeln, Zeitpläne und Zonen, rechts die Details dazu. Auch die Einstellungen sind zweispaltig. Kleinere iPads zeigen eine Spalte.",
    requirement: "Erfordert iOS oder iPadOS 26.2 oder neuer.",
    tabsLabel: "TimeBack auf dem iPad",
    tabs: [
      {
        label: "Regeln",
        title: "Deine Limits setzen",
        subtitle: "Lege für jede App ein Zeitlimit fest",
        alt: "TimeBack auf dem iPad: Regelliste neben der Detailansicht der gewählten Regel",
      },
      {
        label: "Zeitpläne",
        title: "Nach Zeitplan sperren",
        subtitle: "Schaffe Zeit für das, was dir wichtig ist",
        alt: "TimeBack auf dem iPad: Zeitplanliste neben der Detailansicht",
      },
      {
        label: "Zonen",
        title: "Nach Ort sperren",
        subtitle: "In dieser Zone pausieren Ablenkungen",
        alt: "TimeBack auf dem iPad: Zonenliste neben der Karte des gewählten Orts",
      },
    ],
  },
  howItWorks: {
    eyebrow: "So funktioniert's",
    titlePart1: "Einmal festlegen,",
    titleHighlight: "leichter dranbleiben",
    steps: [
      {
        title: "Grenzen wählen",
        description:
          "Wähl Apps, Kategorien oder Websites aus und dazu Tageslimits, Pausen, Zeitpläne oder Zonen, je nachdem, was zu deinem Alltag passt.",
      },
      {
        title: "iOS sperrt für dich",
        description:
          "TimeBack nutzt die offiziellen Bildschirmzeit-Schnittstellen von Apple. Greift eine Regel, erscheint dein Sperrbildschirm.",
      },
      {
        title: "Zur Routine machen",
        description:
          "Eine kleine Wartezeit vorm Entsperren, kurze Freigaben bei Bedarf und der Wächter-Code helfen dir, neue Gewohnheiten zu halten.",
      },
    ],
  },
  privacy: {
    eyebrow: "Datenschutz",
    titlePart1: "100 % privat.",
    titleHighlight: "Nichts wird hochgeladen.",
    ever: "Niemals.",
    trustBadge: "Kostenlos. Keine Werbung. Keine SDKs von Drittanbietern.",
    items: [
      {
        title: "Nur auf dem Gerät",
        description:
          "Regeln, Einstellungen und Sperrbildschirmtexte bleiben auf deinem Gerät, Codes liegen im Schlüsselbund.",
      },
      {
        title: "Kein Konto nötig",
        description:
          "App öffnen und loslegen. Keine Registrierung, keine E-Mail-Adresse.",
      },
      {
        title: "Kein Tracking",
        description:
          "Keine Analyse-Tools, keine Telemetrie, keine Werbung, keine Tracking-SDKs von Drittanbietern.",
      },
      {
        title: "Offizielle Apple-API",
        description:
          "Deine App-Auswahl läuft über die privaten Tokens von Apples Bildschirmzeit. App-Inhalte und Browserverlauf kann TimeBack nicht lesen.",
      },
    ],
  },
  cta: {
    title: "TimeBack jetzt herunterladen",
    subtitle:
      "Kostenlos im App Store, für iPhone und iPad.",
    badge: "Im App Store laden",
  },
  footer: {
    features: "Funktionen",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    faq: "Häufige Fragen",
    contact: "Kontakt",
    discord: "Discord beitreten",
    rights: "Alle Rechte vorbehalten.",
    language: "Sprache",
  },
  legal: {
    backToHome: "Zurück zur Startseite",
    lastUpdated: "Zuletzt aktualisiert: 1. Oktober 2026",
  },
  privacyPolicyPage: {
    title: "Datenschutzerklärung",
    sections: {
      overview: {
        heading: "Überblick",
        body: "TimeBack („die App“) wird von Hominexis entwickelt. Wir nehmen deinen Datenschutz ernst. Diese Richtlinie erklärt, wie die App mit deinen Daten umgeht.",
        principle:
          "Das Kernprinzip: TimeBack erfasst, überträgt oder speichert keine personenbezogenen Daten auf externen Servern. Alle Daten bleiben auf deinem Gerät.",
      },
      notCollect: {
        heading: "Daten, die wir NICHT erfassen",
        items: [
          "Wir erfassen keine personenbezogenen Daten (Name, E-Mail, Telefonnummer)",
          "Wir erfassen keine Nutzungsanalysen oder Verhaltensdaten",
          "Wir verwenden keine Werbe-SDKs oder Tracking-Frameworks",
          "Wir teilen keine Daten mit Dritten",
          "Wir verwenden keine Cookies oder app-übergreifendes Tracking",
          "Wir verlangen keine Kontoerstellung oder Anmeldung",
        ],
      },
      localData: {
        heading: "Daten, die lokal auf deinem Gerät gespeichert werden",
        intro:
          "Die folgenden Daten werden ausschließlich auf deinem Gerät mit Apples App Group Container gespeichert und niemals übertragen:",
        table: {
          headers: ["Daten", "Zweck"],
          rows: [
            [
              "App-Nutzungsregeln",
              "Deine konfigurierten Zeitlimits, Pausenmodi und On-Demand-Einstellungen",
            ],
            ["Zeitplanregeln", "Deine konfigurierten Sperrzeitpläne"],
            [
              "Geofence-Regeln",
              "Ortskoordinaten und Radius für zonenbasierte Sperren",
            ],
            ["Sperrbildschirm-Konfiguration", "Dein angepasstes Sperrbildschirm-Aussehen"],
            [
              "Code-Hashes",
              "SHA-256-Hashes deines Codes und Wächter-Codes (Original-Codes werden niemals gespeichert)",
            ],
            [
              "Benachrichtigungseinstellungen",
              "Deine kategorieweisen Benachrichtigungszustände",
            ],
            [
              "Nutzungs-Checkpoints",
              "Ungefähre App-Nutzungsminuten für die Dashboard-Anzeige",
            ],
            [
              "Ablenkungszähler",
              'Anzahl der Male, die "Weiter nutzen" pro Tag angetippt wurde',
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
            "Wird zur Überwachung der App-Nutzungszeit und zur Durchsetzung von Sperren verwendet",
            "Alle Nutzungsdaten werden lokal von Apples Systemerweiterungen verarbeitet",
            "TimeBack hat keinen Zugriff auf deinen Browserverlauf, Nachrichteninhalte oder app-spezifische Daten",
            "TimeBack kann nur undurchsichtige App-Tokens und aggregierte Nutzungsdauer sehen",
          ],
        },
        location: {
          heading: "Ortungsdienste (CoreLocation)",
          items: [
            "Wird nur für die Geofence-Funktion verwendet",
            "Der aktuelle Standort deines Geräts wird lokal verarbeitet, um festzustellen, ob du dich in einer konfigurierten Zone befindest — TimeBack lädt ihn nicht hoch (TimeBack hat keine Server)",
            "Die von dir konfigurierten Zonenkoordinaten werden nur in deinen Regelkonfigurationen auf dem Gerät gespeichert",
            "Du kannst den Standortzugriff jederzeit in den Systemeinstellungen deaktivieren",
          ],
        },
        // TODO: native review — translated from EN reference
        mapKit: {
          heading: "Karten (MapKit)",
          items: [
            "Wird verwendet, um die Karte anzuzeigen und dir bei der Suche nach einem Ort beim Erstellen einer Zone zu helfen — Adresssuche, Orte in der Nähe und Reverse Geocoding",
            "Wenn du in das Adresssuchfeld tippst, werden dein Suchtext und die ungefähre Kartenregion an Apple Maps gesendet, um Vorschläge zurückzugeben",
            "Wenn du eine Stecknadel setzt oder Orte in der Nähe (Schulen, Bibliotheken) suchst, werden die Koordinaten an Apple Maps gesendet, um Adressen oder Points of Interest zurückzugeben",
            "Diese Kartenanfragen werden von Apple gemäß Apples Datenschutzrichtlinie verarbeitet — TimeBack speichert, protokolliert oder leitet sie nicht weiter, und es werden keine Kartendaten an TimeBack gesendet",
            "Wenn du die Zonenerstellungskarte nicht öffnest, werden keine Kartenanfragen gestellt",
          ],
        },
        biometric: {
          heading: "Biometrische Authentifizierung (LocalAuthentication)",
          items: [
            "Wird optional für Face ID / Touch ID App-Sperre verwendet",
            "Biometrische Daten werden vollständig von Apples Secure Enclave verarbeitet",
            "TimeBack greift niemals auf biometrische Daten zu oder speichert sie",
          ],
        },
        storeKit: {
          heading: "StoreKit (In-App-Kauf)",
          items: [
            'Wird für den optionalen "Spendiere dem Entwickler einen Kaffee"-Tipp verwendet',
            "Kauftransaktionen werden von Apple abgewickelt",
            "Wir erhalten keine personenbezogenen Zahlungsinformationen",
          ],
        },
      },
      retention: {
        heading: "Datenspeicherung",
        items: [
          "Alle Daten werden nur auf deinem Gerät gespeichert",
          "Das Deinstallieren der App löscht dauerhaft alle Daten",
          "Es gibt kein Cloud-Backup für TimeBack-spezifische Daten",
          "Tageszähler (Nutzung, Ablenkungszähler) werden um Mitternacht automatisch zurückgesetzt",
        ],
      },
      children: {
        heading: "Datenschutz für Kinder",
        body: "TimeBack kann über die Wächter-Code-Funktion als Kindersicherungstool verwendet werden. Die App erfasst wissentlich keine personenbezogenen Daten von Kindern. Alle Daten bleiben lokal auf dem Gerät.",
      },
      thirdParty: {
        heading: "Drittanbieter-Dienste",
        body: "TimeBack integriert keine Drittanbieter-Analyse-, Werbe- oder Tracking-Dienste. Die einzige externe Kommunikation erfolgt mit Apples Servern für:",
        items: [
          "In-App-Kauf-Transaktionsverifizierung (StoreKit)",
          "Karten und Geocoding (MapKit, beim Erstellen einer Zone) — Kachel-Laden, Adresssuche, Suche nach Orten in der Nähe und Reverse Geocoding (von Apple verarbeitet, siehe Apples Datenschutzrichtlinie)",
        ],
      },
      website: {
        heading: "Diese Website",
        body: "Alles oben Stehende betrifft die TimeBack-App. Diese Website (timeback.hominexis.com) ist von der App getrennt und verarbeitet nur wenige Daten:",
        items: [
          "Besuchsstatistik: Wir nutzen Vercel Web Analytics, um Seitenaufrufe zu zählen. Erfasst werden die aufgerufene Seite, die verweisende Website, der ungefähre Standort (Land, Region, Stadt), Browser, Betriebssystem und Gerätetyp – ausschließlich für anonyme, zusammengefasste Statistiken. Es werden keine Drittanbieter-Cookies verwendet; Besuche werden über einen Hash der Anfrage gezählt, der nach 24 Stunden verworfen wird. Die Daten werden weder mit deiner IP-Adresse verknüpft noch genutzt, um dich über andere Websites hinweg zu verfolgen.",
          "Spracheinstellung: Wenn du über die Sprachauswahl eine Sprache wählst, speichert die Website deine Wahl in einem Cookie (timeback-locale) und im lokalen Speicher deines Browsers, damit sie beim nächsten Mal in dieser Sprache öffnet. Darin steht nur der Sprachcode; er wird nie zum Tracking verwendet.",
          "Nichts, was auf dieser Website erfasst wird, wird mit der TimeBack-App oder mit Daten auf deinem Gerät verknüpft.",
        ],
      },
      rights: {
        heading: "Deine Rechte",
        body: "Da wir keine personenbezogenen Daten erfassen, gibt es keine personenbezogenen Daten, auf die auf unseren Servern zugegriffen, geändert oder gelöscht werden kann. Alle Daten auf deinem Gerät stehen unter deiner vollständigen Kontrolle und können durch Deinstallation der App gelöscht werden.",
      },
      changes: {
        heading: "Änderungen dieser Richtlinie",
        body: 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten "Zuletzt aktualisiert"-Datum veröffentlicht. Die weitere Nutzung der App nach Änderungen stellt die Annahme der aktualisierten Richtlinie dar.',
      },
      contact: {
        heading: "Kontakt",
        body: "Wenn du Fragen zu dieser Datenschutzerklärung hast, kontaktiere uns bitte unter:",
        emailLabel: "E-Mail:",
      },
      footer: "TimeBack wird von Hominexis entwickelt und gepflegt.",
    },
  },
  termsOfUsePage: {
    title: "Nutzungsbedingungen",
    sections: {
      acceptance: {
        heading: "1. Annahme der Bedingungen",
        body: 'Durch das Herunterladen, Installieren oder Verwenden von TimeBack („die App“) stimmst du diesen Nutzungsbedingungen zu. Wenn du nicht einverstanden bist, verwende die App bitte nicht.',
      },
      description: {
        heading: "2. Beschreibung des Dienstes",
        intro:
          "TimeBack ist eine Bildschirmzeit-Management-Anwendung für iOS, die Benutzern hilft, ihre App-Nutzung zu verwalten durch:",
        items: [
          "Tägliche Nutzungszeitlimits",
          "Pausenmodus",
          "Zeitbasierte Sperrzeitpläne",
          "Standortbasierte (Geofence) Sperren",
          "Anpassbare Sperrbildschirme",
          "Wochenrückblick",
          "Optionaler Schutz vor App-Löschung (gerätweit)",
        ],
        outro:
          "Die App verwendet Apples Screen Time API (FamilyControls, ManagedSettings, DeviceActivity), um diese Funktionen bereitzustellen.",
      },
      responsibilities: {
        heading: "3. Benutzerpflichten",
        passcode: {
          heading: "3.1 Code-Verwaltung",
          items: [
            "Du bist verantwortlich dafür, dir deinen Code und Wächter-Code zu merken",
            "Wächter-Codes können bei Vergessen nicht wiederhergestellt werden; das einzige Mittel ist die Deinstallation und Neuinstallation der App, wodurch alle Regeln und Einstellungen gelöscht werden",
            "Wir empfehlen dringend, Wächter-Codes mit einer vertrauenswürdigen Person zu teilen",
          ],
        },
        appropriate: {
          heading: "3.2 Angemessene Nutzung",
          items: [
            "Die App ist für persönliche Bildschirmzeit-Verwaltung und Kindersicherungszwecke vorgesehen",
            "Du stimmst zu, die App nicht zu verwenden, um den Zugriff auf Geräte einzuschränken, die dir nicht gehören oder über die du keine Befugnis hast",
            "Du stimmst zu, die App nicht zurückzuentwickeln, zu modifizieren oder zu verbreiten",
          ],
        },
        device: {
          heading: "3.3 Geräteanforderungen",
          items: [
            "Die App erfordert iOS 26.2 oder höher",
            'Screen Time API-Funktionen erfordern die Erteilung der "Bildschirmzeit"-Berechtigung',
            'Geofence-Funktionen erfordern die "Immer erlauben"-Standortberechtigung',
            "Einige Funktionen erfordern biometrische Hardware (Face ID / Touch ID)",
          ],
        },
      },
      limitations: {
        heading: "4. Dienstbeschränkungen",
        accuracy: {
          heading: "4.1 Genauigkeit der Nutzungsdaten",
          items: [
            "Im Dashboard angezeigte App-Nutzungsdaten sind eine Annäherung basierend auf Apples DeviceActivity-Framework",
            "Nutzungswerte können aufgrund unterschiedlicher Messmethoden von der iOS-Bildschirmzeit abweichen",
            "Nutzungs-Tracking-Checkpoints haben eine Granularität von etwa 30 Minuten",
          ],
        },
        reliability: {
          heading: "4.2 Sperrzuverlässigkeit",
          items: [
            "App-Sperrung verlässt sich auf Apples ManagedSettings-Framework und unterliegt dem iOS-Systemverhalten",
            "In seltenen Fällen können Systemupdates oder Berechtigungsänderungen die Sperrfunktionalität beeinträchtigen",
            "Die App kann keine 100%ige Sperrwirksamkeit in allen Szenarien garantieren",
          ],
        },
        extension: {
          heading: "4.3 Erweiterungsbeschränkungen",
          items: [
            "Die Anpassung des Sperrbildschirms (Shield) wird vom iOS-System gerendert und hat begrenzte Anpassungsoptionen",
            "Benutzerdefinierte Eingabefelder (wie Code-Eingabe) können aufgrund von Apple-API-Einschränkungen nicht auf dem Sperrbildschirm angezeigt werden",
          ],
        },
      },
      purchases: {
        heading: "5. In-App-Käufe",
        items: [
          'Die App bietet einen optionalen Tipp ("Spendiere dem Entwickler einen Kaffee") als verbrauchbaren In-App-Kauf an',
          "Dieser Kauf ist freiwillig und schaltet keine zusätzlichen Funktionen frei",
          "Alle Käufe werden über Apples App Store abgewickelt und unterliegen Apples Bedingungen",
          "Verbrauchbare Käufe sind nicht erstattungsfähig (Erstattungsanfragen sollten an Apple gerichtet werden)",
        ],
      },
      privacy: {
        heading: "6. Datenschutz",
        bodyBefore: "Dein Datenschutz ist uns wichtig. Bitte lies unsere ",
        link: "Datenschutzerklärung",
        bodyAfter:
          ", um Details darüber zu erfahren, wie die App mit Daten umgeht. Zusammengefasst: Alle Daten werden lokal auf deinem Gerät gespeichert und werden niemals an externe Server übertragen.",
      },
      ip: {
        heading: "7. Geistiges Eigentum",
        items: [
          "TimeBack und sein zugehöriges Branding, Illustrationen und Code sind geistiges Eigentum des Entwicklers",
          "Apple, iOS, Screen Time, FamilyControls, Face ID und Touch ID sind Warenzeichen von Apple Inc.",
        ],
      },
      disclaimer: {
        heading: "8. Gewährleistungsausschluss",
        body: 'DIE APP WIRD "WIE BESEHEN" OHNE JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNG BEREITGESTELLT. DER ENTWICKLER GEWÄHRLEISTET NICHT, DASS DIE APP FEHLERFREI, UNUNTERBROCHEN ODER FREI VON SCHÄDLICHEN KOMPONENTEN IST.',
      },
      liability: {
        heading: "9. Haftungsbeschränkung",
        intro:
          "IM GRÖSSTMÖGLICHEN GESETZLICH ZULÄSSIGEN UMFANG HAFTET DER ENTWICKLER NICHT FÜR INDIREKTE, ZUFÄLLIGE, BESONDERE, FOLGE- ODER STRAFSCHADENSERSATZ, DER SICH AUS DER NUTZUNG DER APP ERGIBT, EINSCHLIESSLICH ABER NICHT BESCHRÄNKT AUF:",
        items: [
          "Datenverlust aufgrund von App-Deinstallation oder Gerätezurücksetzung",
          "Unfähigkeit, auf Apps aufgrund von Sperrfunktionen zuzugreifen",
          "Ungenauigkeit der Nutzungszeit-Nachverfolgung",
          "Versagen der Sperrfunktionen beim Aktivieren oder Deaktivieren wie erwartet",
        ],
      },
      termination: {
        heading: "10. Kündigung",
        body: "Du kannst die Nutzung der App jederzeit durch Deinstallation beenden. Die Deinstallation löscht dauerhaft alle mit der App verbundenen lokalen Daten.",
      },
      changes: {
        heading: "11. Änderungen der Bedingungen",
        body: 'Wir können diese Nutzungsbedingungen von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten "Zuletzt aktualisiert"-Datum veröffentlicht. Die weitere Nutzung der App nach Änderungen stellt die Annahme der aktualisierten Bedingungen dar.',
      },
      governing: {
        heading: "12. Geltendes Recht",
        body: "Diese Bedingungen unterliegen den Gesetzen Singapurs und werden entsprechend ausgelegt, ohne Rücksicht auf Kollisionsnormen.",
      },
      contact: {
        heading: "13. Kontakt",
        body: "Wenn du Fragen zu diesen Nutzungsbedingungen hast, kontaktiere uns bitte unter:",
        emailLabel: "E-Mail:",
      },
      footer: "TimeBack wird von Hominexis entwickelt und gepflegt.",
    },
  },
};

export default de;
