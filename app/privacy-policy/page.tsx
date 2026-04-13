import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — TimeBack",
  description:
    "TimeBack does not collect, transmit, or store any personal data on external servers. All data remains on your device.",
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-white/70 mt-3">Last updated: March 30, 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 prose prose-lg prose-gray">
        <section>
          <h2>Overview</h2>
          <p>
            TimeBack (&quot;the App&quot;) is developed by Hominexis. We
            take your privacy seriously. This policy explains how the App handles
            your data.
          </p>
          <p className="font-semibold text-brand">
            The core principle: TimeBack does not collect, transmit, or store any
            personal data on external servers. All data remains on your device.
          </p>
        </section>

        <section>
          <h2>Data We Do NOT Collect</h2>
          <ul>
            <li>We do <strong>not</strong> collect personal information (name, email, phone number)</li>
            <li>We do <strong>not</strong> collect usage analytics or behavioral data</li>
            <li>We do <strong>not</strong> use advertising SDKs or tracking frameworks</li>
            <li>We do <strong>not</strong> share any data with third parties</li>
            <li>We do <strong>not</strong> use cookies or cross-app tracking</li>
            <li>We do <strong>not</strong> require account creation or login</li>
          </ul>
        </section>

        <section>
          <h2>Data Stored Locally on Your Device</h2>
          <p>
            The following data is stored <strong>exclusively on your device</strong> using
            Apple&apos;s App Group container and is never transmitted:
          </p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>App usage rules</td><td>Your configured time limits, break modes, and on-demand settings</td></tr>
                <tr><td>Schedule rules</td><td>Your configured blocking schedules</td></tr>
                <tr><td>Geofence rules</td><td>Location coordinates and radius for zone-based blocking</td></tr>
                <tr><td>Shield configuration</td><td>Your customized blocking screen appearance</td></tr>
                <tr><td>Passcode hashes</td><td>SHA-256 hashes of your PIN and guardian PIN (original PINs are never stored)</td></tr>
                <tr><td>Notification preferences</td><td>Your per-category notification toggle states</td></tr>
                <tr><td>Usage checkpoints</td><td>Approximate app usage minutes for dashboard display</td></tr>
                <tr><td>Distraction counts</td><td>Number of times &quot;Continue Using&quot; was tapped per day</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Apple Frameworks &amp; APIs</h2>

          <h3>Screen Time API (FamilyControls / ManagedSettings / DeviceActivity)</h3>
          <ul>
            <li>Used to monitor app usage time and enforce blocking</li>
            <li>All usage data is processed locally by Apple&apos;s system extensions</li>
            <li>TimeBack does <strong>not</strong> have access to your browsing history, message content, or app-specific data</li>
            <li>TimeBack can only see opaque app tokens and aggregate usage durations</li>
          </ul>

          <h3>Location Services (CoreLocation)</h3>
          <ul>
            <li>Used <strong>only</strong> for the Geofence feature</li>
            <li>Location data is processed locally to determine if you are inside a configured zone</li>
            <li>Location coordinates are stored only in your zone rule configurations on-device</li>
            <li>No location data is transmitted to any server</li>
            <li>You can disable location access at any time in system Settings</li>
          </ul>

          <h3>Biometric Authentication (LocalAuthentication)</h3>
          <ul>
            <li>Used optionally for Face ID / Touch ID app lock</li>
            <li>Biometric data is handled entirely by Apple&apos;s Secure Enclave</li>
            <li>TimeBack never accesses or stores biometric data</li>
          </ul>

          <h3>StoreKit (In-App Purchase)</h3>
          <ul>
            <li>Used for the optional &quot;Buy Developer a Coffee&quot; tip</li>
            <li>Purchase transactions are handled by Apple</li>
            <li>We do not receive any personal payment information</li>
          </ul>
        </section>

        <section>
          <h2>Data Retention</h2>
          <ul>
            <li>All data is stored on your device only</li>
            <li>Uninstalling the App permanently deletes all data</li>
            <li>There is no cloud backup of TimeBack-specific data</li>
            <li>Daily counters (usage, distraction count) reset automatically at midnight</li>
          </ul>
        </section>

        <section>
          <h2>Children&apos;s Privacy</h2>
          <p>
            TimeBack can be used as a parental control tool via the Guardian Passcode
            feature. The App does not knowingly collect personal information from
            children. All data remains local to the device.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            TimeBack does <strong>not</strong> integrate any third-party analytics,
            advertising, or tracking services. The only external communication is
            with Apple&apos;s servers for:
          </p>
          <ul>
            <li>In-App Purchase transaction verification (StoreKit)</li>
            <li>Map tile loading (MapKit, for the Geofence feature)</li>
          </ul>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            Since we do not collect any personal data, there is no personal data to
            access, modify, or delete from our servers. All data on your device is
            under your full control and can be deleted by uninstalling the App.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated &quot;Last updated&quot; date. Continued use
            of the App after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
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
