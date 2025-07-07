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
    // location: "Varanasi, India",
  },
  {
    degree: "10th ",
    institution: "Central Board of Secondary Education(CBSE)",
    duration: "2019 – 2020",
    // location: ", India",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 px-[7vw] bg-[#224b89] text-white">
      
      <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-center">
        My Education
      </h2>

      <div className="relative max-w-3xl mx-auto border-l border-[#8245ec] pl-6 space-y-10">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <div className="absolute -left-[14px] top-1.5 w-3 h-3 bg-[#8245ec] rounded-full"></div>

            <div className="bg-[#1a142f] p-5 rounded-xl shadow-md hover:shadow-[0_0_20px_#8245ec50] transition duration-300 hover:scale-101">
              <h3 className="text-lg sm:text-xl font-semibold text-[#8245ec] mb-1">
                {edu.degree}
              </h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-gray-400 text-sm">
                {edu.duration} • {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
