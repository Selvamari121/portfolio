import { useState, useEffect, useRef } from "react";
import { Briefcase, Check } from "lucide-react";

const Experience = () => {
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

  const experience = {
    role: "Java Full Stack Developer",
    company: "Lashron Technologies",
    location: "Chennai, India",
    period: "July 2024 - Present",
    responsibilities: [
      "Developed and maintained RESTful APIs using Spring Boot.",
      "Built dynamic and responsive user interfaces with React.js and Tailwind CSS.",
      "Integrated frontend and backend for seamless data communication.",
      "Handled PostgreSQL for data storage and used H2 for unit testing.",
      "Wrote efficient unit and integration tests using JUnit and Mockito.",
      "Optimized performance, ensured scalability, and maintained Git-based CI/CD pipelines.",
    ],
    technologies: [
      "Java", "Spring Boot", "React.js", "Tailwind CSS", "PostgreSQL",
      "H2 DB", "JUnit", "Mockito", "Git", "GitHub", "Jenkins"
    ],
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`section-padding bg-purple-50 transition-opacity duration-1000 ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="container-custom">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey and accomplishments
        </p>

        <div className="mt-12 max-w-4xl mx-auto">
          <div
            className={`card p-8 border-l-4 border-purple-600 shadow-md rounded-xl bg-white ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full text-purple-700">
                <Briefcase size={24} />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                  <span className="text-sm font-medium text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                    {experience.period}
                  </span>
                </div>

                <p className="text-gray-700 text-base font-medium">{experience.company}</p>
                <p className="text-sm text-gray-500">{experience.location}</p>

                <ul className="mt-4 space-y-3">
                  {experience.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="text-green-600 mt-1" size={18} />
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <h4 className="font-medium text-sm text-purple-600 mb-1">Technologies:</h4>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    {experience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
