"use client";

import dynamic from "next/dynamic";
import { FlipWords } from "@/components/ui/flip-words";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { TiltOnTouch } from "@/components/ui/tilt-on-touch";


const About = () => {

  const EncryptedTextNoSSR = dynamic(() => import("@/components/ui/encrypted-text").then(mod => mod.EncryptedText), { ssr: false });

  const words = ["WEB DEVELOPER", "FULL STACK DEVELOPER", "SOFTWARE DEVELOPER"];

  return (
    <section
      id="about"
      className="relative w-full pt-4 md:pt-6 lg:pt-20 pb-2 md:pb-3 lg:pb-4"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-4">

        {/* <div className="relative overflow-hidden rounded-2xl"> */}


        {/* Content */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="md:w-[85%] text-center md:text-left mt-8 md:mt-0">
            <h1 className="text-xl text-center sm:text-3xl md:text-3xl font-bold text-[#19161d] dark:text-[#e9d7fe] mb-2 leading-tight">
              Hello, I am
            </h1>

            <h2 className="text-3xl text-center sm:text-5xl md:text-5xl font-bold text-[#5726b9] dark:text-[#c9a4f7] mb-4 leading-tight whitespace-nowrap">
              <EncryptedTextNoSSR
                text="Kaushalendra Pratap"
                encryptedClassName="text-neutral-500"
                revealedClassName="dark:text-white text-black"
                revealDelayMs={50}
              />
            </h2>

            <h3 className="text-xl text-center sm:text-2xl md:text-3xl font-semibold mb-4 text-[#5726b9] dark:text-[#74c0fc] leading-tight">
              I am a{" "}
              <span className="text-[#25162d] dark:text-[#f0f1fa] font-serif pl-1 whitespace-nowrap">
                <FlipWords words={words} duration="2000" />
              </span>
            </h3>

            <p className="text-base md:text-lg sm:text-base text-[#1f2024] dark:text-[#abb0ca] mb-10 mt-8 leading-relaxed max-w-[90%] sm:max-w-full md:max-w-xl lg:max-w-3xl mx-auto md:mx-0 px-4 md:px-0 text-justify">
              I am a dedicated full-stack developer with hands-on experience building robust web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and the modern Next.js framework.
              I specialize in creating responsive, dynamic user interfaces with React and seamless server-side rendered experiences using Next.js. With a solid foundation in full-stack web development, I excel at transforming complex problems into clean, scalable, and maintainable code. 
              I continuously explore emerging technologies, best practices, and innovative solutions to deliver impactful digital products. 
              I am eager to apply my skills in real-world projects and advance my growth as a professional full-stack developer.
            </p>

            <div className="flex justify-center w-full">
              <a
                href="https://drive.google.com/file/d/1MAZWYIrlit_W9qvHf2ZpbncMondLZ6Bb/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#f6f0fa] dark:text-[#141b2c] py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-125 border-2 border-amber-950"
                style={{
                  background: "linear-gradient(90deg, #8245ec, #4fc3f7)",
                  boxShadow: "0 0 2px #8245ec, 0 0 2px #4fc3f7, 0 0 40px #8245ec",
                }}
              >
                RESUME
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:ml-8 md:mt-4">
            {/* Mobile: touch-tilt */}
            <TiltOnTouch>
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-300 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-[#161a25] dark:border-white/20 border-black/10 w-auto sm:w-120 h-auto rounded-xl p-6 border">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/assets/profile_circle.png"
                      alt="Kaushalendra Pratap"
                      width={500}
                      height={500}
                      className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </TiltOnTouch>

            {/* Desktop / tablet: original hover 3D */}
            <div className="hidden sm:block">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-300 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-[#161a25] dark:border-white/20 border-black/10 w-auto sm:w-120 h-auto rounded-xl p-6 border">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/assets/profile_circle.png"
                      alt="Kaushalendra Pratap"
                      width={500}
                      height={500}
                      className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>

        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;
