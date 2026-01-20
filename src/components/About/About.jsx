"use client";

import dynamic from "next/dynamic";
import { FlipWords } from "@/components/ui/flip-words";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { TiltOnTouch } from "@/components/ui/tilt-on-touch";

const About = () => {
  const EncryptedTextNoSSR = dynamic(() => import("@/components/ui/encrypted-text").then(mod => mod.EncryptedText), { ssr: false });

  const words = ["FULL STACK DEVELOPER", "SOFTWARE DEVELOPER", "SIH'25 National Winner"];

  return (
    <section
      id="about"
      className="relative w-full pt-20 md:pt-28 lg:pt-34 pb-6 md:pb-14 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-4">
          
          {/* Text Content Area */}
          <div className="w-full md:w-[60%] lg:w-[65%] text-center md:text-left">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#19161d] dark:text-[#e9d7fe] mb-2 leading-tight">
              Hello, I am
            </h1>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#5726b9] dark:text-[#c9a4f7] mb-4 leading-tight">
              <EncryptedTextNoSSR
                text="Kaushalendra Pratap"
                encryptedClassName="text-neutral-500"
                revealedClassName="dark:text-white text-black"
                revealDelayMs={50}
              />
            </h2>

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-[#5726b9] dark:text-[#74c0fc] leading-snug">
              I am a{" "}
              <span className="text-[#25162d] dark:text-[#f0f1fa] font-serif block sm:inline-block">
                <FlipWords words={words} duration="2000" />
              </span>
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-[#1f2024] dark:text-[#abb0ca] mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              I’m a dedicated full-stack developer with hands-on experience building robust, scalable web applications using the MERN stack and Next.js. 
              I specialize in creating responsive user interfaces, seamless server-side rendered experiences, and clean, maintainable full-stack solutions. 
              I’m a <b className="text-[#8245ec]">Smart India Hackathon 2025 National Winner</b> where me and my team solved the problem statement given by National Technical Research Organisation (NTRO).
            </p>

            {/* BUTTONS CONTAINER */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
              
              {/* 1. Resume Button (Primary) */}
              <a
                href="https://drive.google.com/file/d/1MAZWYIrlit_W9qvHf2ZpbncMondLZ6Bb/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center inline-block text-white dark:text-[#141b2c] py-3 px-8 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                style={{
                  background: "linear-gradient(90deg, #8245ec, #4fc3f7)",
                  boxShadow: "0 10px 20px -5px rgba(130, 69, 236, 0.5)",
                }}
              >
                RESUME
              </a>

              {/* 2. Hire Me Button (Secondary/Outline) */}
              <a
                href="#contact"
                className="w-full sm:w-auto text-center inline-block py-3 px-8 rounded-full text-lg font-bold border-2 border-[#8245ec] text-[#8245ec] dark:text-[#c9a4f7] hover:bg-[#8245ec] hover:text-white dark:hover:text-[#141b2c] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                HIRE ME
              </a>

            </div>

          </div>

          {/* Image Area */}
          <div className="w-full md:w-[40%] lg:w-[35%] flex justify-center items-center">
            
            {/* Mobile/Touch optimized card */}
            <div className="block md:hidden w-full max-w-[280px] sm:max-w-[320px]">
              <TiltOnTouch>
                <CardContainer className="inter-var w-full">
                  <CardBody className="bg-gray-200/50 dark:bg-[#161a25] relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/20 dark:border-white/10 border-black/5 w-full h-auto rounded-3xl p-4 sm:p-6 border">
                    <CardItem translateZ="60" className="w-full">
                      <Image
                        src="/assets/profile_circle.png"
                        alt="Kaushalendra Pratap"
                        width={400}
                        height={400}
                        className="w-full h-full rounded-full object-cover drop-shadow-2xl"
                        priority
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </TiltOnTouch>
            </div>

            {/* Desktop optimized card */}
            <div className="hidden md:block w-full max-w-md">
              <CardContainer className="inter-var w-full">
                <CardBody className="bg-gray-200/50 dark:bg-[#161a25] relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/20 dark:border-white/10 border-black/5 w-full h-auto rounded-3xl p-8 border">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src="/assets/profile_circle.png"
                      alt="Kaushalendra Pratap"
                      width={500}
                      height={500}
                      className="w-full h-full rounded-full object-cover drop-shadow-[0_20px_50px_rgba(130,69,236,0.3)]"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;