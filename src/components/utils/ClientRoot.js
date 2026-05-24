"use client";

import { ThemeProvider } from "@/components/theme-provider";
import dynamic from "next/dynamic";
import AOSInit from "@/components/utils/AOSInit";

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
      <AOSInit />
      <GlobalBackground />
      {children}
    </ThemeProvider>
  );
}
