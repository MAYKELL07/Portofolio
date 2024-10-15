import Head from 'next/head';
import Header from '../../components/Header';
import GalleryRow from '../../components/GalleryRow';

const Videography: React.FC = () => {
  const videographyItems = [
    // Populate with your videography projects
    { id: 1, title: 'Wedding videography', image: '/images/photography/photography1.png', link: '/gallery/photography' },
    // ...more items
  ];

  return (
    <>
      <Head>
        <title>Photography - Gokil Studio</title>
        <meta name="description" content="Explore the photography portfolio of Gokil Studio." />
      </Head>
      <Header />
      <GalleryRow title="Photography" items={videographyItems} />
    </>
  );
};

export default Videography;
