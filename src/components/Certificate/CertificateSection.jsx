"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";
import certificates from "./CertificateData";

const CertificateSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // --- NAVIGATION LOGIC ---
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 === certificates.length ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  }, []);

  // --- AUTO PLAY ---
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Animation Variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const currentCert = certificates[currentIndex];

  return (
    <section id="certificates" className="py-20 px-4 md:px-8 bg-transparent w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
            My Certifications
          </h2>
          <div className="w-24 h-1.5 bg-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-neutral-600 dark:text-neutral-400">
            Verified credentials and continuous professional growth.
          </p>
        </div>

        {/* --- MAIN SLIDER CONTAINER --- */}
        <div
          className="relative w-full max-w-5xl mx-auto min-h-[520px] md:min-h-[450px] flex flex-col"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >

          {/* Desktop Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20 hidden md:block">
            <button onClick={prevSlide} className="p-4 rounded-full bg-white dark:bg-neutral-800 shadow-xl hover:scale-110 transition-transform text-neutral-600 dark:text-white border border-neutral-200 dark:border-white/10 group">
              <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20 hidden md:block">
            <button onClick={nextSlide} className="p-4 rounded-full bg-white dark:bg-neutral-800 shadow-xl hover:scale-110 transition-transform text-neutral-600 dark:text-white border border-neutral-200 dark:border-white/10 group">
              <FaChevronRight className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* THE CARD */}
          <div className="relative w-full flex-1 rounded-3xl bg-white dark:bg-[#0f0f0f] border border-neutral-200 dark:border-white/10 shadow-2xl overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0 w-full h-full flex flex-col md:flex-row"
              >


                {/* --- LEFT SIDE: DETAILS --- */}
                <div className="w-full md:w-[40%] flex-1 p-6 md:p-10 flex flex-col order-2 md:order-1 relative bg-white dark:bg-[#0f0f0f] md:border-r border-neutral-200 dark:border-white/10">

                  {/* Background Decoration */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 rounded-br-full z-0 pointer-events-none" />

                  {/* FIX: Added 'h-full flex flex-col' here to make layout rigid */}
                  <div className="relative z-10 flex flex-col h-full">

                    {/* --- TOP SECTION (Fixed at Top) --- */}
                    <div>
                      {/* Issued By */}
                      <div className="mb-4">
                        <span className="block text-purple-600 dark:text-purple-400 font-black tracking-widest uppercase text-[10px] mb-1.5 ml-0.5">
                          Issued By
                        </span>
                        <div className="flex items-center gap-2 text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-200">
                          <CheckCircle2 size={20} className="text-purple-500 shrink-0" />
                          {currentCert.issuer}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-white mb-3 leading-tight h-18 md:h-auto line-clamp-2 md:line-clamp-none">
                        {currentCert.name}
                      </h3>

                      {/* Date */}
                      <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-6">
                        <FaCalendarAlt className="text-neutral-400" />
                        <span>Issued on {currentCert.date}</span>
                      </div>

                      {/* Description */}
                      <p className="hidden md:block text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed border-l-2 border-purple-100 dark:border-white/10 pl-4 line-clamp-3">
                        {currentCert.description || "Verified certification demonstrating technical proficiency."}
                      </p>
                    </div>

                    {/* --- BOTTOM SECTION (Fixed at Bottom) --- */}
                    {/* 'mt-auto' pushes this div to the very bottom */}
                    <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4">
                      <a
                        href={currentCert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl font-bold text-sm hover:opacity-80 transition-opacity shadow-lg"
                      >
                        View Credential <FaExternalLinkAlt size={12} />
                      </a>
                    </div>

                  </div>
                </div>
                {/* --- RIGHT SIDE: IMAGE --- */}

                <div className="w-full md:w-[60%] h-[280px] md:h-auto bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden order-1 md:order-2 group">
                  <img
                    src={currentCert.image}
                    alt={currentCert.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 opacity-60 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)"
                    }}
                  />

                  {/* Badge Overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg z-10">
                    <FaAward className="text-purple-600 text-xl" />
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {certificates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-purple-500" : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"}`}
              />
            ))}
          </div>

          {/* Mobile Only: Navigation Buttons Bottom */}
          <div className="flex justify-between md:hidden mt-6 px-1">
            <button onClick={prevSlide} className="flex items-center gap-2 text-sm font-bold text-neutral-500 active:text-purple-500">
              <FaChevronLeft /> Prev
            </button>
            <button onClick={nextSlide} className="flex items-center gap-2 text-sm font-bold text-neutral-500 active:text-purple-500">
              Next <FaChevronRight />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CertificateSection;