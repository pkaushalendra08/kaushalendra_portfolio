"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SkillIcons } from "../Skills/SkillIcons";

const skillData = {
  Frontend: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Redux" },
    { name: "Tailwind CSS" },
    { name: "BootStrap CSS" },
    { name: "NextJS" },
  ],
  Backend: [
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "Mongoose" },
    { name: "Laravel" },
    { name: "Socket.io" },
  ],
  "Programming Language": [
    { name: "C" },
    { name: "C++" },
    { name: "Python" },
    { name: "Java" },
  ],
  Tools: [
    { name: "VS Code" },
    { name: "Postman" },
    { name: "Figma" },
    { name: "Git" },
  ],
};

const allSkills = Object.values(skillData).flat();
const categories = ["All", ...Object.keys(skillData)];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);
  
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const skillsToShow =
    activeCategory === "All" ? allSkills : skillData[activeCategory];

  
  useEffect(() => {
    setIsExpanded(false);
  }, [activeCategory]);

  
  const MOBILE_LIMIT = 12;

  return (
    <section
      id="skills"
      className="relative py-10 md:py-16 px-4 sm:px-6 md:px-8 text-[#2d1950] dark:text-[#e9d7fe] overflow-hidden"
    >

      {/* Title Section */}
      <div ref={containerRef} className="max-w-7xl mx-auto mb-16 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-center text-neutral-800 dark:text-neutral-200">
              My Skills
              <div className="w-24 h-1.5 bg-purple-500 mx-auto mt-4 rounded-full"></div>
            </h2>
            <p className="text-base sm:text-xl font-medium mb-2 text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              A comprehensive list of technologies and tools I work with to build high-performance applications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2.5 px-5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                activeCategory === category
                  ? "bg-[#8245ec] text-white shadow-lg shadow-purple-500/30"
                  : "bg-[#ab94d3]/20 text-[#5b4e91] hover:bg-[#b79aef]/40 dark:bg-[#1a142f] dark:text-gray-300 dark:hover:bg-[#2e2461] border border-transparent dark:border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 justify-items-center"
        >
          {skillsToShow.map((skill, index) => {
            const isHiddenOnMobile = activeCategory === "All" && !isExpanded && index >= MOBILE_LIMIT;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={`${skill.name}-${index}`}
                className={`${isHiddenOnMobile ? 'hidden md:flex' : 'flex'} flex-col items-center justify-center bg-white dark:bg-[#222741]/80 backdrop-blur-sm rounded-2xl p-6 w-full h-32 sm:h-36 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/20 border border-neutral-100 dark:border-white/5 group`}
              >
                <div className="text-4xl sm:text-5xl mb-3 text-neutral-700 dark:text-[#a787e0] group-hover:scale-110 transition-transform duration-300">
                  {SkillIcons[skill.name] || "⚡"}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-center text-neutral-600 dark:text-[#abb0ca]">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Read More Button */}
        {activeCategory === "All" && skillsToShow.length > MOBILE_LIMIT && (
          <div className="mt-8 text-center md:hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8245ec]/10 dark:bg-[#8245ec]/20 text-[#8245ec] dark:text-[#c4a6fa] font-bold text-sm hover:bg-[#8245ec]/20 transition-all border border-[#8245ec]/20"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  View All Skills <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}