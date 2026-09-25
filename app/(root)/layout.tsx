import type { Metadata, Viewport } from "next";
import { baseMetadata, baseViewport } from "@/lib/seo";
import "../globals.css";

// Root layout for the bare `/` fallback page only. On Vercel, `/` is
// redirected server-side by vercel.json; this page (noindex) remains as a
// client-side fallback for other static hosts.
export const metadata: Metadata = baseMetadata;
export const viewport: Viewport = baseViewport;

export default function RootFallbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
