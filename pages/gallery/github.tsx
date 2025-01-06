import Head from 'next/head';
import Header from '../../components/Header';

const GitHub: React.FC = () => {
  return (
    <>
      <Head>
        <title>GitHub - Gokil Studio</title>
        <meta name="description" content="Explore the GitHub portfolio of Gokil Studio." />
      </Head>
      <Header isOnHero={false} />
      <div className="text-center mt-12 pt-28">
        <h1 className="font-bebas-neue-light text-9xl">Coming Soon</h1>
        <a href="https://github.com/MAYKELL07" target="_blank" rel="noopener noreferrer">
          <button className="mt-5 px-5 py-2 text-lg bg-white bg-opacity-20 border-none rounded-lg backdrop-blur text-white cursor-pointer">
            Visit GitHub
          </button>
        </a>
      </div>
    </>
  );
};

export default GitHub;
