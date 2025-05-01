import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const contactInfo = {
    name: "MUHAMMED FAIZ KK",
    title: "MERN Stack Developer",
    email: "muhammedfaizkk01@gmail.com",
    phone: "+91 7510657338",
    location: "Malappuram, Kerala, India",
    github: "https://github.com/muhammedfaizkk",
    linkedin: "https://www.linkedin.com/in/muhammed-faiz-kk-19768725a",
  };

  return (
    <section className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'} py-20 px-4 relative overflow-hidden`}>
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full ${darkMode ? 'bg-blue-500/5' : 'bg-blue-100/50'} blur-3xl`}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-500/5' : 'bg-purple-100/50'} blur-3xl`}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={itemVariants}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 md:mb-8 border-4 border-yellow-500"
          >
            <img
              src="/projects/faiz.jpg"
              alt={contactInfo.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-2 md:mb-4"
          >
            {contactInfo.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-yellow-500 mb-2"
          >
            {contactInfo.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base md:text-lg text-center text-gray-500 dark:text-gray-300 px-4 mb-6"
          >
            Experienced web developer with a passion for creating innovative and user-friendly websites. Committed to delivering high-quality work and constantly expanding my skills to stay up-to-date with the latest industry trends.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mb-6"
          >
            <motion.a
              href={`mailto:${contactInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                darkMode ? 'bg-[#1A1A1A] hover:bg-[#252525]' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              <FaEnvelope className="text-yellow-500" />
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {contactInfo.email}
              </span>
            </motion.a>

            <motion.a
              href={`tel:${contactInfo.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                darkMode ? 'bg-[#1A1A1A] hover:bg-[#252525]' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              <FaPhone className="text-yellow-500" />
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {contactInfo.phone}
              </span>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                darkMode ? 'bg-[#1A1A1A]' : 'bg-gray-100'
              }`}
            >
              <FaMapMarkerAlt className="text-yellow-500" />
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {contactInfo.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 mb-6"
          >
            {[
              { icon: FaGithub, link: contactInfo.github, label: 'GitHub' },
              { icon: FaLinkedinIn, link: contactInfo.linkedin, label: 'LinkedIn' }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-full ${darkMode ? 'bg-[#1A1A1A]' : 'bg-gray-100'} flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300`}
                aria-label={social.label}
              >
                <social.icon className={`text-xl ${darkMode ? 'text-white' : 'text-gray-700'}`} />
              </motion.a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 ${
                darkMode 
                  ? 'bg-yellow-500 text-black hover:bg-yellow-400' 
                  : 'bg-black text-white hover:bg-gray-800'
              } font-bold transition-colors rounded-lg`}
            >
              DOWNLOAD CV
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 ${
                darkMode 
                  ? 'bg-[#1A1A1A] text-white hover:bg-[#252525]' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              } font-bold transition-colors rounded-lg flex items-center gap-2`}
            >
              VIEW PORTFOLIO
              <span className="text-yellow-500">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
