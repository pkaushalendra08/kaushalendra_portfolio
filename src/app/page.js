"use client";

import About from "@/components/About/About";
import Achievement from "@/components/Achievement/Achievement"
import Contact from "@/components/Contact/Contact";
import Skills from "@/components/Skills/Skills";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Project from "@/components/Project/Project";
import CertificateSection from "@/components/Certificate/CertificateSection";

export default function Home() {
  return (
    <div className="relative z-10 w-full flex flex-col gap-10 overflow-hidden">
      <About />
      <Achievement />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <CertificateSection />
      <Contact />

    </div>
  );
}
