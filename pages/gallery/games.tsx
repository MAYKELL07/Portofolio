import Head from 'next/head';
import Header from '../../components/Header';

const Games: React.FC = () => {
  return (
    <>
      <Head>
        <title>Games - Gokil Studio</title>
        <meta name="description" content="Explore the games portfolio of Gokil Studio." />
      </Head>
      <Header isOnHero={false} />
      <div className="text-center mt-12 pt-28">
        <h1 className="font-bebas-neue-light text-9xl">Coming Soon</h1>
        <a href="https://www.fiverr.com/maykellie?up_rollout=true" target="_blank" rel="noopener noreferrer">
          <button className="mt-5 px-5 py-2 text-lg bg-white bg-opacity-20 border-none rounded-lg backdrop-blur text-white cursor-pointer">
            Visit Fiverr
          </button>
        </a>
      </div>
    </>
  );
};

export default Games;