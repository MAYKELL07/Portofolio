// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCamera, FaVideo, FaGamepad, FaGithub } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const ContactButton = dynamic(() => import('./ContactButton'));
const ThemeToggle = dynamic(() => import('./ThemeToggle'));

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-primary dark:bg-gray-800 transition-colors duration-300 font-montserrat">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.svg" alt="Gokil Studio Logo" width={50} height={50} />
        </Link>
        <span className="text-white dark:text-gray-200 text-xl font-bold">Gokil Studio</span>
      </div>
      
      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/gallery/photography" className="flex items-center space-x-2 text-white dark:text-gray-200 hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300">
              <FaCamera />
              <span>Photography</span>
            </Link>
          </li>
          <li>
            <Link href="/gallery/videography" className="flex items-center space-x-2 text-white dark:text-gray-200 hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300">
              <FaVideo />
              <span>Videography</span>
            </Link>
          </li>
          <li>
            <Link href="/gallery/games" className="flex items-center space-x-2 text-white dark:text-gray-200 hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300">
              <FaGamepad />
              <span>Games</span>
            </Link>
          </li>
          <li>
            <Link href="/gallery/github" className="flex items-center space-x-2 text-white dark:text-gray-200 hover:text-accent dark:hover:text-yellow-400 transition-colors duration-300">
              <FaGithub />
              <span>GitHub</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* Contact and Theme Toggle */}
      <div className="flex items-center space-x-4">
        <ContactButton className="px-4 py-2 text-white bg-accent rounded-md hover:bg-accent-dark transition-colors duration-300" />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
