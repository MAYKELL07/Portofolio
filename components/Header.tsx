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
    <header className="sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between p-5 bg-primary/70 backdrop-blur-lg rounded-b-2xl shadow-md">
      {/* Logo and Gokil Studio Section */}
      <div className="flex items-center space-x-3">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.svg" alt="Gokil Studio Logo" width={50} height={50} />
          <span className="text-white dark:text-gray-200 text-xl font-bold">Gokil Studio</span>
        </Link>
      </div>
      
      {/* Navigation Links */}
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-wrap justify-center space-x-6 md:space-x-8">
          <li>
            <Link href="/gallery/photography" className="flex items-center space-x-2 text-white dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
              <FaCamera />
              <span>Photography</span>
            </Link>
          </li>
          <li>
            <Link href="/gallery/videography" className="flex items-center space-x-2 text-white dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
              <FaVideo />
              <span>Videography</span>
            </Link>
          </li>
          <li>
            <Link href="/gallery/games" className="flex items-center space-x-2 text-white dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
              <FaGamepad />
              <span>Games</span>
            </Link>
          </li>
          <li>
            <Link href="/gallery/github" className="flex items-center space-x-2 text-white dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
              <FaGithub />
              <span>GitHub</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* Contact and Theme Toggle */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <div className="flex items-center">
          <ContactButton />
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
