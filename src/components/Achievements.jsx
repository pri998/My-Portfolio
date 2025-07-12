import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const achievementData = [
  {
    title: "Google Girl Hackathon 2025",
    subtitle: "Semi-finalist among 58000+ participants",
    description:
      "Recognized for exceptional problem-solving skills and innovative thinking.",
  },
  {
    title: "Hack4Bengal Hackathon 2025",
    subtitle: "Winner among 240+ teams",
    description:
      "Declared as winner (top 30 teams of virtual round) out of total 240+ teams for building something truly impactful.",
  },
  {
    title: "Vigyan Vidushi 2025",
    subtitle: "Selected among 36 nationwide",
    description:
      "Earned the opportunity to be part of Vigyan Vidushi '25 at TIFR Mumbai, an advanced scholar program in Computer Science.",
  },
  {
    title: "Walmart Codehers 2025",
    subtitle: "Ranked among top 6% in Round 1 among 113186 participants",
    description:
      "Recognized for exceptional problem-solving skills and deep computer fundamentals understanding, qualifying for final round.",
  },
  {
    title: "Aerothon 2024",
    subtitle: "AIR 26 in Phase-1",
    description:
      "Achieved AIR 26 for developing an uncrewed aircraft (team competition) in the national-level competition by SAE-INDIA.",
  },
  {
    title: "Grace Hopper Celebration 2024",
    subtitle: "GHC Scholar",
    description:
      "Awareded international scholarship to attend (GHC) world's largest gathering of women technologists.",
  },
  {
    title: "Mentorships & Apprenticeships",
    subtitle: "Infosys Springboard Cohort 4 | SheFi Cohort 6",
    description:
      "Selected for prestigious mentorship programs, reflecting my tech dedication and potential.",
  },
  {
    title: "Academic Excellence awards in college",
    subtitle: "Rank 4 (1st yr.) and Rank 7 (2nd yr.) in B.Tech",
    description:
      "Awarded for outstanding academic performance during my undergraduate studies.",
  },
  {
    title: "School Achievements",
    subtitle: "Rank 1 in Class X CBSE AISSCE, Among top 10 in Class XII CBSE AISSCE, various cultural activities winner",
    description:
      "Secured the top ranks at school level in the Class Xth and XIIth board examinations.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-8 px-4 sm:px-8">
      <div
        className="mx-auto max-w-5xl rounded-xl shadow-2xl
                   bg-gradient-to-r from-gray-800 to-gray-900
                   border-b border-blue-800/40 overflow-hidden 
                   px-6 py-8" // Added padding here
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{amount: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-sm font-medium text-indigo-400 uppercase tracking-wider mb-2">
            My Achievements
            <motion.div 
              className="absolute w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-400 
                        left-1/2 transform -translate-x-1/2 rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ amount: 0.5 }}
            ></motion.div>
          </h1>
          <h2 className="text-4xl p-4 md:text-5xl font-bold text-white mb-4">
            What I've Accomplished
          </h2>
          
        </motion.div>

        {/* Increased grid gap for better spacing between cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {achievementData.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-neutral-800/30 backdrop-blur-sm rounded-lg 
                         border border-neutral-700/30 p-6 
                         transition-all duration-300 
                         hover:border-indigo-500/50"
                         whileHover={{ 
                          scale: 1.03,
                          boxShadow: "0 15px 30px -10px rgba(79, 70, 229, 0.25)"
                        }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaAward size={28} className="text-indigo-400" />
                <h3 className="text-xl font-semibold text-white">
                  {ach.title}
                </h3>
              </div>
              <h4 className="text-sm text-indigo-300 font-medium mb-2">
                {ach.subtitle}
              </h4>
              <p className="text-neutral-300 text-sm">{ach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
