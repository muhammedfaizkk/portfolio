import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <footer className="transition-colors duration-300 bg-gray-50 dark:bg-[#0D0D0D] text-gray-600 dark:text-white py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 dark:text-gray-400">© 2024 Faiz KK. All rights reserved.</p>
          </div>
          
          <div className="flex gap-4">
            {[
              { icon: FaGithub, link: "#" },
              { icon: FaLinkedinIn, link: "#" },
              { icon: FaTwitter, link: "#" },
              { icon: FaInstagram, link: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors"
              >
                <social.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 