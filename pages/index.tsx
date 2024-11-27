import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'));
const GalleryRow = dynamic(() => import('../components/GalleryRow'));
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

  return (
    <>
      <Head>
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

      <Header />
      <Hero3D />

      {isLoading && <p className="text-center py-4">Loading galleries...</p>}
      {error && <p className="text-center py-4 text-red-500">{error}</p>}

      {!isLoading && !error && (
        <>
          {galleries.photography.length > 0 && (
            <GalleryRow title="Photography" items={galleries.photography} />
          )}
          {galleries.videography.length > 0 && (
            <GalleryRow title="Videography" items={galleries.videography} />
          )}
          {galleries.games.length > 0 && (
            <GalleryRow title="Games" items={galleries.games} />
          )}
          <GalleryRow title="GitHub Projects" items={galleries.games} />
        </>
      )}

      <footer className="py-8 bg-primary text-white text-center">
        <p>&copy; {new Date().getFullYear()} Gokil Studio. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
