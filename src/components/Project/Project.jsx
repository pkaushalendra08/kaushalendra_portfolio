"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import projectData from "./ProjectData";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section id="project" className="py-25 px-4 md:px-8">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center text-neutral-800 dark:text-neutral-200">
        My Projects
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
      </h2>

      {/* The Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto h-full">
        {visibleProjects.map((project) => (
          <CardContainer key={project.id || project.title} className="inter-var">
            <CardBody
              className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
                          dark:hover:shadow-emerald-500/10
                         dark:bg-black dark:border-white/20 border-black/10
                          w-[90vw] sm:w-[24rem] h-160 rounded-xl p-6 border flex flex-col
                          transition-transform duration-200
                          hover:-translate-y-1 hover:shadow-xl
                          active:scale-95 active:translate-y-0"
            >

              <CardItem
                translateZ="60"
                className="w-full h-16 flex items-center justify-center text-xl font-bold text-neutral-600 dark:text-white text-center leading-tight mb-2"
              >
                {project.title}
              </CardItem>
              <CardItem translateZ="100" className="w-full">
                <div className="relative w-full h-48 rounded-xl group-hover/card:shadow-xl overflow-hidden border border-transparent dark:border-white/10">
                  <Image
                    src={project.snapshot}
                    fill
                    className="object-cover"
                    alt={project.title}
                  />
                </div>
              </CardItem>

              <CardItem
                as="p"
                translateZ="70"
                className="text-[#131314] dark:text-[#b5b3d5] text-sm mb-4 mt-4"
              >
                {project.description}
              </CardItem>

              <CardItem translateZ="50" className="flex flex-wrap gap-2 mb-4">
                {project.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-[10px] font-semibold text-purple-600 bg-purple-100 rounded-md dark:bg-purple-900/20 dark:text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </CardItem>

              <div className="flex justify-between items-center mt-auto w-full pt-4">
                <CardItem
                  translateZ={30}
                  as={Link}
                  href={project.live}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
                >
                  <div className="flex items-center gap-2">
                    <BsBoxArrowUpRight /> Live Demo
                  </div>
                </CardItem>

                <CardItem
                  translateZ={30}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <Link href={project.github} target="_blank" className="flex items-center gap-2">
                    <FaGithub /> GitHub
                  </Link>
                </CardItem>
              </div>

            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* View More Button  */}
      {!showAll && projectData.length > 3 && (
        <div className="mt-8 text-center">
          <Button
            onClick={() => setShowAll(true)}
            className="px-8 py-6 rounded-full text-md font-semibold bg-linear-to-r from-purple-500 to-blue-500 hover:scale-105 transition-transform"
          >
            View All Projects
          </Button>
        </div>
      )}
    </section>
  );
};

export default Projects;