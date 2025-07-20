import { useState, useEffect, useRef } from "react";
import { GraduationCap, School } from "lucide-react";

const Education = () => {
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

  const education = [
    {
      degree: "Bachelor of Engineering (B.E) in Computer Science",
      institution: "Sardar Raja College of Engineering",
      period: "2019-2023",
      percentage: "82%",
      icon: <GraduationCap size={24} />,
    },
    {
      degree: "Higher Secondary Certificate (Computer Science)",
      institution: "Government Higher Secondary School",
      period: "2018-2019",
      percentage: "56%",
      icon: <School size={24} />,
    },
    {
      degree: "Secondary School Leaving Certificate",
      institution: "Government Higher Secondary School",
      period: "2016-2017",
      percentage: "80%",
      icon: <School size={24} />,
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className={`section-padding bg-white ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="container-custom">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic journey and qualifications
        </p>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 transform md:translate-x-px"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-purple-600 transform -translate-x-1.5 md:-translate-x-2"></div>

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
                  }`}
                >
                  <div className="card p-6 hover:border-l-4 hover:border-purple-500 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-purple-700">{item.icon}</div>
                      <h3 className="font-semibold text-xl">{item.degree}</h3>
                    </div>
                    <p className="text-gray-700">{item.institution}</p>
                    <div className="flex justify-between mt-3 text-sm text-gray-500">
                      {item.period && <span>{item.period}</span>}
                      <span className="font-medium text-purple-700">
                        {item.percentage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
