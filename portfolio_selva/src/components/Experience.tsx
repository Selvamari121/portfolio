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

  const experienceData = {
    title: "Java Full Stack Developer",
    company: "Lashron Technologies",
    period: "July 2024 - Still",
    responsibilities: [
      "Developed RESTful APIs using Spring Boot framework",
      "Built responsive user interfaces with React.js",
      "Integrated frontend and backend components for seamless user experience",
      "Implemented data persistence with PostgreSQL database",
      "Wrote unit and integration tests using Mockito and H2 in-memory database",
      "Optimized application performance and ensured scalability",
    ],
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`section-padding bg-purple-50 ${
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
            className={`card p-8 border-l-4 border-purple-500 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full text-purple-700">
                <Briefcase size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{experienceData.title}</h3>
                  <span className="text-sm font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                    {experienceData.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{experienceData.company}</p>

                <div className="space-y-3">
                  {experienceData.responsibilities.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="text-green-500 mt-1">
                        <Check size={18} />
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
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
