import { FaLinkedin, FaGithub, FaLaptop } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-5">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left Side - Copyright */}
        <div>
          <p className="text-2xl">
           Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold mb-4 ">Find me on</p>
          <div className="flex space-x-8">
            <a
              href="https://www.linkedin.com/in/mauricio-erazo-/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>

            <a
              href="https://github.com/wichofly/tipCalculator-app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8" />
            </a>

            <a
              href="https://wichofly.github.io/portfolio-website/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition duration-300"
              aria-label="Portfolio"
            >
              <FaLaptop className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
