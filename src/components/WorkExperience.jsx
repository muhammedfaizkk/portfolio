import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const WorkExperience = ({ darkMode }) => {
  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "WILLOWY INFOTECH",
      location: "CALICUT, KERALA",
      duration: "Dec 2024 - Present",
      type: "Full-time",
      responsibilities: [
        "Database Design: Created and optimized database designs to ensure efficient data storage and retrieval for various applications.",
        "Application Development: Developed and maintained web applications using React and Node.js, ensuring robust and responsive user interfaces",
        "Server Management: Managed and maintained servers, ensuring uptime and performance for hosted applications.",
        "Application Hosting: Hosted and deployed applications on web servers, overseeing the entire deployment process."
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Server Management"]
    },
    {
      title: "Front-End Developer",
      company: "THYCHA TECHNOLOGIES",
      location: "CALICUT, KERALA",
      duration: "Mar 2024 - Nov 2024",
      type: "Full-time",
      responsibilities: [
        "Developed responsive and user-friendly websites using HTML, CSS, JavaScript, and React.",
        "Ensured mobile-first design and cross-browser compatibility.",
        "Hosted and managed websites through cPanel for seamless deployment.",
        "Collaborated with designers and backend developers to deliver complete solutions."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "cPanel"]
    },
    {
      title: "MERN Stack Developer Intern",
      company: "BIXEL TECHNOLAB",
      location: "MALAPPURAM",
      duration: "June 2023 - Feb 2024",
      type: "Internship",
      responsibilities: [
        "Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js.",
        "Built responsive front-end interfaces with React and managed state using Redux.",
        "Implemented RESTful APIs using Express.js to handle backend operations.",
        "Worked with MongoDB to design and manage data models for efficient data storage and retrieval.",
        "Participated in Agile development practices, including code reviews, debugging, and project collaboration."
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "RESTful APIs"]
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
            darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'
          }`}>
            Professional Journey
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative grid md:grid-cols-2 gap-8 md:gap-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 z-10"></div>
                
                {/* Content */}
                <div className={`md:text-right ${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <div className={`p-6 rounded-xl ${
                    darkMode 
                      ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  } transition-all duration-300 transform hover:-translate-y-1`}>
                    <div className="flex items-center gap-3 mb-4 md:justify-end">
                      <FaBriefcase className={`text-xl ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {experience.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 md:justify-end">
                        <FaBuilding className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {experience.company}
                        </span>
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {experience.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 md:justify-end">
                        <FaCalendarAlt className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {experience.duration}
                        </span>
                      </div>
                    </div>

                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {experience.type}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12'}>
                  <div className={`p-6 rounded-xl ${
                    darkMode 
                      ? 'bg-gray-800/50' 
                      : 'bg-gray-50'
                  }`}>
                    <ul className="space-y-3">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.1) }}
                          className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                          <BsArrowRight className="mt-1 flex-shrink-0" />
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded-full text-xs ${
                            darkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-200 text-gray-700'
                          }`}
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
      </div>
    </section>
  );
};

export default WorkExperience; 