"use client";

import { useEffect } from "react";

export default function GTMProvider() {
  useEffect(() => {
    // Google Tag Manager
    (function (w: any, d: Document, s: string, l: string, i: string) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s) as HTMLScriptElement; // FIX ✔️
      const dl = l !== 'dataLayer' ? '&l=' + l : '';

      j.async = true; // FIX ✔️ works now
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;

      f.parentNode!.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-56NMKPP2');
  }, []);

  return null;
}
