import Head from 'next/head';
import Header from '../../components/Header';
import GalleryRow from '../../components/GalleryRow';

const Photography: React.FC = () => {
  const photographyItems = [
    // Populate with your photography projects
    { id: 1, title: 'Wedding Photography', image: '/images/photography/photography1.png', link: '/gallery/photography' },
    { id: 2, title: 'Wedding Photography', image: '/images/photography/photography1.png', link: '/gallery/photography' },
    { id: 3, title: 'Wedding Photography', image: '/images/photography/photography1.png', link: '/gallery/photography' },
    // ...more items
  ];

  return (
    <>
      <Head>
        <title>Photography - Gokil Studio</title>
        <meta name="description" content="Explore the photography portfolio of Gokil Studio." />
      </Head>
      <Header />
      <GalleryRow title="Photography" items={photographyItems} />
    </>
  );
};

export default Photography;
