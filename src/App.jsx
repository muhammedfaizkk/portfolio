import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timeOpen, setTimeOpen] = useState(0);

  useEffect(() => {
    // Check if user previously set dark mode
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Start loading animation
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Update time open every second
    const timeTimer = setInterval(() => {
      setTimeOpen(prev => prev + 1);
    }, 1000);

    return () => {
      clearTimeout(loadTimer);
      clearInterval(timeTimer);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-[#0D0D0D]' : 'bg-white'} flex flex-col items-center justify-center`}>
        <div className="relative">
          {/* F Animation */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ duration: 0.5 }}
            className={`w-4 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} absolute left-0`}
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`h-4 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} absolute top-0`}
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={`h-4 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} absolute top-[38px]`}
          />
          
          {/* Website Open Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className={`mt-24 text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} timeOpen={timeOpen} formatTime={formatTime} />
        <Skills darkMode={darkMode} />
        <WorkExperience darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
