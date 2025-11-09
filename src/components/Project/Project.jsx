import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { BsBoxArrowUpRight } from "react-icons/bs";
import projectData from "./ProjectData";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section
      id="project"
      className="py-20 px-[7vw] bg-[#dab7f1] dark:bg-[#141b2c] text-[#3b2e68] dark:text-[#d6ccff]"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-[#201f21] dark:text-[#cbb4ff]">
        My Projects
        <div className="w-32 h-1 bg-[#201f21] dark:bg-[#d1d0d6] mx-auto mt-2 rounded"></div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#cdb3f4] dark:bg-[#222741] p-6 rounded-xl border-2 shadow-md hover:shadow-[0_0_20px_#8245ec80] transition duration-300 flex flex-col hover:scale-105"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-5 text-center text-[#3b2e68] dark:text-white">
              {project.title}
            </h3>

            {/* Image */}
            <img
              src={project.snapshot}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4 border-4"
            />

            {/* Description */}
            <p className="text-[#131314] dark:text-[#b5b3d5] text-sm mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.map((tag, idx) => (
                  <span
                    key={`${project.title}-${tag}-${idx}`}
                    className="px-2 py-1 text-xs font-medium rounded-full border-0 bg-[#8245ec] text-white hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub & Live Buttons */}
            <div className="flex items-center gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e1d20] dark:text-[#d1d0d6] hover:text-purple-600 hover:shadow-[0_0_20px_#8245ec80]"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#19181b] dark:text-[#d1d0d6] hover:text-purple-600 hover:shadow-[0_0_20px_#8245ec80]"
                aria-label="Live Demo"
              >
                <BsBoxArrowUpRight size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {!showAll && projectData.length > 3 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#8245ec] text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
