import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'React', icon: FaReact, category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, category: 'Frontend' },
    { name: 'JavaScript', icon: TbBrandJavascript, category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
    { name: 'HTML5', icon: AiFillHtml5, category: 'Frontend' },
    { name: 'CSS3', icon: DiCss3, category: 'Frontend' },
    { name: 'Node.js', icon: FaNodeJs, category: 'Backend' },
    { name: 'MongoDB', icon: SiMongodb, category: 'Backend' },
    { name: 'Tailwind', icon: SiTailwindcss, category: 'UI' },
    { name: 'Git', icon: FaGitAlt, category: 'Tools' },
    { name: 'AWS', icon: FaAws, category: 'Tools' }
  ];

  return (
    <section className={`py-16 ${darkMode ? 'bg-[#0D0D0D]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5 }}
              className={`group flex flex-col items-center p-4 rounded-lg ${
                darkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                  : 'bg-white hover:bg-gray-50'
              } transition-all duration-300`}
            >
              <div className={`relative w-8 h-8 md:w-12 md:h-12 mb-2 ${
                darkMode ? 'text-blue-400' : 'text-blue-500'
              }`}>
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon className="w-full h-full" />
                </motion.div>
              </div>
              <span className={`text-xs md:text-sm font-medium text-center ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 