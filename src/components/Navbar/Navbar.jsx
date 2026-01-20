"use client";

import { useEffect, useState } from "react";
import {
  FaBars,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaRegCircleXmark,
} from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveItem(visibleEntry.target.id);
        }
      },
      { threshold: 0.5 }
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

  // UPDATED: SocialLink now accepts a specific 'hoverColor' class
  const SocialLink = ({ href, icon: Icon, hoverColorClass }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-gray-300 transition-all duration-300 hover:text-white hover:-translate-y-1 ${hoverColorClass}`}
    >
      <Icon size={18} />
    </a>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-10 ${
        isScrolled
          ? "bg-[#3c3c3f]/50 backdrop-blur-md shadow-md py-3"
          : "dark:bg-[#201f1f] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="shrink-0 text-base sm:text-lg md:text-xl font-semibold cursor-pointer whitespace-nowrap text-white">
          <span>&lt;</span>
          <span>Kaushalendra Pratap</span>
          <span>/</span>
          <span>&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-9 text-gray-300 items-center">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] transition-colors ${
                activeItem === item.id ? "text-[#8245ec] font-bold" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)} className="text-sm xl:text-base">
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Socials (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <SocialLink 
                  href="https://github.com/pkaushalendra08" 
                  icon={FaGithub} 
                  hoverColorClass="hover:bg-[#181717]" // GitHub Black
                />
              </span>
            </TooltipTrigger>
            <TooltipContent><p>Github</p></TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <SocialLink 
                  href="https://www.linkedin.com/in/kaushalendra-pratap-kp08/" 
                  icon={FaLinkedinIn} 
                  hoverColorClass="hover:bg-[#0A66C2]" // LinkedIn Blue
                />
              </span>
            </TooltipTrigger>
            <TooltipContent><p>LinkedIn</p></TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <SocialLink 
                  href="https://x.com/pkaushalendra08" 
                  icon={FaXTwitter} 
                  hoverColorClass="hover:bg-[#000000]" // X Black
                />
              </span>
            </TooltipTrigger>
            <TooltipContent><p>X(Twitter)</p></TooltipContent>
          </Tooltip>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          {isOpen ? (
            <FaRegCircleXmark className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[90%] mt-2 bg-[#050414]/90 backdrop-blur-xl z-50 rounded-2xl shadow-2xl border border-white/10 lg:hidden overflow-hidden">
          <ul className="flex flex-col items-center space-y-5 py-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`text-lg transition-colors ${activeItem === item.id ? "text-[#8245ec] font-bold" : "hover:text-white"}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}

            <div className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-700/50 w-full px-10">
              <SocialLink 
                href="https://github.com/pkaushalendra08" 
                icon={FaGithub} 
                hoverColorClass="hover:bg-[#181717]" 
              />
              <SocialLink 
                href="https://www.linkedin.com/in/kaushalendra-pratap-kp08/" 
                icon={FaLinkedinIn} 
                hoverColorClass="hover:bg-[#0A66C2]" 
              />
              <SocialLink 
                href="https://x.com/pkaushalendra08" 
                icon={FaXTwitter} 
                hoverColorClass="hover:bg-[#000000]" 
              />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;