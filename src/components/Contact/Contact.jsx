"use client";

import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";

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
      className="flex flex-col justify-center items-center w-full py-16 md:py-24 px-4 text-[#3b2e68] dark:text-[#d6ccff]"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Title Section */}
        <div ref={containerRef} className="mb-12 relative z-10 w-full">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center text-neutral-800 dark:text-neutral-200">
                My Contact
                <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
              </h2>
              <p className="text-base sm:text-xl font-bold mb-2 text-center text-neutral-800 dark:text-neutral-200">
                I'd love to hear from you — reach out for any opportunities or questions!
              </p>
            </motion.div>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-md bg-[#cdb3f4] dark:bg-[#222741] p-6 md:p-8 rounded-2xl shadow-xl border-2 border-[#626267]">
          <h3 className="text-xl font-bold text-[#0e0e0e] dark:text-[#ffffff] text-center mb-6">
            Connect with ME!
          </h3>

          {isSubmitSuccessful ? (
            <div className="flex flex-col items-center justify-center h-64 text-center animate-pulse">
              <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-xl font-bold text-green-700 dark:text-green-400">Message Sent!</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
              
              {/* Name Input */}
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your Name"
                  className={`w-full p-3 text-base rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 placeholder-[#2d2b2b]/70 focus:outline-none focus:border-[#8245ec] transition-colors
                    ${errors.name ? "border-red-500" : "border-[#9f86f9]"}`}
                />
                {/* Error Animation Container */}
                <div className="h-4 mt-1"> 
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
                  className={`w-full p-3 text-base rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 placeholder-[#2d2b2b]/70 focus:outline-none focus:border-[#8245ec] transition-colors
                    ${errors.email ? "border-red-500" : "border-[#9f86f9]"}`}
                />
                <div className="h-4 mt-1">
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
                  className={`w-full p-3 text-base rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 placeholder-[#2d2b2b]/70 focus:outline-none focus:border-[#8245ec] transition-colors
                    ${errors.subject ? "border-red-500" : "border-[#9f86f9]"}`}
                />
                <div className="h-4 mt-1">
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
                  rows="4"
                  className={`w-full p-3 text-base rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 placeholder-[#2d2b2b]/70 focus:outline-none focus:border-[#8245ec] transition-colors resize-none
                    ${errors.message ? "border-red-500" : "border-[#9f86f9]"}`}
                ></textarea>
                <div className="h-4 mt-1">
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
                className={`w-full py-3 mt-2 text-white font-bold tracking-wide rounded-full transition-all duration-300 shadow-lg transform active:scale-95
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
    </section>
  );
};

export default Contact;