import { useEffect,useState } from "react";
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Skills from "./components/Skills/Skills"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Project from "./components/Project/Project"
import BlurBlob from "./components/BlurBlob/BlurBlob";
import CertificateSection from "./components/Certificate/CertificateSection";

 const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  // If no theme is saved, check the user's OS preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}; 

const App = () => {

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
 

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come back soon!";
      } else {
        document.title = "Kaushalendra Pratap";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative overflow-hidden bg-[#dab7f1] dark:bg-[#141b2c]'> 
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      <div className='absolute inset-0 z-0 bg-[linear-gradient(to_right,#e5e0ff2e_1px,transparent_1px),linear-gradient(to_bottom,#e5e0ff2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#ffffff_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#2227414d_1px,transparent_1px),linear-gradient(to_bottom,#2227414d_1px,transparent_1px)]'></div>
      <div className="relative pt-20 z-20">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Education />
        <CertificateSection />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
