import Head from 'next/head';
import Header from '../../components/Header';

const Videography: React.FC = () => {
  return (
    <>
      <Head>
        <title>Videography - Gokil Studio</title>
        <meta name="description" content="Explore the videography portfolio of Gokil Studio." />
      </Head>
      <Header isOnHero={false} />
      <div className="text-center mt-12 pt-28">
        <h1 className="font-bebas-neue-light text-9xl">Coming Soon</h1>
      </div>
    </>
  );
};

export default Videography;
