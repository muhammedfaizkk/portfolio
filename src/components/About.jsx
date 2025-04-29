import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';

const About = ({ darkMode }) => {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Technologies', value: '15+' },
  ];

  const specialties = [
    {
      icon: FaLaptopCode,
      title: 'Frontend Development',
      description: 'Creating responsive and intuitive user interfaces with modern frameworks.'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Building robust server-side applications and RESTful APIs.'
    },
    {
      icon: FaCode,
      title: 'Full Stack Development',
      description: 'Bridging frontend and backend for complete web solutions.'
    }
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${darkMode ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-20 left-0 w-72 h-72 rounded-full ${darkMode ? 'bg-blue-500/5' : 'bg-blue-100/50'} blur-3xl`}></div>
        <div className={`absolute bottom-20 right-0 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-500/5' : 'bg-purple-100/50'} blur-3xl`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
                darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}
            >
              About Me
            </motion.span>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Turning Vision Into Reality
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Passionate about creating web applications that solve real-world problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/your-photo.jpg"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className={`absolute -top-4 -left-4 w-24 h-24 rounded-lg ${darkMode ? 'bg-blue-500/10' : 'bg-blue-100'} -z-10`}></div>
              <div className={`absolute -bottom-4 -right-4 w-32 h-32 rounded-lg ${darkMode ? 'bg-purple-500/10' : 'bg-purple-100'} -z-10`}></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Full-Stack Web Developer
              </h3>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a passionate full-stack developer with expertise in building responsive and scalable web applications. 
                With a strong foundation in both frontend and backend technologies, I create seamless user experiences 
                while ensuring robust functionality.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 my-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-lg font-medium ${
                    darkMode
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  } transition-colors duration-300`}
                >
                  Download Resume
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-lg font-medium ${
                    darkMode
                      ? 'bg-gray-800 hover:bg-gray-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  } transition-colors duration-300`}
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Specialties Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800/50' : 'bg-gray-50'
                } hover:transform hover:-translate-y-2 transition-all duration-300`}
              >
                <specialty.icon className={`text-4xl mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                <h4 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {specialty.title}
                </h4>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 