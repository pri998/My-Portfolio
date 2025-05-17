
import { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rotatingWords = ["Developer", "Innovator", "Leader", "Coder"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);


  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
  }, 3000); // rotating words rotate every 2 seconds
  return () => clearInterval(interval);
}, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Achievements", to: "achievements" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    { icon: <FaEnvelope size={20} />, href: "mailto:priyakumari1501k@gmail.com", label: "Email" },
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/priya998/", label: "LinkedIn" },
    { icon: <FaGithub size={20} />, href: "https://github.com/pri998", label: "GitHub" },
    //{ icon: <FaInstagram size={20} />, href: "https://www.instagram.com/", label: "Instagram" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-blue-800/40 py-4"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <button
              className="cursor-pointer focus:outline-none"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <span
                className="text-xl text-indigo-400 font-semibold inline-block"
                style={{
                  //color: "#F29BDC",
                  minWidth: "150px", // Adjust based on the longest word
                  textAlign: "left", // Or "center", your choice
                }}
              >
                {rotatingWords[currentWordIndex]}
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="active-link"
                className="px-0.3 py-1 text-sm font-medium text-gray-300 hover:text-white rounded-md transition-colors relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-400 group-hover:w-full transition-all duration-300"></span>
              </ScrollLink>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt4 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900 border-b border-blue-800/40"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <ScrollLink
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    activeClass="active-link"
                    className="px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-neutral-800/50 rounded-md transition-colors cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                ))}

                <div className="flex items-center space-x-5 px-4 py-4 border-t border-neutral-800 mt-2">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Link Styling */}
      <style jsx>{`
        .active-link {
          color: #f472b6 !important;
          transition: all 0.1s ease;
        }
      `}</style>
    </motion.nav>
  );
}
