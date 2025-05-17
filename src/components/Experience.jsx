import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const porList = [
  "Management Lead at Google Developer Groups IEM, leading and coordinating a community of over 1200 students. (2024-25)",
  "Co-Lead at AlgoZenith IEM, actively mentoring students and organizing impactful technical talks and hands-on sessions. (2024-25)",
  "Member of Women In Technology (WIT) community, contributing to initiatives promoting diversity and inclusion in tech. (2024-26)",
  "Reception Chair of the core committee at SAE IEM Collegiate Club, managing event operations and welcoming delegates. (2024-25)"
];


export default function Experience() {
  //all my experiences
  const experiences = [
    {
      role: "Project Intern",
      year: "Dec 2024 - Feb 2025",
      company: "Indian Institute of Technology, Kharagpur",
      description: [
        "Investigated the impact of shift bribery in social networks, analyzing its effect on 25% of global elections and providing actionable insights.",
        "Engineered computational models to detect manipulative voting patterns, using complexity theory for automated defense mechanisms.",
        "Proved shift bribery is NP-complete in certain scenarios and developed polynomial-time solutions for specific cases."
      ],
      technologies: ["Complexity Theory", "Graph Theory", "Social Networks"]
    },
    {
      role: "Research Intern",
      year: "May 2024 - Oct 2024",
      company: "Indian Summer School on Cellular Automata",
      description: [
        "Designed a 5-neighborhood CA-based pattern classifier, outperforming existing classifiers by 20–30% across 7 benchmark datasets.",
        "Analyzed over 1 lakh 5-N binary CA rules, selecting 150 optimal rules with stable single-length cyclic behavior.",
        "Identified best performing rules that optimized model accuracy while ensuring efficiency.",
        "Research work selected for the 4th Asian Symposium on Cellular Automata Technology, to be published in Springer Nature."
      ],
      technologies: ["Cellular Automata", "Python", "Data Analysis", "Machine Learning"]
    },
    {
      role: "Positions of Responsibility",
      year: "most recents",
      company: "Various Clubs & Tech Communities",
      description: [
        "Management Lead at Google Developer Groups IEM, leading a community of over 1200 students. (2024-25)",
        "Co-Lead at AlgoZenith IEM, actively mentoring students and organizing impactful technical sessions. (2024-25)",
        "Member of Women In Technology (WIT) community, contributing to initiatives promoting diversity in tech. (2024-26)",
        "Reception Chair of the core committee at SAE IEM Collegiate Club, managing event operations etc. (2024-25)"
      ],
      technologies: ["Leadership", "Team Management", "Volunteering"]
    }
  ];

  return (
    <section id="experience" className="py-8">
      <div className="border-b border-neutral-800/40 pb-12 px-6 py-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{once: false, amount: 0.3 }}
          className="text-center mb-8"
          
        >
          <h1 className="text-sm font-medium text-indigo-400 mb-3 uppercase tracking-wider">
            My Experience
            <motion.div 
              className="absolute w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-400 
                        left-1/2 transform -translate-x-1/2 rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ amount: 0.5 }}
            ></motion.div>
          </h1>
          <h2 className="text-3xl p-4 md:text-4xl font-bold text-white mb-2">
            Professional Experience
          </h2>
          
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`mb-8 relative ${index === experiences.length - 1 ? "" : "pb-8"}`}
            >
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-transparent"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-teal-400">
                    <FaBriefcase size={18} />
                  </div>
                </div>

                {/* Experience Details */}
                <div className="flex-grow bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700/30 p-4 md:p-6">
                  {/* Role & Year */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-0">
                      {experience.role}
                    </h3>
                    <div className="flex items-center text-xs text-teal-300 font-medium">
                      <FaCalendarAlt className="mr-1" />
                      <span>{experience.year}</span>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex items-center mb-3 text-neutral-300 text-sm">
                    <FaBuilding className="mr-1" />
                    <span className="font-medium">{experience.company}</span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((point, idx) => (
                      <li key={idx} className="text-neutral-300 text-sm flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 mr-2 flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 text-xs font-medium bg-teal-500/10 text-teal-300 rounded-full border border-teal-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
