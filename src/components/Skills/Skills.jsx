import { useState } from "react";
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

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillsToShow =
    activeCategory === "All" ? allSkills : skillData[activeCategory];

  return (
    <section
      id="skills"
      className="py-20 px-[7vw] bg-[#dab7f1] dark:bg-[#141b2c] text-[#2d1950] dark:text-[#e9d7fe]"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        <span className="text-[#201f21] dark:text-[#cbb4ff]">My Skills</span>
        <div className="w-32 h-1 bg-[#201f21] dark:bg-[#d1d0d6] mx-auto mt-2 rounded"></div>
      </h2>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`py-2 px-4 rounded-full text-sm sm:text-base font-semibold transition duration-300 ${activeCategory === category
                ? "bg-[#8245ec] text-white"
                : "bg-[#ab94d3] text-[#5b4e91] hover:bg-[#b79aef] dark:bg-[#1a142f] dark:text-gray-300 dark:hover:bg-[#2e2461]"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {skillsToShow.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#28223d] dark:bg-[#222741] rounded-xl p-4 w-full max-w-[120px] hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-[0_0_20px_#8245ec80]"
          >
            <div className="text-3xl mb-2 text-[#ffffff] dark:text-[#a787e0]">
              {SkillIcons[skill.name] || "❓"}
            </div>
            <p className="text-sm sm:text-base text-center text-white dark:text-[#abb0ca]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
