import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#050414]">
      <div className="container mx-auto text-center space-y-4">

        <p>
          Designed & Developed by{" "}
          <span className="text-[#8245ec] font-semibold">Kaushalendra Pratap</span>
        </p>

        {/* Email with icon */}
        <div className="flex justify-center items-center gap-2 text-sm text-[#8245ec]">
          <MdEmail size={18} />
          <a href="mailto:pkaushalendra08@gmail.com" className="hover:underline">
            pkaushalendra08@gmail.com
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600 mt-2">
          © {new Date().getFullYear()} Kaushalendra Pratap • Software Developer • India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
