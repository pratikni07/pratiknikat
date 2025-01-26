import React from "react";

const Timeline = () => {
  const experiences = [
    {
      year: "2023",
      title: "Software Engineering Intern",
      description:
        "Developed scalable web applications and collaborated with cross-functional teams.",
      icon: "💻", // You can replace this with actual SVGs or images
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      description: "Built responsive websites using the MERN stack.",
      icon: "🌐",
    },
    {
      year: "2021",
      title: "Junior Developer",
      description: "Worked on backend services and API integrations.",
      icon: "🔧",
    },
    {
      year: "2020",
      title: "Internship",
      description:
        "Learned foundational development practices and contributed to minor projects.",
      icon: "📘",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">My Experience</h2>
      <div className="relative w-full max-w-4xl">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-400"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Card */}
              <div
                className={`w-72 p-4 bg-white rounded-lg shadow-md border ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <div className="flex items-center mb-2 space-x-2">
                  <div className="text-2xl">{exp.icon}</div>
                  <h3 className="font-bold text-lg">{exp.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{exp.description}</p>
              </div>

              {/* Year */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">
                  {exp.year}
                </div>
                {index < experiences.length - 1 && (
                  <div className="h-12 w-1 bg-gray-400"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
