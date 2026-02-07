import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import bookloop from "../assets/bookloop.jpg";
import snapstream from "../assets/snapstream.jpg";
import aerothon from "../assets/aerothon.jpg";
import pattern from "../assets/pattern.jpg";
import devVerse from "../assets/devVerse.jpg"

export default function Projects() {
  const projects = [
    {
      title: "BookLoop",
      period: "Apr 2025 - Jul 2025",
      description:
        "Spearheaded the development of BookLoop, a platform for book donation and knowledge-sharing, tackling the issue of underutilized books for educational purposes, with engagement features.",
      image: bookloop,
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "PostgreSQL"
      ]
    },
    {
      title: "DevVerse",
      period: "Mar 2025 - Apr 2025",
      description:
        "Developed an AI-powered virtual development pod to automate the conversion of unstructured RFPs into structured assets streamlining the tasks of various agents.",
      image: devVerse, 
      link: "https://github.com/pri998/DevVerse",
      technologies: [
        "Python",
        "Streamlit",
        "ChromaDB",
        "Crew AI"
      ]
    },
    {
      title: "Pattern Classifier ",
      period: "May 2024 - Sep 2024",
      description:
        "Developed a pattern classification algorithm using 5-neighborhood cellular automata. The project focuses on training and testing different CA rules for optimal classification accuracy.",
      image: pattern, 
      link: "https://github.com/pri998/Pattern-Classifier-using-5N-CA",  // Replace with your actual project link
      technologies: [
        "C++",
        "Cellular Automata",
        "Machine Learning",
      ]
    },
    {
      title: "SnapStream",
      period: "Nov 2024 - Dec 2024",
      description:
        "Built a dynamic image gallery platform integrating search, pagination, and favorites management to allow users to interact with millions of high-quality images sourced from the Pixabay API.",
      image: snapstream, 
      link: "https://github.com/pri998/SnapStream",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Pixabay API"
      ]
    },
    {
      title: "Aerothon - Drone",
      period: "Sep 2024 - Nov 2024",
      description:
        "Collaborated in a team to architect a multirotor UAV for payload delivery via manual & autonomous flight, achieving 90% test accuracy; presented at a national-level competition by SAE-INDIA.",
      image: aerothon,
      technologies: [
        "YOLO v9",
        "TensorFlow Lite",
        "Raspberry Pi"
      ]
    }
  ];

  return (
    <section id="projects" className="py-4 bg-black">
      <div className="border-b border-neutral-800/40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{amount: 0.2 }}
          className="text-center mb-12 px-4"
        >
          <h1 className="text-sm font-medium text-indigo-400 mb-3 uppercase tracking-wider">
            My Projects
            <motion.div 
              className="absolute w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-400 
                        left-1/2 transform -translate-x-1/2 rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ amount: 0.5 }}
            ></motion.div>
          </h1>
          <h2 className="text-4xl p-4 md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-neutral-800/30 backdrop-blur-sm rounded-lg overflow-hidden border border-neutral-700/30 hover:border-neutral-600/50 transition-all duration-300 group h-full flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                  <span className="text-sm text-indigo-300">{project.period}</span>
                </div>
                <p className="text-neutral-400 text-sm mb-3 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-1.5 py-0.5 text-xs font-medium bg-neutral-700/50 text-neutral-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-medium rounded-lg transition-colors border border-indigo-500/30"
                    >
                      <FaGithub size={22} />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
