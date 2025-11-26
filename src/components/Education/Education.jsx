"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech",
      institution: "ABES Institute of Technology",
      duration: "2022 – 2026",
      location: "Ghaziabad, India",
      details: "Computer Science and Engineering."
    },
    {
      degree: "12th Grade (PCM)",
      institution: "Central Board of Secondary Education (CBSE)",
      duration: "2020 – 2021",
      location: "Varanasi, India",
      details: "Specialized in Physics, Chemistry, and Mathematics."
    },
    {
      degree: "10th Grade",
      institution: "Central Board of Secondary Education (CBSE)",
      duration: "2018 – 2019",
      location: "Varanasi, India",
      details: "High School"
    },
  ];

 
  const timelineData = educationData.map((edu) => ({
    title: edu.duration, 
    content: (
      <div>
        <h3 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-bold mb-2">
          {edu.degree}
        </h3>
        <p className="text-purple-600 dark:text-purple-400 text-base font-semibold mb-2">
          {edu.institution}
        </p>
        {edu.location && (
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 italic">
             📍 {edu.location}
          </p>
        )}
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
          {edu.details}
        </p>
      </div>
    ),
  }));

  return (
    <div id="education" className="w-full mt-3">
      <Timeline data={timelineData} />
    </div>
  );
};

export default Education;