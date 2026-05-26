"use client";

import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  
  const {
    register,
    handleSubmit,
    reset,
    clearErrors, 
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  
  useEffect(() => {
  
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        clearErrors(); 
      }, 5000);

      
      return () => clearTimeout(timer);
    }
  }, [errors, clearErrors]);


  const [honeyPot, setHoneyPot] = useState("");

  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

 
  const onSubmit = async (data) => {
    if (honeyPot) {
      console.log("Bot detected!");
      return;
    }

    const formData = {
      ...data,
      access_key: accessKey,
      subject: "New Submission from Portfolio",
      from_name: "Portfolio Contact Form",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        reset(); 
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full py-12 md:py-20 px-4 text-[#3b2e68] dark:text-[#d6ccff]"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Title Section */}
        <div ref={containerRef} className="mb-12 relative z-10 w-full">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              data-aos="fade-up"
              data-aos-duration="600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center text-neutral-800 dark:text-neutral-200">
                Get In Touch
                <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
              </h2>
              <p className="text-base sm:text-xl font-bold mb-2 text-center text-neutral-800 dark:text-neutral-200">
                Feel free to reach out for software development opportunities, collaborations, or technical discussions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 w-full justify-center items-center lg:items-start max-w-5xl">
          
          {/* Contact Info Cards */}
          <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="700" className="flex flex-col gap-4 w-full max-w-md">
            
            {/* Email Card */}
            <a href="mailto:pkaushalendra08@gmail.com" className="flex items-center gap-4 bg-[#cdb3f4] dark:bg-[#1a1f36] p-4 rounded-xl shadow-md border border-[#626267] hover:border-[#8245ec] hover:scale-105 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="bg-[#b388ff] dark:bg-[#2a304d] p-3 rounded-lg text-white group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-[#3b2e68] dark:text-[#4fc3f7]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#8245ec] dark:text-[#4fc3f7] uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm font-semibold text-[#0e0e0e] dark:text-white">pkaushalendra08@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/in/kaushalendra-pratap-kp08/" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-[#cdb3f4] dark:bg-[#1a1f36] p-4 rounded-xl shadow-md border border-[#626267] hover:border-[#8245ec] hover:scale-105 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="bg-[#b388ff] dark:bg-[#2a304d] p-3 rounded-lg text-white group-hover:scale-110 transition-transform">
                <FaLinkedin size={24} className="text-[#3b2e68] dark:text-[#4fc3f7]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#8245ec] dark:text-[#4fc3f7] uppercase tracking-wider mb-1">LinkedIn</p>
                <p className="text-sm font-semibold text-[#0e0e0e] dark:text-white">kaushalendra-pratap-kp08</p>
              </div>
            </a>

            {/* GitHub Card */}
            <a href="https://github.com/pkaushalendra08" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-[#cdb3f4] dark:bg-[#1a1f36] p-4 rounded-xl shadow-md border border-[#626267] hover:border-[#8245ec] hover:scale-105 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="bg-[#b388ff] dark:bg-[#2a304d] p-3 rounded-lg text-white group-hover:scale-110 transition-transform">
                <FaGithub size={24} className="text-[#3b2e68] dark:text-[#ebf2f6]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#8245ec] dark:text-[#4fc3f7] uppercase tracking-wider mb-1">GitHub</p>
                <p className="text-sm font-semibold text-[#0e0e0e] dark:text-white">pkaushalendra08</p>
              </div>
            </a>

          </div>
          {/* Form Container */}
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="700" className="w-full flex-1 max-w-lg bg-[#cdb3f4] dark:bg-[#222741] p-5 md:p-6 rounded-2xl shadow-xl border-2 border-[#626267]">
            <h3 className="text-lg font-bold text-[#0e0e0e] dark:text-[#ffffff] text-center mb-4">
              Connect with ME!
            </h3>

          {isSubmitSuccessful ? (
            <div className="flex flex-col items-center justify-center h-48 text-center animate-pulse">
              <svg className="w-12 h-12 text-green-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-lg font-bold text-green-700 dark:text-green-400">Message Sent!</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2">
              
              {/* Name Input */}
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your Name"
                  className={`w-full p-2.5 text-sm rounded-md bg-white/10 dark:bg-black/20 backdrop-blur-md border-2 border-white/40 dark:border-white/20 text-[#0e0e0e] dark:text-white placeholder-[#0e0e0e]/60 dark:placeholder-white/50 focus:outline-none focus:bg-white/20 dark:focus:bg-black/30 focus:border-[#8245ec] dark:focus:border-[#4fc3f7] transition-all shadow-inner
                    ${errors.name ? "border-red-500" : ""}`}
                />
                {/* Error Animation Container */}
                <div className="h-4 mt-0.5"> 
                  {errors.name && (
                    <span className="text-red-500 text-xs font-bold ml-1 animate-pulse">
                      {errors.name.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div>
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email"
                  placeholder="Your Email"
                  className={`w-full p-2.5 text-sm rounded-md bg-white/10 dark:bg-black/20 backdrop-blur-md border-2 border-white/40 dark:border-white/20 text-[#0e0e0e] dark:text-white placeholder-[#0e0e0e]/60 dark:placeholder-white/50 focus:outline-none focus:bg-white/20 dark:focus:bg-black/30 focus:border-[#8245ec] dark:focus:border-[#4fc3f7] transition-all shadow-inner
                    ${errors.email ? "border-red-500" : ""}`}
                />
                <div className="h-4 mt-0.5">
                  {errors.email && (
                    <span className="text-red-500 text-xs font-bold ml-1 animate-pulse">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  placeholder="Subject"
                  className={`w-full p-2.5 text-sm rounded-md bg-white/10 dark:bg-black/20 backdrop-blur-md border-2 border-white/40 dark:border-white/20 text-[#0e0e0e] dark:text-white placeholder-[#0e0e0e]/60 dark:placeholder-white/50 focus:outline-none focus:bg-white/20 dark:focus:bg-black/30 focus:border-[#8245ec] dark:focus:border-[#4fc3f7] transition-all shadow-inner
                    ${errors.subject ? "border-red-500" : ""}`}
                />
                <div className="h-4 mt-0.5">
                  {errors.subject && (
                    <span className="text-red-500 text-xs font-bold ml-1 animate-pulse">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Message Input */}
              <div>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Message"
                  rows="3"
                  className={`w-full p-2.5 text-sm rounded-md bg-white/10 dark:bg-black/20 backdrop-blur-md border-2 border-white/40 dark:border-white/20 text-[#0e0e0e] dark:text-white placeholder-[#0e0e0e]/60 dark:placeholder-white/50 focus:outline-none focus:bg-white/20 dark:focus:bg-black/30 focus:border-[#8245ec] dark:focus:border-[#4fc3f7] transition-all shadow-inner resize-none
                    ${errors.message ? "border-red-500" : ""}`}
                ></textarea>
                <div className="h-4 mt-0.5">
                  {errors.message && (
                    <span className="text-red-500 text-xs font-bold ml-1 animate-pulse">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>

              {/* --- HONEYPOT FIELD (INVISIBLE) --- */}
              <input 
                type="text" 
                value={honeyPot} 
                onChange={(e) => setHoneyPot(e.target.value)}
                className="opacity-0 absolute -z-10 w-0 h-0 pointer-events-none"
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Send Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto sm:min-w-[200px] px-8 py-2.5 mt-2 self-center text-white font-bold tracking-wide rounded-full transition-all duration-300 shadow-lg transform active:scale-95
                  ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed opacity-50'
                    : 'bg-linear-to-r from-[#8245ec] to-[#4fc3f7] hover:opacity-90 hover:shadow-purple-500/25'
                  }`}
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;