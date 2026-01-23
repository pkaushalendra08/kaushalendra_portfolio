"use client";

import { useRef } from "react";
import { FaCalendarAlt, FaBriefcase, FaFileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

const Experience = () => {

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const experiences = [
    {
      id: "exp-001",
      role: "Generative AI Virtual Internship",
      company: "IBM & NASSCOM",
      duration: "September 2025 - November 2025",
      location: "Virtual Internship",
      description: "A project-based experiential learning program backed by the Ministry of IT. Focused on leveraging Large Language Models (LLMs) and transformer architectures to solve actual business problems.",
      skills: ["Generative AI", "Deep Learning", "IBM Watson", "Prompt Engineering"],
      letterLink: "https://drive.google.com/file/d/1zjDnkIjLUXUjHn7ffG1uP3cZWm7BiwP2/view?usp=sharing"
    },
    {
      id: "exp-002",
      role: "Full Stack Developer Intern",
      company: "YoursCollege",
      duration: "September 2025 - October 2025",
      location: "Remote",
      description: "Contributed to the YoursCollege platform and its admin panel, working across frontend and backend modules. Built responsive UIs with React.js, developed APIs using Laravel, and managed data with MySQL. Strengthened skills in full-stack development, admin dashboard design, and frontend-backend integration within an agile environment.",
      skills: ["React.js", "Tailwind CSS", "REST APIs", "Git", "Laravel"],
      letterLink: "https://drive.google.com/file/d/1UcZXRd20cpJE54XYsTecsL0d8ZM4DEz4/view?usp=drivesdk"
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 md:px-8 text-[#3b2e68] dark:text-[#d6ccff] overflow-hidden">

      {/* Title Section */}
      <div ref={containerRef} className="max-w-7xl mx-auto mb-16 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-center text-neutral-800 dark:text-neutral-200">
              My Work Experiences
              <div className="w-24 h-1.5 bg-purple-500 mx-auto mt-4 rounded-full"></div>
            </h2>
            <p className="text-base sm:text-xl font-medium mb-2 text-center text-neutral-600 dark:text-neutral-400">
              My professional journey and key contributions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">

        {/* Main Vertical Line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-[#8245ec] opacity-30 transform -translate-x-1/2" />

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex gap-4 sm:gap-8 group">

              {/* Timeline Dot Column */}
              <div className="relative shrink-0 flex flex-col items-center">
                <div className="z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#8245ec] flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300 border-4 border-white dark:border-[#0f0f0f]">
                  <FaBriefcase className="text-white text-base sm:text-xl" />
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 min-w-0 bg-[#cdb3f4]/20 dark:bg-[#222741]/80 backdrop-blur-sm p-5 sm:p-8 rounded-2xl shadow-sm border border-purple-100 dark:border-white/5 hover:shadow-[0_0_25px_#8245ec40] hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.01]">

                {/* Header: Role & Company */}
                <div className="mb-4">
                  <h3 className="text-lg sm:text-2xl font-bold mb-1 text-neutral-900 dark:text-white leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-[#6c5bbd] dark:text-[#a78bfa] font-bold text-sm sm:text-lg">
                    @{exp.company}
                  </p>
                </div>

                {/* Meta Info: Duration & Location */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#8245ec] shrink-0" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaLocationDot className="text-[#8245ec] shrink-0" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-neutral-700 dark:text-[#d1d5db] text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.skills.map((skill) => (
                    <span
                      key={`${exp.id}-${skill}`}
                      className="px-3 py-1 text-xs font-semibold rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Experience Letter Link */}
                {exp.letterLink && (
                  <a
                    href={exp.letterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl bg-[#8245ec] text-white hover:bg-purple-700 active:scale-95 transition-all duration-200 shadow-lg shadow-purple-500/25"
                  >
                    <FaFileAlt className="text-lg" />
                    View Experience Letter
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;