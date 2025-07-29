import { useState, useEffect, useRef } from "react";
import {
  Users,
  BookOpen,
  Github,
  ExternalLink,
} from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: "Photographer-Based Application",
      description:
        "Developed a full-stack photo management platform using Spring Boot, PostgreSQL, and React. Implemented REST APIs, file uploads, unit testing with Mockito, and logging with SLF4J. Used H2 for testing and JaCoCo for code coverage.",
      image: null,
      stack: [
        "Java",
        "Spring Boot",
        "React.js",
        "Tailwind CSS",
        "PostgreSQL",
        "JaCoCo",
        "H2",
        "Mockito",
      ],
      icon: <Users size={24} />,
      github: "https://github.com/Selvamari121",
      demo: null,
    },
    {
      title: "Photographer Website Generator",
      description:
        "Subdomain generator for photographer-based application, used only by group members.",
      image: null,
      stack: [
        "Java",
        "Thymeleaf",
        "JavaScript",
        "HTML",
        "CSS",
        "API",
        "PostgreSQL",
      ],
      icon: <BookOpen size={24} />,
      github: "https://github.com/Selvamari121",
      demo: null,
    },
    {
      title: "Image & Video Generator",
      description:
        "Created an OpenCV-based tool to generate random images and videos from JSON input for photo format testing. Used Spring Boot and Java with efficient error handling and modular code design.",
      image: null,
      stack: ["Java", "Spring Boot", "OpenCV", "JSON", "Jackson", "Gson"],
      icon: <BookOpen size={24} />,
      github: "https://github.com/Selvamari121",
      demo: null,
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`section-padding bg-white ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Explore some of my recent work and accomplishments
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card group hover:translate-y-[-5px] ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {project.image ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center text-white">
                  <div className="text-5xl">{project.icon}</div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-gray-700 hover:text-purple-700"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 text-gray-700 hover:text-purple-700"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;