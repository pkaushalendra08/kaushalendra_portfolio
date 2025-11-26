import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { TitleUpdater } from "@/components/utils/TitleUpdater";
import ClientRoot from "@/components/utils/ClientRoot"; // new wrapper

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Kaushalendra Pratap",
  description: "Portfolio of Kaushalendra Pratap.",
  icons: {
    icon: "/assets/profile_b&w.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.className} bg-neutral-50 dark:bg-neutral-950`}>
        <ClientRoot>
          <TitleUpdater />
          <div className="relative z-10 flex min-h-screen w-full flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ClientRoot>
      </body>
    </html>
  );
}
