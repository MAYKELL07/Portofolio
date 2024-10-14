import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GalleryRow from '../components/GalleryRow';

const Home: React.FC = () => {
  const photographyItems = [
    // Populate with your photography projects
    { id: 1, title: 'Wedding Photography', image: '/images/photography1.jpg', link: '/gallery/photography' },
    // ...more items
  ];

  const videographyItems = [
    // Populate with your videography projects
    { id: 1, title: 'Wedding Videography', image: '/images/videography1.jpg', link: '/gallery/videography' },
    // ...more items
  ];

  const gamesItems = [
    // Populate with your game projects
    { id: 1, title: 'Awesome Game', image: '/images/game1.png', link: 'https://fiverr.com/yourprofile' },
    // ...more items
  ];

  const githubItems = [
    // Populate with your GitHub projects
    { id: 1, title: 'GitHub Project', image: '/images/github1.png', link: 'https://github.com/yourprofile' },
    // ...more items
  ];

  return (
    <>
      <Head>
        <title>Michaellie F.Y. - Gokil Studio</title>
        <meta name="description" content="Gokil Studio by Michaellie F.Y. - Professional photography, videography, and game development." />
        <meta name="keywords" content="Photography, Videography, Game Development, GitHub Projects, Gokil Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Tags for SEO */}
        <meta property="og:title" content="Michaellie F.Y. - Gokil Studio" />
        <meta property="og:description" content="Professional photography, videography, and game development services." />
        <meta property="og:image" content="/images/background.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <Hero />
      <GalleryRow title="Photography" items={photographyItems} />
      <GalleryRow title="Videography" items={videographyItems} />
      <GalleryRow title="Games" items={gamesItems} />
      <GalleryRow title="GitHub Projects" items={githubItems} />
      <footer className="py-8 bg-primary text-white text-center">
        <p>&copy; {new Date().getFullYear()} Gokil Studio. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
