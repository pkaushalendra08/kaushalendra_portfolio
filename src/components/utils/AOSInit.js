"use client";

import { useEffect } from "react";
import "aos/dist/aos.css"; // must be a static import at module level

export default function AOSInit() {
  useEffect(() => {
    // Small delay ensures DOM is fully painted before AOS scans elements
    const timer = setTimeout(() => {
      import("aos").then((AOS) => {
        AOS.default.init({
          duration: 700,
          easing: "ease-out-cubic",
          once: true,
          offset: 80,
          delay: 0,
        });
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
