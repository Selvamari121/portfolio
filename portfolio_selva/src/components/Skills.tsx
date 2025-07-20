import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    {
      name: "Java",
      level: 90,
    },
    {
      name: "Spring Boot",
      level: 85,
    },
    {
      name: "React",
      level: 85,
    },
    {
      name: "JavaScript",
      level: 80,
    },
    {
      name: "PostgreSQL",
      level: 80,
    },
    {
      name: "HTML5",
      level: 95,
    },
    {
      name: "CSS3",
      level: 90,
    },
    {
      name: "Git",
      level: 85,
    },
    {
      name: "JUnit",
      level: 75,
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`section-padding bg-purple-50 ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="container-custom">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Here are the technologies and tools I work with
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`card p-6 flex flex-col items-center ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <img alt={skill.name} className="w-24 h-16 mb-4" />
              <h3 className="font-medium text-lg mb-3">{skill.name}</h3>
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
