// components/Header.tsx

import Link from 'next/link';
import Image from 'next/image';
import ContactButton from './ContactButton';
import ThemeToggle from './ThemeToggle'; // Import the toggle button

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-primary dark:bg-gray-800 transition-colors duration-300">
      <div className="flex items-center">
        <Link href="/">
          <a>
            <Image src="/images/logo.svg" alt="Gokil Studio Logo" width={50} height={50} />
          </a>
        </Link>
        <span className="ml-3 text-white dark:text-gray-200 text-xl font-bold">Gokil Studio</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/gallery/photography">
              <a className="text-white dark:text-gray-200 hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300">
                Photography
              </a>
            </Link>
          </li>
          <li>
            <Link href="/gallery/videography">
              <a className="text-white dark:text-gray-200 hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300">
                Videography
              </a>
            </Link>
          </li>
          <li>
            <Link href="/gallery/games">
              <a className="text-white dark:text-gray-200 hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300">
                Games
              </a>
            </Link>
          </li>
          <li>
            <Link href="/gallery/github">
              <a className="text-white dark:text-gray-200 hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300">
                GitHub
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <ContactButton />
        <ThemeToggle /> {/* Add the toggle button here */}
      </div>
    </header>
  );
};

export default Header;
