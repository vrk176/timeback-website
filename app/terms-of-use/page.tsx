import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — TimeBack",
  description:
    "Terms of Use for TimeBack, a screen time management application for iOS.",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-page-bg">
      {/* Header */}
      <header className="gradient-hero py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <img src="/logo.png" alt="TimeBack" className="w-6 h-6 rounded-lg" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Terms of Use
          </h1>
          <p className="text-white/70 mt-3">Last updated: March 30, 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 prose prose-lg prose-gray">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using TimeBack (&quot;the App&quot;), you agree
            to these Terms of Use. If you do not agree, please do not use the App.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            TimeBack is a screen time management application for iOS that helps
            users manage their app usage through:
          </p>
          <ul>
            <li>Daily usage time limits</li>
            <li>Forced break intervals</li>
            <li>Time-based blocking schedules</li>
            <li>Location-based (geofence) blocking</li>
            <li>Customizable blocking screens</li>
          </ul>
          <p>
            The App uses Apple&apos;s Screen Time API (FamilyControls,
            ManagedSettings, DeviceActivity) to provide these features.
          </p>
        </section>

        <section>
          <h2>3. User Responsibilities</h2>

          <h3>3.1 Passcode Management</h3>
          <ul>
            <li>You are responsible for remembering your PIN passcode and Guardian Passcode</li>
            <li><strong>Guardian Passcodes cannot be recovered</strong> if forgotten; the only remedy is to uninstall and reinstall the App, which deletes all rules and settings</li>
            <li>We strongly recommend that Guardian Passcodes be shared with a trusted person</li>
          </ul>

          <h3>3.2 Appropriate Use</h3>
          <ul>
            <li>The App is intended for personal screen time management and parental control purposes</li>
            <li>You agree not to use the App to restrict access on devices you do not own or have authority over</li>
            <li>You agree not to reverse engineer, modify, or redistribute the App</li>
          </ul>

          <h3>3.3 Device Requirements</h3>
          <ul>
            <li>The App requires iOS 16.0 or later</li>
            <li>Screen Time API features require the &quot;Screen Time&quot; permission to be granted</li>
            <li>Geofence features require &quot;Always Allow&quot; location permission</li>
            <li>Some features require biometric hardware (Face ID / Touch ID)</li>
          </ul>
        </section>

        <section>
          <h2>4. Limitations of Service</h2>

          <h3>4.1 Usage Data Accuracy</h3>
          <ul>
            <li>App usage data displayed in the dashboard is an approximation based on Apple&apos;s DeviceActivity framework</li>
            <li>Usage values may differ from iOS Screen Time due to different measurement methodologies</li>
            <li>Usage tracking checkpoints have a granularity of approximately 30 minutes</li>
          </ul>

          <h3>4.2 Blocking Reliability</h3>
          <ul>
            <li>App blocking relies on Apple&apos;s ManagedSettings framework and is subject to iOS system behavior</li>
            <li>In rare cases, system updates or permission changes may affect blocking functionality</li>
            <li>The App cannot guarantee 100% blocking effectiveness in all scenarios</li>
          </ul>

          <h3>4.3 Extension Limitations</h3>
          <ul>
            <li>Shield (blocking screen) customization is rendered by the iOS system and has limited customization options</li>
            <li>Custom input fields (such as passcode entry) cannot be displayed on the Shield screen due to Apple API restrictions</li>
          </ul>
        </section>

        <section>
          <h2>5. In-App Purchases</h2>
          <ul>
            <li>The App offers an optional tip (&quot;Buy Developer a Coffee&quot;) as a consumable in-app purchase</li>
            <li>This purchase is voluntary and does not unlock additional features</li>
            <li>All purchases are processed through Apple&apos;s App Store and are subject to Apple&apos;s terms</li>
            <li>Consumable purchases are non-refundable (refund requests should be directed to Apple)</li>
          </ul>
        </section>

        <section>
          <h2>6. Privacy</h2>
          <p>
            Your privacy is important to us. Please refer to our{" "}
            <Link href="/privacy-policy" className="text-brand hover:underline">
              Privacy Policy
            </Link>{" "}
            for details on how the App handles data. In summary:{" "}
            <strong>
              all data is stored locally on your device and is never transmitted
              to external servers
            </strong>
            .
          </p>
        </section>

        <section>
          <h2>7. Intellectual Property</h2>
          <ul>
            <li>TimeBack and its associated branding, illustrations, and code are the intellectual property of the developer</li>
            <li>Apple, iOS, Screen Time, FamilyControls, Face ID, and Touch ID are trademarks of Apple Inc.</li>
          </ul>
        </section>

        <section>
          <h2>8. Disclaimer of Warranties</h2>
          <p className="uppercase text-sm">
            THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED. THE DEVELOPER DOES NOT WARRANT THAT THE APP WILL BE
            ERROR-FREE, UNINTERRUPTED, OR FREE OF HARMFUL COMPONENTS.
          </p>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>
          <p className="uppercase text-sm">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE DEVELOPER SHALL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP, INCLUDING BUT NOT
            LIMITED TO:
          </p>
          <ul>
            <li>Loss of data due to app uninstallation or device reset</li>
            <li>Inability to access apps due to blocking features</li>
            <li>Inaccuracy of usage time tracking</li>
            <li>Failure of blocking features to engage or disengage as expected</li>
          </ul>
        </section>

        <section>
          <h2>10. Termination</h2>
          <p>
            You may stop using the App at any time by uninstalling it.
            Uninstallation permanently deletes all local data associated with the
            App.
          </p>
        </section>

        <section>
          <h2>11. Changes to Terms</h2>
          <p>
            We may update these Terms of Use from time to time. Changes will be
            posted on this page with an updated &quot;Last updated&quot; date. Continued use
            of the App after changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of Singapore, without regard to conflict of law provisions.
          </p>
        </section>

        <section>
          <h2>13. Contact</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:connect@hominexis.com">connect@hominexis.com</a>
          </p>
        </section>

        <hr />
        <p className="text-text-secondary italic">
          TimeBack is developed and maintained by Hominexis.
        </p>
      </main>
    </div>
  );
}
