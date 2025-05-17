import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";


const Footer = () => { 
  return (
    <footer className="bg-gray-900 border-b border-blue-800/40 py-6">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Personal Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Priya Kumari</h3>
            <p className="text-gray-300 mb-2 text-sm leading-relaxed">
              A final year B.Tech CSE student passionate about building practical tech solutions.
              Focused on MERN stack web development and exploring impactful AI/ML innovations.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com/pri998"  //my github link
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/priya998/"  //my linkedin link
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://instagram.com"  // my insta link
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
      <div>
          <h3 className="text-xl font-bold text-white mb-3">Quick Links</h3>
          <ul className="space-y-0.5 text-sm">
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-gray-300 hover:text-indigo-400 transition-colors"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Experience
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Projects
              </ScrollLink>
            </li>
            
            <li>
              <ScrollLink
                to="education"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Education
              </ScrollLink>
            </li>
            
            <li>
              <ScrollLink
                to="achievements"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Achievements
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Contact Info</h3>
            <p className="text-gray-300 mb-1 text-sm">Kolkata, India</p>
            <p className="text-gray-300 mb-3 text-sm">priyakumari1501k@gmail.com</p>
          </div>
        </div>
        
        <div className="border-t border-indigo-900 mt-4 py-4 bg-indigo-950">
          <p className="text-gray-400 text-xs text-center">
            &copy; {new Date().getFullYear()} Priya Kumari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
