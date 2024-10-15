import Image from "next/legacy/image";
import { motion } from 'framer-motion';

interface GalleryRowProps {
  title: string;
  items: { id: number; title: string; image: string; link: string }[];
}

const GalleryRow: React.FC<GalleryRowProps> = ({ title, items }) => {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {items.map(item => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image src={item.image} alt={item.title} width={400} height={300} objectFit="cover" />
              <div className="p-4">
                <h3 className="text-xl font-medium">{item.title}</h3>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GalleryRow;
