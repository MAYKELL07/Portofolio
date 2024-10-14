import Image from 'next/image';
import ContactButton from './ContactButton';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/background.jpg"
        alt="Michaellie F.Y."
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl font-bold">Michaellie F.Y.</h1>
        <p className="mt-4 text-2xl">Your Tagline Here</p>
        <ContactButton />
      </div>
    </section>
  );
};

export default Hero;
