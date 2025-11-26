"use client";

import { useEffect, useState } from "react";
import {
  FaBars,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareGithub,
  FaRegCircleXmark,
  FaMoon,
} from "react-icons/fa6";
import { ModeToggle } from "../ModeToggle/ModeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for background blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect visible section and set activeItem
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveItem(visibleEntry.target.id);
        }
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleMenuItemClick = (sectionID) => {
    setActiveItem(sectionID);
    setIsOpen(false);

    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project" },
    { id: "education", label: "Education" },
    { id: "certificate", label: "Certificate" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[4vw] md:px-[3vw] lg:px-[4vw] ${isScrolled
        ? "bg-[#3c3c3f] bg-opacity-50 backdrop-blur-md shadow-md" //scroll hone k baad
        : "dark:bg-[#201f1f]" //scroll hone k phle
        }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Name */}
        <div className="text-lg font-semibold cursor-pointer mr-4 whitespace-nowrap">
          <span className="text-white text-xl md:text-2xl">&lt;</span>
          <span className="text-white text-xl md:text-2xl">Kaushalendra Pratap</span>
          <span className="text-white text-xl md:text-2xl">/</span>
          <span className="text-white text-xl md:text-2xl">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-9 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${activeItem === item.id ? "text-[#8245ec] text-2xl" : ""
                }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Socials (Desktop) */}
        <div className="hidden md:flex space-x-4 m-1.5">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/pkaushalendra08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaSquareGithub size={30} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>


          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.linkedin.com/in/kaushalendra-pratap-kp08/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaLinkedin size={30} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>


          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://x.com/pkaushalendra08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaSquareXTwitter size={30} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>X(Twitter)</p>
            </TooltipContent>
          </Tooltip>

          <div className="ml-5">
            {/* <ModeToggle /> */}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FaRegCircleXmark
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FaBars
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${activeItem === item.id ? "text-[#8245ec]" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            {/* ---Socials --- */}
            <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-700/50 w-full mt-2">
              <a
                href="https://github.com/pkaushalendra08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
                title="GitHub"
              >
                <FaSquareGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/kaushalendra-pratap-kp08/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
                title="LinkedIn"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://x.com/pkaushalendra08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
                title="X (Twitter)"
              >
                <FaSquareXTwitter size={25} />
              </a>


              {/* <ModeToggle /> */}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;