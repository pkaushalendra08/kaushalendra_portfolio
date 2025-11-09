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
      className="flex flex-col justify-center py-16 px-[12vw] md:px-[7vw] lg:px-[20vw] items-center bg-[#dab7f1] dark:bg-[#141b2c] text-[#3b2e68] dark:text-[#d6ccff]"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#201f21] dark:text-[#cbb4ff]">Contact</h2>
        <div className="w-32 h-1 bg-[#201f21] dark:bg-[#d1d0d6] mx-auto mt-2 rounded"></div>
        <p className="text-[#3f3e45] dark:text-[#b6aaf7] mt-4 text-lg font-semibold">
          I'd love to hear from you — reach out for any opportunities or questions!
        </p>
      </div>

      {/* Form */}
      <div className="mt-3 w-full max-w-md bg-[#cdb3f4] dark:bg-[#222741] p-6 rounded-lg shadow-lg border-2 border-[#626267]">
        <h3 className="text-xl font-semibold text-[#0e0e0e] dark:text-[#8354d6] text-center">
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
            className="w-full p-3 rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 border-[#9f86f9] placeholder-[#a99ff9] focus:outline-none focus:border-[#8245ec]"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 border-[#9f86f9] placeholder-[#a99ff9] focus:outline-none focus:border-[#8245ec]"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 border-[#9f86f9] placeholder-[#a99ff9] focus:outline-none focus:border-[#8245ec]"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-md bg-[#e8e2fd] text-[#3b2e68] border-2 border-[#9f86f9] placeholder-[#a99ff9] focus:outline-none focus:border-[#8245ec]"
          ></textarea>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#8245ec] to-[#4fc3f7] py-3 text-white font-semibold rounded-full hover:opacity-90 transition duration-300"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
