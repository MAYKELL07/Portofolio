/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import Header from '../../components/Header';
import GalleryRow from '../../components/GalleryRow';

const Games: React.FC = () => {
  const gamesItems = [
    { id: 1, title: 'Wedding Photography', subtitle: 'Capturing special moments', image: '/images/photography/photography1.png', link: '/gallery/photography' },
    { id: 2, title: 'Street Portraits', subtitle: 'Urban vibes', image: '/images/photography/photography2.png', link: '/gallery/photography' },
    { id: 3, title: 'Landscape Shoots', subtitle: 'Nature’s beauty', image: '/images/photography/photography3.png', link: '/gallery/photography' },
    // More items...
  ];
  

  return (
    <>
      <Head>
        <title>Photography - Gokil Studio</title>
        <meta name="description" content="Explore the photography portfolio of Gokil Studio." />
      </Head>
      <Header />
      <GalleryRow title="Games" items={gamesItems} />
    </>
  );
};

export default Games;
