"use client";

import { useEffect } from "react";

export default function FaqRedirect({ target }: { target: string }) {
  useEffect(() => {
    window.location.replace(target);
  }, [target]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-page-bg">
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
      </noscript>
      <div className="text-center text-text-secondary">
        <p className="mb-3">Redirecting…</p>
        <a href={target} className="text-brand underline">
          Continue to FAQ
        </a>
      </div>
    </div>
  );
}
