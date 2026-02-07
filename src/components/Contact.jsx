import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: false });
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      // Replace with the actual form endpoint if needed
      const response = await fetch("https://getform.io/f/blllvyqb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setFormStatus({ submitted: true, submitting: false, error: false });
        form.reset();
      } else {
        setFormStatus({ submitted: false, submitting: false, error: true });
      }
    } catch {
      setFormStatus({ submitted: false, submitting: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-12">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{amount: 0.2 }}
        className="text-center mb-8"
      >
        <h2 className="text-xs font-medium text-indigo-400 mb-2 uppercase tracking-wider">
          My Contact
          <motion.div 
              className="absolute w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-400 
                        left-1/2 transform -translate-x-1/2 rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ amount: 0.5 }}
            ></motion.div>
        </h2>

        <h1 className="text-3xl p-4 md:text-4xl font-bold text-white mb-2">Let's Connect</h1>
        
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-neutral-400 text-sm mb-4">
              Let’s create something impactful together. I’m always open to open to new opportunities, projects, collaborations, or simply a chat about algorithms, design and development!
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3">
              <div className="bg-indigo-500/20  rounded-lg text-indigo-400">
                <FaEnvelope size={18} />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm mb-1">Email : priyakumari1501k@gmail.com </h4>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3">
              <div className="bg-indigo-500/20 rounded-lg text-indigo-400">
                <FaPhone size={18} />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm mb-1">Phone : Available upon connection</h4>
                
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-3">
              <div className="bg-indigo-500/20 rounded-lg text-indigo-400">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm mb-1">Location : Kolkata, India</h4>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-white font-medium mb-3 text-sm">Follow Me</h4>
              <div className="flex space-x-1">

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/priya998/" // my linkedin link
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-indigo-600 p-2 rounded-lg text-neutral-400 hover:text-white transition-all"
                >
                  <FaLinkedin size={18} />
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/pri998"  // my github link
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-indigo-600 p-2 rounded-lg text-neutral-400 hover:text-white transition-all"
                >
                  <FaGithub size={18} />
                </a>
                
                {/* Instagram */}
                {/* <a 
                  href="https://instagram.com" //my insta link
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-indigo-600 p-2 rounded-lg text-neutral-400 hover:text-white transition-all"
                >
                  <FaInstagram size={18} />
                </a> */}
              </div>
            </div>
          </motion.div>

{/*
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700/30 p-4 shadow-lg relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Send a personalised message</h3>
              
              {formStatus.submitted ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold text-white mb-2">Thank You!</h4>
                  <p className="text-neutral-300">Your message has been sent successfully. I&apos;ll get back to you soon!</p>
                </div>
              ) : formStatus.error ? (
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-6 text-center mb-6">
                  <h4 className="text-xl font-semibold text-white mb-2">Oops!</h4>
                  <p className="text-neutral-300">Something went wrong. Please try again later or contact me directly via email.</p>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-4 relative z-10"

                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        className="w-full px-2 py-1 bg-neutral-700/30 border border-neutral-600/50 rounded-lg text-black placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
                        className="w-full px-2 py-1 bg-neutral-700/30 border border-neutral-600/50 rounded-lg text-black placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-2 py-1 bg-neutral-700/30 border border-neutral-600/50 rounded-lg text-black placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                      placeholder="Subject of your message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full px-2 py-1 bg-neutral-700/30 border border-neutral-600/50 rounded-lg text-black placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all flex items-center justify-center"
                    >
                      {formStatus.submitting ? (
                        <span className="inline-flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              )} 
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
