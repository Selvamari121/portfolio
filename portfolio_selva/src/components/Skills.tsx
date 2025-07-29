import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const skills = [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 85 },
    { name: "React", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "PostgreSQL", level: 80 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Git", level: 85 },
    { name: "JUnit", level: 75 },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`section-padding bg-purple-50 transition-opacity duration-1000 ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="container-custom px-6 mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-4">My Skills</h2>
        <p className="text-center text-gray-600 mb-12">
          Technologies and tools I use in daily development.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 bg-white rounded-xl shadow-md transition-all duration-700 transform ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
              aria-label={`Skill: ${skill.name}`}
            >
              <div className="w-12 h-12 mb-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 text-xl font-bold">
                {skill.name[0]}
              </div>

              <h3 className="font-medium text-lg mb-2 text-gray-800">{skill.name}</h3>

              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${0.2 * index}s`,
                  }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 mt-2">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
