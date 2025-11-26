"use client";

import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // Your email sending logic here
  };

  const handleFormSubmit = (FormData) => {
    const formInputData = Object.fromEntries(FormData.entries());
    console.log(formInputData);
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center py-10 md:py-25 px-[12vw] md:px-[7vw] lg:px-[20vw] items-center text-[#3b2e68] dark:text-[#d6ccff]"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center text-neutral-800 dark:text-neutral-200">
          My Contact
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </h2>

        <p className="text-base sm:text-xl font-bold mb-2 text-center text-neutral-800 dark:text-neutral-200">
          I'd love to hear from you — reach out for any opportunities or questions!
        </p>
      </div>

      {/* Form */}
      <div className="mt-3 w-full max-w-md bg-[#cdb3f4] dark:bg-[#222741] p-6 rounded-lg shadow-lg border-2 border-[#626267]">
        <h3 className="text-xl font-semibold text-[#0e0e0e] dark:text-[#ffffff] text-center">
          Connect with ME!
        </h3>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="mt-4 flex flex-col space-y-4 "
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 border-[#9f86f9] placeholder-[#2d2b2b] focus:outline-none focus:border-[#8245ec]"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 border-[#9f86f9] placeholder-[#2d2b2b] focus:outline-none focus:border-[#8245ec]"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 border-[#9f86f9] placeholder-[#2d2b2b] focus:outline-none focus:border-[#8245ec]"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 border-[#9f86f9] placeholder-[#2d2b2b] focus:outline-none focus:border-[#8245ec]"
          ></textarea>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-[#8245ec] to-[#4fc3f7] py-3 text-white font-semibold rounded-full hover:opacity-90 transition duration-300"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
