import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';

const projects = [
  {
    title: 'Saban & Co',
    subtitle: 'Real Estate Platform',
    description: 'A comprehensive real estate platform built with Next.js and Node.js. Features property listings, advanced search, and admin dashboard.',
    image: '/projects/saban.jpg',
    link: 'https://sabanandco.com/',
    github: '#',
    category: 'Full Stack',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    title: 'Auto Grid India',
    subtitle: 'E-commerce Platform',
    description: 'E-commerce platform for number plates with Razorpay integration, order management, and real-time tracking.',
    image: '/projects/agi.jpg',
    link: 'https://autogridnumberplate.com/',
    github: '#',
    category: 'Full Stack',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay']
  },
  {
    title: 'Kerala Offers',
    subtitle: 'Local Marketplace',
    description: 'Location-based marketplace for local businesses with advertisement management and user authentication.',
    image: '/projects/keralaoffers.jpg',
    link: 'https://www.keralaoffer.com/',
    github: '#',
    category: 'Full Stack',
    tech: ['MERN Stack', 'Redux', 'JWT', 'Google Maps API']
  },
  {
    title: 'Arya Premium Auto',
    subtitle: 'UAE-based Coupon Platform',
    description: 'A dynamic coupon purchase and redemption site with full admin control, dynamic banners, and Stripe integration. Built for the UAE market.',
    image: '/projects/aryapremium.jpg',
    link: 'https://aryapremiumauto.ae/', 
    github: '#',
    category: 'Full Stack',
    tech: ['React.js', 'PHP', 'MySQL', 'Stripe', 'Tailwind CSS']
  }
];


const Portfolio = ({ darkMode }) => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="portfolio" className={`py-20 ${darkMode ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
            darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'
          }`}>
            My Work
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A showcase of my web development projects, featuring full-stack applications and modern user interfaces
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full capitalize transition-all ${
                  filter === category 
                    ? `${darkMode ? 'bg-yellow-500 text-black' : 'bg-black text-white'}`
                    : `${darkMode ? 'bg-[#1A1A1A] text-white hover:bg-[#252525]' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group rounded-xl overflow-hidden ${
                  darkMode ? 'bg-[#1A1A1A]' : 'bg-gray-50'
                } shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 ${
                    darkMode ? 'bg-black/60' : 'bg-black/50'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4`}>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <FiGithub className="text-white text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <FiExternalLink className="text-white text-xl" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-full text-xs ${
                          darkMode
                            ? 'bg-blue-500/10 text-blue-400'
                            : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-sm font-medium ${
                      darkMode ? 'text-yellow-500 hover:text-yellow-400' : 'text-blue-600 hover:text-blue-700'
                    } transition-colors group/link`}
                  >
                    View Project
                    <HiArrowRight className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-lg font-bold flex items-center gap-2 ${
              darkMode 
                ? 'bg-[#1A1A1A] text-white hover:bg-[#252525]' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            } transition-colors`}
          >
            {showAll ? 'Show Less' : 'View All Projects'}
            <HiArrowRight className={`transform transition-transform ${showAll ? 'rotate-90' : ''}`} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 