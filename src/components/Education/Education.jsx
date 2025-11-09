const educationData = [
  {
    degree: "B.Tech (Computer Science and Engineering)",
    institution: "ABES Institute of Technology",
    duration: "2022 – 2026",
    location: "Ghaziabad, India",
  },
  {
    degree: "12th – PCM ",
    institution: "Central Board of Secondary Education(CBSE)",
    duration: "2020 – 2021",
  },
  {
    degree: "10th ",
    institution: "Central Board of Secondary Education(CBSE)",
    duration: "2019 – 2020",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 px-[7vw] bg-[#dab7f1] dark:bg-[#141b2c] text-[#3b2e68] dark:text-[#d6ccff]">
      <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-center text-[#201f21] dark:text-[#cbb4ff]">
        My Education
        <div className="w-32 h-1 bg-[#201f21] dark:bg-[#d1d0d6] mx-auto mt-2 rounded"></div>
      </h2>
      

      <div className="relative max-w-3xl mx-auto border-l border-[#8245ec] pl-6 space-y-10">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <div className="absolute -left-[14px] top-1.5 w-3 h-3 bg-[#8245ec] rounded-full"></div>

            <div className="bg-[#cdb3f4] dark:bg-[#222741] p-8 border-4 rounded-full shadow-md hover:shadow-[0_0_20px_#8245ec80] transition duration-300 hover:scale-[1.01]">
              <h3 className="text-lg sm:text-xl font-semibold text-[#222124] mb-1 dark:text-[#a787e0]">
                {edu.degree}
              </h3>
              <p className="text-[#1f1d28] dark:text-[#b6aaf7]">{edu.institution}</p>
              <p className="text-[#1f1f20] dark:text-[#abb0ca] text-sm">
                {edu.duration} {edu.location ? `• ${edu.location}` : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
