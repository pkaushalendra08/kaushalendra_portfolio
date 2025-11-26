"use client";

import { FaLaravel, FaHtml5, FaCss3Alt, FaReact, FaNode, FaGithub , FaDocker, FaBootstrap, FaFigma, FaGitAlt,FaJava  } from "react-icons/fa6";
import { SiNextdotjs, SiJavascript, SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiMongoose, SiJfrogpipelines, SiPostman, SiKubernetes, SiC, SiCplusplus, SiPython, SiSocketdotio } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const SkillIcons = {
  //Frontend
  HTML: <FaHtml5 className="text-[#E34F26]" />,
  CSS: <FaCss3Alt className="text-[#663399]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  React: <FaReact className="text-[#61DAFB]"/>,
  Redux: <SiRedux className="text-[#764ABC]"/>,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]"/>,
  "BootStrap CSS":<FaBootstrap className="text-[#7952B3]"/> ,
  NextJS: <SiNextdotjs className="text-[#ffffff]"/>,
  
  //Backend
  "Node.js": <FaNode className="text-[#5FA04E]"/>,
  "Express.js": <SiExpress className="text-white"/>,
  MongoDB: <SiMongodb className="text-[#47A248]"/>,
  Mongoose: <SiMongoose className="text-[#880000]"/>,
  Laravel: <FaLaravel className="text-white"/>,
  "Socket.io": <SiSocketdotio className="text-white"/>,

  //Devops
  GitHub: <FaGithub className="text-white"/>,
  Docker: <FaDocker className="text-[#2496ED]"/>,
  Kubernetes:< SiKubernetes className="text-[#326CE5]"/>,
  "CI/CD" : <SiJfrogpipelines className="text-[#40BE46]"/>,

  //Tools
  "VS Code": <VscVscode className="text-[]"/>,
  Postman: <SiPostman className="text-[#FF6C37]"/>,
  Figma:<FaFigma className="text-[#F24E1E]"/>,
  Git:<FaGitAlt className="text-[#F05032]"/>,

  //Programming language
  C:<SiC className="text-[#A8B9CC]"/>,
  "C++": < SiCplusplus className="text-[#00599C]"/>,
  Python:<SiPython className="text-[#3776AB]"/>,
  Java:<FaJava className="text-[#007396]" />,

};
