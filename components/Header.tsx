import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCamera, FaVideo, FaGamepad, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4">
      <div className="flex items-center justify-between mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.svg" alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="text-white text-xl font-bold">Your Brand</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-10">
          <ul className="flex items-center space-x-6">
            {/* Photography and Videography */}
            <li>
              <Link
                href="/gallery/photography"
                className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaCamera className="text-2xl" />
                <span>Photography</span>
              </Link>
            </li>

            <li>
              <Link
                href="/gallery/videography"
                className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaVideo className="text-2xl" />
                <span>Videography</span>
              </Link>
            </li>
          </ul>

          {/* Divider */}
          <div className="w-px h-8 bg-gray-600"></div>

          <ul className="flex items-center space-x-10">
            {/* Games and GitHub */}
            <li>
              <Link
                href="/gallery/games"
                className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaGamepad className="text-2xl" />
                <span>Games</span>
              </Link>
            </li>

            <li>
              <Link
                href="/gallery/github"
                className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaGithub className="text-2xl" />
                <span>GitHub</span>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Call-to-Action Buttons */}
        <div className="relative flex items-center space-x-4">
          <div className="absolute right-5 hover:right-[calc(4rem+58px)] transition-all duration-500 flex items-center justify-between w-[calc(4rem+48px)] p-2 bg-transparent">
            <div className="relative group">
              <button className="flex items-center w-10 h-10 bg-green-600 rounded-xl overflow-hidden transition-all duration-300 group-hover:w-48">
                <FaWhatsapp className="text-white text-2xl absolute left-2 top-1/2 transform -translate-y-1/2" />
                <span className="text-white text-sm ml-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  WhatsApp
                </span>
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center w-10 h-10 bg-pink-500 rounded-xl overflow-hidden transition-all duration-300 group-hover:w-48">
                <FaInstagram className="text-white text-2xl absolute left-2 top-1/2 transform -translate-y-1/2" />
                <span className="text-white text-sm ml-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Instagram
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;