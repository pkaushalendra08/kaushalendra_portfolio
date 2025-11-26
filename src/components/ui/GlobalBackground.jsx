"use client";

import { useTheme } from "next-themes";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function GlobalBackground() {
  const { resolvedTheme } = useTheme();

  // Wait until theme is resolved
  if (!resolvedTheme) return null;

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      {resolvedTheme === "dark" ? (
        <DottedGlowBackground />
      ) : (
        <BackgroundGradientAnimation />
      )}
    </div>
  );
}
