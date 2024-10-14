import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-primary">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Gokil Studio Logo" width={50} height={50} />
        <span className="ml-3 text-white text-xl font-bold">Gokil Studio</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/gallery/photography"><a className="text-white">Photography</a></Link></li>
          <li><Link href="/gallery/videography"><a className="text-white">Videography</a></Link></li>
          <li><Link href="/gallery/games"><a className="text-white">Games</a></Link></li>
          <li><Link href="/gallery/github"><a className="text-white">GitHub</a></Link></li>
        </ul>
      </nav>
      <ContactButton />
    </header>
  );
};

export default Header;
