import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Database,
  Layout,
  Server,
  ShieldCheck,
  GitBranch,
} from "lucide-react";

const About = () => {
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

  const strengths = [
    {
      icon: <Server className="w-6 h-6" />,
      text: "Robust backend with Spring Boot",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      text: "Clean and testable architecture",
    },
    {
      icon: <Layout className="w-6 h-6" />,
      text: "Responsive React UI design",
    },
    {
      icon: <Database className="w-6 h-6" />,
      text: "Efficient PostgreSQL integration",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      text: "Secure authentication & authorization",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      text: "Version control with Git & GitHub",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`section-padding bg-white ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-5 gap-8 items-center mt-12">
          <div className="md:col-span-3">
            <div
              className={`space-y-6 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                Hello, I'm Selvamari S
              </h3>
              <p className="text-gray-700">
                A highly motivated{" "}
                <span className="font-medium text-purple-800">
                  Java Fullstack Developer
                </span>{" "}
                with real-world experience in developing{" "}
                <span className="font-medium">secure</span>,{" "}
                <span className="font-medium">scalable</span>, and{" "}
                <span className="font-medium">API-driven web applications</span>
                . I'm proficient in modern tech stacks like{" "}
                <span className="font-medium text-purple-800">Spring Boot</span>
                ,{" "}
                <span className="font-medium text-purple-800">
                  React + Vite
                </span>
                , and{" "}
                <span className="font-medium text-purple-800">PostgreSQL</span>,
                always aiming to deliver robust and maintainable solutions.
              </p>
              <p className="text-gray-700">
              <span className="font-medium">Goal</span>: To build
                high-quality software that solves real problems and supports
                seamless user experiences.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <div
              className={`bg-purple-50 rounded-xl p-6 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <h4 className="font-semibold text-xl mb-4"> Key Strengths</h4>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="text-purple-700">{strength.icon}</div>
                    <span>{strength.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
