import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCamera, FaVideo, FaGamepad, FaGithub, FaWhatsapp, FaEllipsisV } from 'react-icons/fa';
import { TfiLayoutLineSolid } from "react-icons/tfi";

interface HeaderProps {
  isOnHero: boolean;
}

const Header: React.FC<HeaderProps> = ({ isOnHero }) => {

  return (
    <header className={`fixed top-0 left-0 w-full z-50 p-4 transition-colors duration-300 ${isOnHero ? 'bg-transparent' : 'bg-[#272727]/50 backdrop-blur-md rounded-b-3xl'}`}>
      <div className="grid grid-cols-2 md:grid-cols-7 items-center justify-between mx-auto">
        {/* Logo and Title */}
        <Link href="/" className="flex">
          <div className="flex items-center space-x-3 bg-[#272727] p-2 rounded-xl">
            <Image src="/images/logo.svg" alt="Logo" width={40} height={40} className="rounded-xl" />
            <span className="text-white text-4xl font-bebas-neue-light">GOKILSTUDIO</span>
          </div>
        </Link>

        {/* Photography */}
        <Link
          href="/gallery/photography"
          className="hidden md:flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300 w-20 justify-self-end"
        >
          <FaCamera className="text-2xl" />
          <span className="text-3xl font-bebas-neue-light">Photography</span>
        </Link>
        
        {/* GitHub */}
        <Link
          href="/gallery/github"
          className="hidden md:flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300 w-20 justify-self-end"
        >
          <FaGithub className="text-2xl" />
          <span className="text-3xl font-bebas-neue-light">GitHub</span>
        </Link>

        {/* Divider */}
        <div className="hidden md:flex items-center justify-center">
          <TfiLayoutLineSolid className="text-gray-300 text-5xl" />
        </div>

        {/* Games */}
        <Link
          href="/gallery/games"
          className="hidden md:flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300 w-20"
        >
          <FaGamepad className="text-2xl" />
          <span className="text-3xl font-bebas-neue-light">Games</span>
        </Link>

        {/* Videography */}
        <Link
          href="/gallery/videography"
          className="hidden md:flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-300 w-20"
        >
          <FaVideo className="text-2xl" />
          <span className="text-3xl font-bebas-neue-light">Videography</span>
        </Link>

        {/* Call-to-Action Buttons */}
        <div className="relative flex items-center justify-end space-x-4">
          <div className="absolute right-5 hover:right-[calc(4rem+58px)] transition-all duration-500 flex items-center justify-between w-[calc(4rem+48px)] p-2 bg-transparent">
            <div className="relative group">
              <a href={`https://wa.me/${process.env.WHATSAPP_NUMBER}?text=Hey!%20I'm%20looking%20forward%20about%20your%20Services.`} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center w-10 h-10 bg-[#272727] rounded-xl overflow-hidden transition-all duration-300 group-hover:w-48">
                  <FaWhatsapp className="text-green-500 text-2xl absolute left-2 top-1/2 transform -translate-y-1/2" />
                  <span className="text-white text-sm ml-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    WhatsApp
                  </span>
                </button>
              </a>
            </div>

            <div className="relative group">
              <a href={process.env.INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center w-10 h-10 bg-[#272727] rounded-xl overflow-hidden transition-all duration-300 group-hover:w-48">
                  <Image src="/images/instagram-logo.png" alt="Instagram" width={24} height={24} className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                  <span className="text-white text-sm ml-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Instagram
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;