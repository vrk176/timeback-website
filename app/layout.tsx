import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TimeBack — Take Back Control of Your Screen Time",
  description:
    "TimeBack helps you build healthier screen habits with powerful, privacy-first tools. Daily limits, forced breaks, schedules, location zones, and more. Free and 100% private.",
  keywords: [
    "screen time",
    "app blocker",
    "digital wellbeing",
    "focus",
    "productivity",
    "iOS",
    "privacy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
