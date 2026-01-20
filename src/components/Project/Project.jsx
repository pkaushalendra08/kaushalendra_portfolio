"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import projectData from "./ProjectData";
import ProjectModal from "@/components/Project/ProjectModal";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);

  // Animation hooks
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const scrollToSectionTop = useCallback(() => {
    if (sectionRef.current) {
      const y = sectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  const handleToggleProjects = useCallback((e) => {
    e.preventDefault();
    if (showAll) {
      setShowAll(false);
      requestAnimationFrame(() => scrollToSectionTop());
    } else {
      setShowAll(true);
    }
  }, [showAll, scrollToSectionTop]);

  return (
    <section 
        id="project" 
        ref={sectionRef} 
        className="py-20 px-4 sm:px-6 md:px-8 bg-transparent overflow-hidden"
    >

      {/* Title Section */}
      {/* FIXED: Reduced mb-12 to mb-8 to fix large gap */}
      <div ref={containerRef} className="max-w-7xl mx-auto mb-8 md:mb-12 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-center text-neutral-800 dark:text-neutral-200">
              My Projects
              <div className="w-24 h-1.5 bg-purple-500 mx-auto mt-4 rounded-full"></div>
            </h2>
            <p className="text-base sm:text-xl font-medium mb-2 text-center text-neutral-600 dark:text-neutral-400">
              A showcase of my technical projects, applications, and coding experiments.
            </p>
          </motion.div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 max-w-7xl mx-auto">
        {visibleProjects.map((project) => (
          <CardContainer key={project.id} className="inter-var w-full h-full" containerClassName="py-1 md:py-2">
            <CardBody className="bg-gray-50 dark:bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/20 dark:border-white/20 border-black/10 w-full h-auto rounded-xl p-6 border flex flex-col">
              
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-700 dark:text-white w-full text-center">
                {project.title}
              </CardItem>

              {/* Description */}
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-3 mb-3 dark:text-neutral-300 line-clamp-3 text-center mx-auto">
                {project.description}
              </CardItem>

              {/* Image  */}
              <CardItem translateZ="100" className="w-full mt-6 mb-4 flex-1">
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative w-full h-48 rounded-xl group-hover/card:shadow-xl overflow-hidden cursor-pointer"
                >
                  <Image
                    src={project.snapshot}
                    fill
                    className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 text-sm">
                      View Details
                    </span>
                  </div>
                </div>
              </CardItem>

              {/* Actions */}
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition active:scale-95"
                >
                  View Details →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2 active:scale-95 transition-transform"
                >
                  <FaGithub size={14} /> GitHub
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* View More Button */}
      {projectData.length > 3 && (
        <div className="mt-12 text-center">
          <Button
            onClick={handleToggleProjects}
            className="px-8 py-6 rounded-full text-md font-semibold bg-linear-to-r from-purple-500 to-blue-500 hover:scale-105 transition-transform shadow-lg shadow-purple-500/25"
          >
            {showAll ? "View Less" : "View All Projects"}
          </Button>
        </div>
      )}

      {/* Modal - Render conditionally */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;