import { useEffect } from "react";
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


const App = () => {

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
    <div className='bg-[#224b89]'>

      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }}></BlurBlob>
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#cbd5e12e_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#ffffff_70%,transparent_100%)]'></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        {/* <Experience /> */}
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