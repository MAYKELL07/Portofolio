import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface GalleryItem {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  link: string;
}

interface GalleryRowProps {
  title: string;
  items: GalleryItem[];
}

const GalleryRow: React.FC<GalleryRowProps> = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleItems = 3;
  const idleTimeout = useRef<NodeJS.Timeout | null>(null); // Track idle timeout
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null); // Track auto-scroll interval
  const idleDelay = 5000; // 5 seconds
  const resumeDelay = 10000; // 10 seconds after user interaction

  const prevSlide = () => {
    resetIdleTimer(); // Reset idle timer
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    resetIdleTimer(); // Reset idle timer
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const getVisibleItems = () => {
    return Array.from({ length: maxVisibleItems }, (_, i) =>
      items[(currentIndex + i) % items.length]
    );
  };

  const resetIdleTimer = () => {
    if (idleTimeout.current) clearTimeout(idleTimeout.current);
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);

    // Wait for the resume delay before restarting auto-scroll
    idleTimeout.current = setTimeout(() => {
      startAutoScroll();
    }, resumeDelay);
  };

  const startAutoScroll = () => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    autoScrollInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, idleDelay);
  };

  // Start auto-scroll on mount
  useEffect(() => {
    startAutoScroll();
    return () => {
      // Cleanup on unmount
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    };
  }, []);

  const visibleItems = getVisibleItems();

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          {title}
        </h2>
        <div className="relative flex justify-center items-center backdrop-blur-md">
          <button
            aria-label="Previous Slide"
            className="absolute left-0 z-10 p-3 bg-gray-700 text-white rounded-full focus:outline-none hover:bg-gray-800"
            onClick={prevSlide}
          >
            <FaArrowLeft size={20} />
          </button>

          <div className="flex items-center justify-center overflow-hidden w-full max-w-5xl relative min-h-[550px]">
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative flex-shrink-0 inline-block ${
                  index === 1 ? "w-[400px] h-[500px] z-50" : "w-[300px] h-[400px] z-10"
                } rounded-lg shadow-lg transition-all`}
                initial={{ opacity: 0.7, scale: 0.8 }}
                animate={{
                  opacity: index === 1 ? 1 : 0.7,
                  scale: index === 1 ? 1.1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Link href={item.link}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </Link>
                {index === 1 && (
                  <div className="absolute bottom-4 left-4 p-4 bg-black bg-opacity-60 text-white rounded-lg">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-sm mt-1">{item.subtitle}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <button
            aria-label="Next Slide"
            className="absolute right-0 z-10 p-3 bg-gray-700 text-white rounded-full focus:outline-none hover:bg-gray-800"
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
