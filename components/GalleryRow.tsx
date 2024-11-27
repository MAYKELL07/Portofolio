// components/GalleryRow.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: number;
  title: string;
  subtitle?: string;
  image?: string;
  link?: string;
}

interface GalleryRowProps {
  title: string;
  items?: GalleryItem[];
}

const GalleryRow: React.FC<GalleryRowProps> = ({ title, items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleItems = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % items.length
    );
  };

  const getVisibleItems = () => {
    return Array.from({ length: maxVisibleItems }, (_, i) => 
      items[(currentIndex + i) % items.length]
    ).filter(item => item?.link && item?.image);
  };

  const visibleItems = getVisibleItems();

  useEffect(() => {
    if (!items || items.length === 0) {
      console.warn("Warning: 'items' array is empty or undefined in GalleryRow");
    }
    items.forEach((item, index) => {
      if (!item.link || !item.image) {
        console.warn(`Item at index ${index} is missing 'link' or 'image'`, item);
      }
    });
  }, [items]);

  if (!items || items.length === 0) return <p>Loading gallery items...</p>;

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          {title}
        </h2>
        <div className="relative flex justify-center items-center">
          <button
            aria-label="Previous Slide"
            className="absolute left-0 z-10 p-2 bg-gray-700 text-white rounded-full focus:outline-none hover:bg-gray-800"
            onClick={prevSlide}
          >
            <FaArrowLeft size={20} />
          </button>

          <div className="flex overflow-hidden w-full max-w-4xl">
            {visibleItems.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className="relative w-80 flex-shrink-0 inline-block rounded-lg shadow-lg transition-transform"
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ opacity: index === 1 ? 1 : 0.7, scale: index === 1 ? 1 : 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Link href={item.link ?? "#"} className="group">
                  <Image
                    src={item.image ?? "/images/placeholder.png"}
                    alt={item.title}
                    priority={index === 0} // LCP priority for the first visible image
                    width={320}
                    height={288}
                    className="w-full h-72 object-cover rounded-lg"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            aria-label="Next Slide"
            className="absolute right-0 z-10 p-2 bg-gray-700 text-white rounded-full focus:outline-none hover:bg-gray-800"
            onClick={nextSlide}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryRow;
