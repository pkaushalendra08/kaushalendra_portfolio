import { FaLocationArrow, FaCalendarAlt, FaBriefcase, FaFileAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: "exp-001",
      role: "Full Stack Developer Intern",
      company: "YoursCollege",
      duration: "September 2025 - October 2025",
      location: "Remote",
      description: "Contributed to the YoursCollege platform and its admin panel, working across frontend and backend modules. Built responsive UIs with React.js, developed APIs using Laravel, and managed data with MySQL. Strengthened skills in full-stack development, admin dashboard design, and frontend-backend integration within an agile environment.",
      skills: ["React.js", "Tailwind CSS", "REST APIs", "Git", "Laravel"],
      letterLink: "https://drive.google.com/file/d/1UcZXRd20cpJE54XYsTecsL0d8ZM4DEz4/view?usp=drivesdk"
    },
  ];

  return (
    <section id="experience" className="py-20 px-[7vw] bg-[#dab7f1] dark:bg-[#141b2c] text-[#3b2e68] dark:text-[#d6ccff]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#201f21] dark:text-[#cbb4ff]">
          Work Experience
          <div className="w-32 h-1 bg-[#201f21] dark:bg-[#d1d0d6] mx-auto mt-2 rounded"></div>
          </h2>
        <p className="text-[#050505] dark:text-[#b6aaf7] text-sm sm:text-base max-w-2xl mx-auto">
          My professional journey and key contributions
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#8245ec] opacity-30 hidden sm:block" />

        {/* Experience Items */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex gap-6 sm:gap-8">
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#8245ec] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <FaBriefcase className="text-white text-xl" />
                </div>
                {/* Connecting Line (only if not last item) */}
                {exp.id !== experiences[experiences.length - 1].id && (
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-[#8245ec] opacity-30 hidden sm:block" />
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-[#cdb3f4] dark:bg-[#222741] p-6 rounded-xl shadow-md border hover:shadow-[0_0_25px_#8245ec80] transition-all duration-300 hover:scale-[1.02]">
                {/* Header: Role & Company */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 text-[#000000] dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-[#3e25c0] dark:text-[#d1d0d6] font-semibold text-base sm:text-lg">
                    {exp.company}
                  </p>
                </div>

                {/* Meta Info: Duration & Location */}
                <div className="flex flex-wrap gap-4 mb-4 text-[#6c5bbd] dark:text-[#abb0ca] text-sm">
                  <span className="flex items-center gap-2 text-[#2e2b3c] dark:text-[#d1d0d6]">
                    <FaCalendarAlt className="text-[#8245ec] " />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-2 text-[#2e2b3c] dark:text-[#d1d0d6]">
                    <FaLocationArrow className="text-[#8245ec]" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#2e2b3c] dark:text-[#b5b3d5] text-sm sm:text-base leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map((skill) => (
                    <span
                      key={`${exp.id}-${skill}`}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[#8245ec] text-white border border-[#8245ec] hover:bg-transparent hover:text-[#8245ec] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Experience Letter Link */}
                {exp.letterLink && (
                  <a
                    href={exp.letterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[#8245ec] text-white hover:bg-purple-700 transition-all duration-200 hover:shadow-[0_0_15px_#8245ec70]"
                  >
                    <FaFileAlt className="text-lg" />
                    View Experience Letter
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
