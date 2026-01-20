"use client";

import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);

  // Animation hooks for the title
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  // Load keys from environment variables
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const siteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the captcha verification.");
      return;
    }

    const formData = new FormData(e.target);
    formData.append("access_key", accessKey);
    formData.set("h-captcha-response", captchaToken);
    formData.delete("g-recaptcha-response");
    formData.append("subject", "New Submission from Portfolio");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
        e.target.reset(); // Clear form inputs
        setCaptchaToken(null); // Clear local token state
        if (captchaRef.current) {
          captchaRef.current.resetCaptcha(); // Visually reset the captcha widget
        }
        setTimeout(() => setIsSent(false), 5000);
      } else {
        console.error("Error", data);
        alert("Something went wrong: " + data.message);
      }
    } catch (error) {
      console.error("Error", error);
      alert("Error sending message. Please try again later.");
    }
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <section
      id="contact"
      // FIXED: Using standard 'min-h' and standard padding for better mobile/desktop scaling
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

          {isSent ? (
            <div className="flex flex-col items-center justify-center h-64 text-center animate-pulse">
              <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-xl font-bold text-green-700 dark:text-green-400">Message Sent!</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={sendEmail} className="flex flex-col space-y-4">
              
              {/* Inputs: Added 'text-base' to prevent iOS zoom */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 text-base rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 border-[#9f86f9] placeholder-[#2d2b2b]/70 focus:outline-none focus:border-[#8245ec] transition-colors"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 text-base rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 border-[#9f86f9] placeholder-[#2d2b2b]/70 focus:outline-none focus:border-[#8245ec] transition-colors"
              />

              <input
                type="text"
                name="subject_display"
                placeholder="Subject"
                required
                className="w-full p-3 text-base rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 border-[#9f86f9] placeholder-[#2d2b2b]/70 focus:outline-none focus:border-[#8245ec] transition-colors"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="w-full p-3 text-base rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 border-[#9f86f9] placeholder-[#2d2b2b]/70 focus:outline-none focus:border-[#8245ec] transition-colors resize-none"
              ></textarea>

              {/* hCaptcha Component */}
              <div className="flex justify-center my-2 overflow-hidden">
                <HCaptcha
                  sitekey={siteKey}
                  onVerify={onCaptchaChange}
                  ref={captchaRef}
                  theme="dark"
                />
              </div>

              {/* Send Button */}
              {/* FIX: Changed bg-linear-to-r to bg-gradient-to-r */}
              <button
                type="submit"
                disabled={!captchaToken}
                className={`w-full py-3 mt-2 text-white font-bold tracking-wide rounded-full transition-all duration-300 shadow-lg transform active:scale-95
                  ${!captchaToken
                    ? 'bg-gray-400 cursor-not-allowed opacity-50'
                    : 'bg-linear-to-r from-[#8245ec] to-[#4fc3f7] hover:opacity-90 hover:shadow-purple-500/25'
                  }`}
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;