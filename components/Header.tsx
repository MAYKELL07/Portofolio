// components/Header.tsx

import Link from 'next/link';
import Image from 'next/image';
import ContactButton from './ContactButton';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-primary">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Gokil Studio Logo" width={50} height={50} />
        <span className="ml-3 text-white text-xl font-bold">Gokil Studio</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/gallery/photography" className="text-white">
              Photography
            </Link>
          </li>
          <li>
            <Link href="/gallery/videography" className="text-white">
              Videography
            </Link>
          </li>
          <li>
            <Link href="/gallery/games" className="text-white">
              Games
            </Link>
          </li>
          <li>
            <Link href="/gallery/github" className="text-white">
              GitHub
            </Link>
          </li>
        </ul>
      </nav>
      <ContactButton />
    </header>
  );
};

export default Header;
