import { useEffect, useState } from "react";
import {
  FaBars,
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareGithub,
  FaRegCircleXmark,
  FaMoon,
} from "react-icons/fa6";
import { CiLight } from "react-icons/ci";

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
    { id: "contact", label: "Contact" },
  ];

  const ToggleButton = () => (
    <button
      onClick={toggleTheme}
      className="text-gray-300 hover:text-[#8245ec] flex items-center justify-center"
      aria-label="Toggle theme"
      title="Toggle theme" 
    >
      {theme === "light" ? <FaMoon size={25} /> : <CiLight size={25} />}
    </button>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[8vw] lg:px-[10vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" //scroll hone k baad
          : "bg-[#131f2a] dark:bg-[#080808]" //scroll hone k phle
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer mr-4">
          <span className="text-white text-2xl">&lt;</span>
          <span className="text-white text-2xl">Kaushalendra Pratap</span>
          <span className="text-white text-2xl"> /</span>
          <span className="text-white text-2xl">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-9 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeItem === item.id ? "text-[#8245ec] text-2xl" : ""
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
          <a
            href="https://github.com/pkaushalendra08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
            title="GitHub" 
          >
            <FaSquareGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/kaushalendra-pratap-kp08/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
            title="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://x.com/pkaushalendra08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
            title="X (Twitter)"
          >
            <FaSquareXTwitter size={30} />
          </a>
          <div className="ml-5">
            <ToggleButton />
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
                className={`cursor-pointer hover:text-white ${
                  activeItem === item.id ? "text-[#8245ec]" : ""
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

              
              <ToggleButton />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;