"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

// --- DATA ---
const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    institution: "ABES Institute of Technology",
    duration: "2022 — 2026", 
    location: "Ghaziabad, India",
    details: "Current Semester: 8th. Specializing in Full Stack Development(MERN, NextJS) & System Security.",
    tags: [""],
    isCurrent: true, 
  },
  {
    id: 2,
    degree: "12th Grade (PCM)",
    institution: "Central Board of Secondary Education",
    duration: "2020 — 2021",
    location: "Varanasi, India",
    details: "Focused on Physics, Chemistry, and Mathematics. Developed strong analytical foundations.",
    tags: ["Distinction", "Science Stream"],
    isCurrent: false,
  },
  {
    id: 3,
    degree: "10th Grade",
    institution: "Central Board of Secondary Education",
    duration: "2018 — 2019",
    location: "Varanasi, India",
    details: "High School education in Mathematics, Science, English, Hindi, Social Science and Computer Applications.",
    tags: ["Distinction"],
    isCurrent: false,
  },
];

// --- CARD COMPONENT ---
const EducationCard = ({ data, index }) => {
  const isEven = index % 2 === 0;
  
  // Dynamic styles for B.Tech vs others
  const yearSize = data.isCurrent ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl";
  const yearColor = data.isCurrent 
    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400" 
    : "text-neutral-300 dark:text-neutral-700";

  return (
    <div className={`relative flex items-center justify-between md:justify-normal w-full mb-12 md:mb-0 ${isEven ? "md:flex-row-reverse" : ""}`}>
      
      {/* 1. CONTENT CARD */}
      <div className="w-full md:w-[45%] bg-white dark:bg-[#0f0f0f] p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 relative z-10 ml-12 md:ml-0 group">
        
        {/* Mobile Connector Line */}
        <div className="absolute top-10 -left-12 w-8 h-0.5 bg-purple-200 dark:bg-purple-900 md:hidden" />

        {/* --- THE EMPHASIZED YEAR --- */}
        <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col">
                <span className={`font-black tracking-tighter ${yearSize} ${yearColor} mb-1`}>
                    {data.duration}
                </span>
                {data.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-green-100 dark:bg-green-900/30 text-green-600 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/>
                        Current
                    </span>
                )}
            </div>
            
            {/* Icon */}
            <div className={`p-3 rounded-xl ${data.isCurrent ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-600' : 'bg-neutral-100 dark:bg-white/5 text-neutral-400'}`}>
                <FaGraduationCap size={20} />
            </div>
        </div>

        {/* Degree Info */}
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
          {data.degree}
        </h3>
        <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-6">
          {data.institution}
        </p>

        {/* Details */}
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 border-l-2 border-purple-200 dark:border-purple-800/50 pl-4">
          {data.details}
        </p>

        {/* Tags Footer */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-100 dark:border-white/5">
          <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 mr-auto">
             <FaMapMarkerAlt className="text-purple-500" /> 
             {data.location}
          </div>
          {data.tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-bold px-2.5 py-1 bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-300 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 2. TIMELINE NODE (Center Dot) */}
      <div className={`absolute left-[9px] md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 z-20 flex items-center justify-center bg-white dark:bg-[#0f0f0f] ${data.isCurrent ? 'border-purple-500 shadow-[0_0_0_4px_rgba(168,85,247,0.2)]' : 'border-neutral-300 dark:border-neutral-700'}`}>
        <div className={`w-3 h-3 rounded-full ${data.isCurrent ? 'bg-purple-600' : 'bg-neutral-400'}`} />
      </div>

      {/* 3. SPACER (Desktop Balance) */}
      <div className="hidden md:block w-[45%]" />
      
    </div>
  );
};

// --- MAIN COMPONENT ---
const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="education" className="py-24 px-4 md:px-8 bg-transparent w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
            My Education Journey
          </h2>
          <div className="w-24 h-1.5 bg-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My academic path, highlighting my current pursuit of engineering excellence.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div ref={containerRef} className="relative flex flex-col gap-8 md:gap-16">
          
          {/* Background Line */}
          <div className="absolute left-[9px] md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-white/10 transform -translate-x-1/2" />

          {/* Animated Line */}
          <motion.div 
            style={{ scaleY: scaleY, originY: 0 }}
            className="absolute left-[9px] md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-500 to-blue-500 transform -translate-x-1/2 z-10"
          />

          {/* Cards */}
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <EducationCard data={edu} index={index} />
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Education;