"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function GtmRouterEvents() {
  const pathname = usePathname();
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "page_view",
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [pathname]);

  return null;
}
