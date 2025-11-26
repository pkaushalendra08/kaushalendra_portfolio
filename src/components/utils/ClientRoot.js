"use client";

import { ThemeProvider } from "@/components/theme-provider";
import dynamic from "next/dynamic";

const GlobalBackground = dynamic(
  () =>
    import("@/components/ui/GlobalBackground").then(
      (mod) => mod.GlobalBackground
    ),
  { ssr: false }
);

export default function ClientRoot({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <GlobalBackground />
      {children}
    </ThemeProvider>
  );
}
