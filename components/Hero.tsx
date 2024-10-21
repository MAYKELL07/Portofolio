import Image from "next/legacy/image";
import ContactButton from './ContactButton';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div className="relative w-full h-full">
        <Image
          src="/images/backgrounds/background1.png"
          alt="Hero Background"
          layout="fill"
          style={{ objectFit: 'cover' }}
          quality={100}
          priority // Optional: Marks this image as high priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-bold">Welcome to Gokil Studio</h1>
          <p className="mt-4 text-2xl">Capturing Moments, Creating Memories</p>
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
