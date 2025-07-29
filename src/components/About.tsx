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

  const strengths = [
    { icon: <Server className="w-6 h-6" />, text: "Robust backend with Spring Boot" },
    { icon: <Code2 className="w-6 h-6" />, text: "Clean and testable architecture" },
    { icon: <Layout className="w-6 h-6" />, text: "Responsive React UI design" },
    { icon: <Database className="w-6 h-6" />, text: "Efficient PostgreSQL integration" },
    { icon: <ShieldCheck className="w-6 h-6" />, text: "Secure authentication & authorization" },
    { icon: <GitBranch className="w-6 h-6" />, text: "Version control with Git & GitHub" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`section-padding bg-gradient-to-br from-white to-purple-50 transition-opacity duration-1000 ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="container-custom px-6 mx-auto">
        <h2 className="section-title text-4xl font-bold text-center text-purple-800 mb-12 relative">
          About Me
          <span className="block w-16 h-1 bg-purple-600 mx-auto mt-2 rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Hello, I'm <span className="text-purple-700">Selvamari S</span>
            </h3>

            <p className="text-gray-700 leading-relaxed">
              A passionate{" "}
              <span className="font-semibold text-purple-800">
                Java Full Stack Developer
              </span>{" "}
              with hands-on experience building{" "}
              <span className="font-medium">secure</span>,{" "}
              <span className="font-medium">scalable</span>, and{" "}
              <span className="font-medium">API-driven applications</span>. Skilled in{" "}
              <span className="text-purple-800 font-medium">Spring Boot</span>,{" "}
              <span className="text-purple-800 font-medium">React + Vite</span>, and{" "}
              <span className="text-purple-800 font-medium">PostgreSQL</span>.
            </p>

            <p className="text-gray-700 leading-relaxed">
              <strong className="text-purple-800">Goal:</strong> To craft efficient and user-friendly web experiences while continuously learning new technologies.
            </p>
          </div>

          <div className="md:col-span-2">
            <div
              className={`bg-white border border-purple-100 rounded-xl p-6 shadow-md transform transition duration-700 ease-in-out ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              aria-label="Key technical strengths"
              style={{ animationDelay: "0.6s" }}
            >
              <h4 className="text-lg font-semibold text-purple-800 mb-4">
                Key Strengths
              </h4>
              <ul className="space-y-4">
                {strengths.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition"
                  >
                    <div className="text-purple-700">{item.icon}</div>
                    <span className="text-gray-800">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
