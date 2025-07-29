import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 opacity-30 rounded-full blur-2xl animate-pulse -z-10" />

      <div className="container-custom px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-800 font-semibold text-sm mb-4 shadow">
              Java Full Stack Developer
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              <span className="text-purple-700">Building Modern Web Apps</span>
              <br />
              <span className="text-gray-800 text-2xl md:text-3xl block mt-2 animate-typewriter">
                Spring Boot + React.js
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              I develop scalable backend systems and responsive front-end interfaces focused on performance and user experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn btn-primary hover:scale-105 transition transform duration-200"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="btn btn-outline hover:bg-purple-100 transition duration-200"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-purple-200 absolute top-0 left-0 -z-10 animate-pulse" />
              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                alt="Developer working at desk"
                className="w-64 md:w-80 relative z-10 drop-shadow-xl"
              />
              <span className="absolute -bottom-4 -right-4 bg-white border border-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs font-medium shadow">
                React + Spring Boot
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down to about section">
            <ArrowDown size={28} className="text-purple-700" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
