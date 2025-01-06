import Head from 'next/head';
import Header from '../../components/Header';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';
import { GetServerSideProps } from 'next';

interface PhotographyItem {
  id: number;
  title: string;
  image: string;
}

interface PhotographyProps {
  photographyItems: PhotographyItem[];
}

const Photography: React.FC<PhotographyProps> = ({ photographyItems }) => {
  const [selectedImage, setSelectedImage] = useState<PhotographyItem | null>(null);

  const handleImageClick = (item: PhotographyItem) => {
    setSelectedImage(item); 
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    if (selectedImage) {
      const currentIndex = photographyItems.findIndex(item => item.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % photographyItems.length;
      setSelectedImage(photographyItems[nextIndex]);
    }
  };

  const handlePrevImage = () => {
    if (selectedImage) {
      const currentIndex = photographyItems.findIndex(item => item.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + photographyItems.length) % photographyItems.length;
      setSelectedImage(photographyItems[prevIndex]);
    }
  };

  return (
    <>
      <Head>
        <title>Photography - Gokil Studio</title>
        <meta name="description" content="Explore the photography portfolio of Gokil Studio." />
      </Head>
      <Header isOnHero={false} />
      <div className="pt-28">
        <div className="columns-4 gap-4">
          {photographyItems.map(item => (
            <div
              key={item.id}
              className="break-inside-avoid mb-4 relative cursor-pointer"
              onClick={() => handleImageClick(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white m-0 p-2 opacity-0 transition-opacity duration-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 bg-transparent border-none text-white text-2xl cursor-pointer">×</button>
            <button onClick={handlePrevImage} className="absolute top-1/2 left-4 bg-transparent border-none text-white text-2xl cursor-pointer">‹</button>
            <Image src={selectedImage.image} alt={selectedImage.title} width={800} height={600} className="w-auto h-4/5 rounded-lg" />
            <button onClick={handleNextImage} className="absolute top-1/2 right-4 bg-transparent border-none text-white text-2xl cursor-pointer">›</button>
          </div>
        )}
      </div>
      <div className="text-center mt-12 mb-96">
        <h1 className="font-bebas-neue-light text-9xl">Coming Soon</h1>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const imagesDir = path.join(process.cwd(), 'public/images/photography');
  const files = fs.readdirSync(imagesDir);
  const photographyItems = files.map((file, index) => ({
    id: index + 1,
    title: file.replace(/\.[^/.]+$/, '').replace(/_/g, ' '),
    image: `/images/photography/${file}`
  }));

  return {
    props: {
      photographyItems
    }
  };
};

export default Photography;
