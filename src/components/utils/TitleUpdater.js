"use client";

import { useEffect } from "react";

export function TitleUpdater() {
  useEffect(() => {
    const originalIcon = "/assets/profile_circle.png";
    const awayIcon = "/assets/profile_b&w.png";

    const handleVisibilityChange = () => {
      let favicon =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");

      if (!favicon.rel) {
        favicon.rel = "icon";
        document.head.appendChild(favicon);
      }

      if (document.hidden) {
        document.title = "Come back soon!";
        favicon.href = awayIcon;
      } else {
        document.title = "Kaushalendra Pratap";
        favicon.href = originalIcon;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  return null;
}
