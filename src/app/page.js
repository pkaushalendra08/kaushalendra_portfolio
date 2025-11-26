"use client";

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Skills from "@/components/Skills/Skills";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Project from "@/components/Project/Project";
import CertificateSection from "@/components/Certificate/CertificateSection";

export default function Home() {
  return (
    <main className="relative z-10 w-full flex flex-col gap-10">
      <About />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <CertificateSection />
      <Contact />
    </main>
  );
}
