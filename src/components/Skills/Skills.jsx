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
  ],
  Backend: [
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "Mongoose" },
  ],
//   DevOps: [
//     { name: "GitHub" },
//     { name: "Docker" },
//     { name: "Kubernetes" },
//     { name: "CI/CD" },
//   ],
  "Programming Language":[
    {name: "C"},
    {name: "C++"},
    {name: "Python"},
    {name: "Java"},
  ] ,
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
    <section id="skills" className="py-20 px-[7vw] bg-[#224b89] text-white ">
      

      
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">My <span className="text-primary">Skills</span></h2>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`py-2 px-4 rounded-full text-sm sm:text-base font-semibold transition duration-300 ${
              activeCategory === category
                ? "bg-[#8245ec] text-white"
                : "bg-[#1a142f] text-gray-300 hover:bg-[#050414]"
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
            className="flex flex-col items-center justify-center bg-[#1a142f] rounded-xl p-4 w-full max-w-[120px] hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-[0_0_20px_#8245ec50]"
          >
            <div className="text-3xl mb-2">{SkillIcons[skill.name] || "❓"}</div>
            <p className="text-sm sm:text-base text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
