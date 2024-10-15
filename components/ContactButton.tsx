// components/ContactButton.tsx

import Link from 'next/link';

const ContactButton: React.FC = () => {
  return (
    <Link href="#contact" className="mt-6 px-6 py-3 bg-accent text-white rounded-full shadow-lg hover:bg-secondary transition">
      Contact Me
    </Link>
  );
};

export default ContactButton;
