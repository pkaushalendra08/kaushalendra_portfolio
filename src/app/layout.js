import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { TitleUpdater } from "@/components/utils/TitleUpdater";
import ClientRoot from "@/components/utils/ClientRoot";
import OfflineIndicator from "@/components/OfflineIndicator";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Kaushalendra Pratap | Portfolio",
  description: "Full Stack Developer skilled in React.js, Next.js, TypeScript, Node.js, and the MERN stack. Smart India Hackathon 2025 National Winner building scalable web applications, AI-powered solutions, and modern user-focused experiences.",
  icons: {
    icon: "/assets/profile_circle.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${jetbrainsMono.className} bg-neutral-50 dark:bg-neutral-950 overflow-x-hidden`}>
        <ClientRoot>
          
         
          <OfflineIndicator />
          
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