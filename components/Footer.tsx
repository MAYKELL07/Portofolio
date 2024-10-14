import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-primary text-white text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Gokil Studio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
