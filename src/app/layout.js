import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { TitleUpdater } from "@/components/utils/TitleUpdater";
import ClientRoot from "@/components/utils/ClientRoot";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Kaushalendra Pratap",
  description: "Portfolio of Kaushalendra Pratap.",
  icons: {
    icon: "/assets/profile_circle.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${jetbrainsMono.className} bg-neutral-50 dark:bg-neutral-950 overflow-x-hidden`}>
        <ClientRoot>
          <TitleUpdater />
          
          <div className="relative z-10 flex min-h-dvh w-full flex-col">
            <Navbar />

            {/* Main Content */}
            <main className="grow w-full">
              {children}
            </main>

            
            <div className="relative z-50">
              <Footer />
            </div>

          </div>
        </ClientRoot>
      </body>
    </html>
  );
}