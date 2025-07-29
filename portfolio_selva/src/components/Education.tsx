import { useState, useEffect, useRef } from "react";

const Education = () => {
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

  const education = [
    {
      degree: "Bachelor of Engineering (B.E) in Computer Science",
      institution: "Sardar Raja College of Engineering",
      period: "2019-2023",
      percentage: "82%",
    },
    {
      degree: "Higher Secondary Certificate (Computer Science)",
      institution: "Government Higher Secondary School",
      period: "2018-2019",
      percentage: "56%",
    },
    {
      degree: "Secondary School Leaving Certificate",
      institution: "Government Higher Secondary School",
      period: "2016-2017",
      percentage: "80%",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className={`section-padding bg-white transition-opacity duration-1000 ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
      aria-labelledby="education-heading"
    >
      <div className="container-custom px-6 mx-auto">
        <h2
          id="education-heading"
          className="text-4xl font-bold text-center text-purple-800 mb-4"
        >
          Education
        </h2>
        <p className="text-center text-gray-600 mb-12">
          My academic journey and qualifications
        </p>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 transform md:translate-x-px" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-purple-600 transform -translate-x-1.5 md:-translate-x-2" />

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white border border-purple-100 rounded-xl p-6 shadow-md hover:border-l-4 hover:border-purple-500 transition-all">
                    <div className="flex items-center gap-3 mb-2 text-purple-700">
                      <h3 className="font-semibold text-xl text-gray-900">{item.degree}</h3>
                    </div>
                    <p className="text-gray-700">{item.institution}</p>
                    <div className="flex justify-between mt-3 text-sm text-gray-500">
                      <span>{item.period}</span>
                      <span className="font-medium text-purple-700">{item.percentage}</span>
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
