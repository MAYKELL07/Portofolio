// components/Header.tsx

import Link from 'next/link';
import Image from 'next/image';
import ContactButton from './ContactButton';
import ThemeToggle from './ThemeToggle'; // Import the toggle button

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-primary dark:bg-gray-800 transition-colors duration-300">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.svg" alt="Gokil Studio Logo" width={50} height={50} />
        </Link>
        <span className="ml-3 text-white dark:text-gray-200 text-xl font-bold">Gokil Studio</span>
      </div>
      
      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/gallery/photography"
              className="text-white dark:text-gray-200 hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300"
            >
              Photography
            </Link>
          </li>
          <li>
            <Link
              href="/gallery/videography"
              className="text-white dark:text-gray-200 hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300"
            >
              Videography
            </Link>
          </li>
          <li>
            <Link
              href="/gallery/games"
              className="text-white dark:text-gray-200 hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300"
            >
              Games
            </Link>
          </li>
          <li>
            <Link
              href="/gallery/github"
              className="text-white dark:text-gray-200 hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* Contact and Theme Toggle */}
      <div className="flex items-center space-x-4">
        <ContactButton />
        <ThemeToggle /> {/* Dark Mode Toggle Button */}
      </div>
    </header>
  );
};

export default Header;
