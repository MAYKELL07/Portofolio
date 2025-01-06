import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import ContactForm from '../components/ContactForm';

const Header = dynamic(() => import('../components/Header'));
const RevealBento = dynamic(() => import('../components/Blocks'), { ssr: false });
const Hero3D = dynamic(() => import('../components/Hero3D'), { ssr: false });

interface GalleryData {
  photography: GalleryItem[];
  videography: GalleryItem[];
  games: GalleryItem[];
}

interface GalleryItem {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  link: string;
}

const Home: React.FC = () => {
  const [galleries, setGalleries] = useState<GalleryData>({
    photography: [],
    videography: [],
    games: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isHeaderOnHero, setIsHeaderOnHero] = useState(true);
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  const toggleContactForm = () => {
    setIsContactFormVisible(!isContactFormVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/data/gallery/Gallery.json');
        if (!response.ok) throw new Error('Failed to fetch gallery data');
        const data = await response.json();
        setGalleries(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load gallery data.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderOnHero(window.scrollY < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>
        <title>Michaellie F.Y. - Gokil Studio</title>
        <meta
          name="description"
          content="Gokil Studio by Michaellie F.Y. - Professional photography, videography, and game development."
        />
        <meta
          name="keywords"
          content="Photography, Videography, Game Development, GitHub Projects, Gokil Studio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags for SEO */}
        <meta property="og:title" content="Michaellie F.Y. - Gokil Studio" />
        <meta
          property="og:description"
          content="Professional photography, videography, and game development services."
        />
        <meta property="og:image" content="/images/background/background1.jpg" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header isOnHero={isHeaderOnHero} />
      <Hero3D onContactClick={toggleContactForm} />  

     {!isLoading && !error && (
        <div id="gallery-rows" className="relative">
          <div className="relative z-10">
            <RevealBento onContactClick={toggleContactForm} />
          </div>
        </div>
      )}

      {isContactFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ContactForm onClose={toggleContactForm} />
        </div>
      )}

      <footer className="py-8 bg-primary text-white text-center">
        <p>&copy; {new Date().getFullYear()} Gokil Studio. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
