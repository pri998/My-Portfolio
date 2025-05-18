import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";

export default function Education() {
  // My education details split into 3 sections
  const educations = [
    {
      type: "College",
      degree: "B.Tech",
      course: "Computer Science & Engineering",
      institute: "Institute of Engineering & Management",
      location: "Kolkata, India",
      period: "2022 - 2026",
      grade: "CGPA: 9.74 / 10",
      icon: <FaUniversity size={24} className="text-indigo-400" />
    },
    {
      type: "Class XII (PCM) - CBSE",
      institute: "Baldwin Academy",
      location: "Patna, India",
      period: "2019 - 2021",
      grade: "Grade: 93.2%",
      icon: <GiSchoolBag size={24} className="text-indigo-400" />
    },
    {
      type: "Class X - CBSE",
      institute: "Baldwin Academy",
      location: "Patna, India",
      period: "2018 - 2019",
      grade: "Grade: 96%",
      icon: <GiSchoolBag size={24} className="text-indigo-400" />
    }
  ];

  return (
    <section id="education" className="w-full py-10 px-2 sm:px-8">
      <div
        className="mx-auto max-w-5xl rounded-xl shadow-2xl 
                   bg-gradient-to-r from-gray-800 to-gray-900 
                   border-b border-blue-800/40 overflow-hidden
                   px-6 py-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{amount: 0.2 }}
          className="text-center mb-8 px-4"
        >
          <h1 className="text-sm font-medium text-indigo-400 mb-3 uppercase tracking-wider">
            My Education
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
            Academic Journey
          </h2>
          
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="mb-12 relative"
              
            >
              {/* Timeline connector */}
              {index < educations.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-transparent"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                    {edu.icon}
                  </div>
                </div>

                {/* Education Details */}
                <div className="flex-grow bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700/30 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    {edu.type === "College" ? (
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">
                        {edu.degree} in {edu.course}
                      </h3>
                    ) : (
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">
                        {edu.type}
                      </h3>
                    )}
                    <div className="flex items-center text-sm text-indigo-300 font-medium">
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-neutral-300 text-sm">
                    <span className="font-medium">{edu.institute}</span>
                    <span className="mx-2">|</span>
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-neutral-300 text-sm">
                    {edu.grade}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
