import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-100 clip-path-hero -z-10 opacity-60"></div>

      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className="order-2 md:order-1 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-800 font-medium text-sm mb-4">
                Java Fullstack Developer
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-purple-700">Fullstack Web Developer</span>{" "}
              Specializing in Spring Boot + React
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xxl">
              From backend APIs to dynamic UIs - I bring your ideas to life with
              powerful web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
            </div>
          </div>

          <div
            className="order-1 md:order-2 flex justify-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-purple-200 absolute top-0 left-0 -z-10 animate-pulse"></div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                alt="Web Developer"
                className="w-64 md:w-80 relative z-10"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={24} className="text-purple-700" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
