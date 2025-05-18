import { motion } from "framer-motion";
import AboutImg from "../assets/AboutImg.jpg";
import { FaCode, FaServer, FaDatabase, FaBook, FaRobot } from "react-icons/fa";

export default function About() {
  const skills = [
    {
      icon: <FaCode />,
      title: "Programming Languages",
      description: "Skilled in C++, C, and JavaScript, with experience in developing efficient and optimized code."
    },
    {
      icon: <FaServer />,
      title: "Web Technologies",
      description: "Proficient in HTML, CSS, ReactJS, and NodeJS. Currently learning ExpressJS and Tailwind CSS to enhance backend development and modern UI styling."
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Learning SQL and NoSQL databases to build efficient and scalable data-driven applications."
    },
    {
      icon: <FaBook />,
      title: "Relevant Coursework",
      description: "Studied DSA, OOPS, OS, SWE, CN, and AI/ML as part of core curriculum."
    },
  ];

  const aboutText = `
    <p class="mb-4 text-justify">
    👋Hi! I'm <strong> Priya Kumari </strong>, a final year B.Tech CSE student with a passion for solving real-world problems through tech.
  </p>
  <p class="mb-4 text-justify">
    I'm currently deepening core computer science concepts while building real-world solutions using full-stack tools, machine learning, and a bit of research magic along the way.
  </p>
  <p class="mb-4 text-justify">
    I have been a semi-finalist at Google Girl Hackathon 2025, a winner at Hack4Bengal 2025, and secured AIR 26 in Aerothon 2024. I also led tech communities like Google DSC and AlgoZenith club, where I enjoyed mentoring peers and organizing impactful tech initiatives. Thanks!!
  </p>
  `;

  return (
    <section id="about" className="w-full py-1 px-2 sm:px-4">
      {/* Main info container */}
      <div
        className="mx-auto max-w-5xl rounded-t-xl shadow-xl 
                   bg-gradient-to-r from-gray-800 to-gray-900 
                   border-b border-blue-800/40
                   px-6 py-8 select-text"
      >
        {/* Section Title */}
        <div className="text-center mb-4 pt-4">
          <h1 className="text-sm font-medium text-indigo-400 mb-3 uppercase tracking-wider">
            About Me
          </h1>
          <p className="max-w-2xl mx-auto text-base text-white">
            Discover my background, passions, and the innovative projects that drive my creativity.
          </p>
        </div>

        {/* Image + Description */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-8 px-8">
          {/* Description */}
          <div className="w-full lg:w-1/2 text-white">
            <div
              className="text-sm leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: aboutText }}
            />
          </div>

          {/* Image + Resume Button */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            {/* Image Container with animated border */}
            <div className="relative max-w-xs mx-auto group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl blur opacity-20 
                              group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src={AboutImg}
                alt="Priya Kumari"
                className="relative rounded-xl shadow-2xl w-full h-auto object-cover z-10 
                         transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Small gap */}
      <div className="h-2 mx-auto max-w-5xl"></div>
      
      {/* Core Competencies in a separate container with a different color scheme */}
      <div 
        className="mx-auto max-w-5xl rounded-b-xl shadow-2xl
                   bg-gradient-to-r from-indigo-900/90 to-purple-900/90
                   border-t border-indigo-500/20 overflow-hidden
                   px-6 py-8 select-text relative"
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000"></div>
        </div>

        {/* Core Competencies Header with animated underline */}
        <div className="pb-8 relative">
          <motion.h2 
            className="text-xl md:text-2xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3 }}
          >
            Tech Skills
            <motion.div 
              className="absolute w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-400 
                        left-1/2 transform -translate-x-1/2 rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ amount: 0.5 }}
            ></motion.div>
          </motion.h2>
          
          {/* Skills grid with hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-8 mt-4 relative z-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-indigo-900/40 backdrop-blur-sm p-5 rounded-xl 
                          border border-indigo-600/30 hover:border-purple-400/60
                          transition-all duration-300 group overflow-hidden relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ amount: 0.3 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 15px 30px -10px rgba(79, 70, 229, 0.25)"
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 
                               rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Icon with floating animation */}
                <motion.div 
                  className="text-purple-300 text-3xl mb-3"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    delay: index * 0.2
                  }}
                >
                  {skill.icon}
                </motion.div>
                
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-200 transition-colors">{skill.title}</h3>
                <p className="text-indigo-100/80 text-xs">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}