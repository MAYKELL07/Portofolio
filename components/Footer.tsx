// components/Footer.tsx

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-primary dark:bg-gray-800 text-white dark:text-gray-200 text-center transition-colors duration-300">
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300"
        >
          <FaTwitter size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Gokil Studio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
