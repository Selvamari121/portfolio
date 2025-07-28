import { Github, Linkedin, Twitter, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <Code size={24} className="text-purple-400" />
              <span className="text-xl font-bold">Selvamari S</span>
            </div>
            <p className="text-gray-400 mt-2">Java Fullstack Developer</p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-800 hover:bg-purple-700 p-2 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-purple-700 p-2 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-purple-700 p-2 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} Selvamari S | Built with using Spring Boot,
            React, and Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
