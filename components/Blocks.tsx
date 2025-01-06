import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import axios from 'axios';

const Block: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children, ...rest }) => {
    return (
      <motion.div
        variants={{
          initial: {
            scale: 0.5,
            y: 50,
            opacity: 0,
          },
          animate: {
            scale: 1,
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        className={twMerge(
          "col-span-6 rounded-lg border border-zinc-700 bg-zinc-800 p-8",
          className
        )}
        {...rest}
      >
        {children}
      </motion.div>
    );
  };
  

const HeaderBlock: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => (
  <Block className="col-span-12 text-3xl leading-snug">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-6 size-20 rounded-full"
    />
    <h1 className="mb-12 text-5xl font-medium leading-tight">
      Hi, I'm Michaellie.{" "}
      <span className="text-zinc-400">
        I'm the founder of Gokil Studio, a dynamic startup team specializing in innovative photography, videography, and game development solutions.
      </span>
    </h1>
    <a
      href="#"
      onClick={onContactClick}
      className="flex items-center gap-2 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My dream is to create. {" "}
      <span className="text-zinc-400 ">
        I love capturing important moments for people, not only still images but motion videos that can get you back to the moment. I also love creating games that will be part of someone's memories with their friends. I also do small projects on my GitHub page, from Discord bots to websites like this one.
      </span>
    </p>
  </Block>
);

const PhotographyBlock = () => {
  const images = [
    "/images/photography/ASCE.jpg",
    "/images/photography/portrait.jpg",
    "/images/photography/TunjunganSign.jpg",
    "/images/photography/urban.jpg"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Block className="col-span-12 md:col-span-8">
      <h2 className="mb-4 text-3xl">Photography</h2>
      <div className="relative w-full" style={{ paddingBottom: '75%' }}>
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Photography ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>
    </Block>
  );
};

const PhotographyServiceBlock = () => (
  <Block className="col-span-12 md:col-span-4"> {/* Adjusted to take remaining space */}
    <h2 className="mb-4 text-3xl">Photography Services</h2>
    <p className="mb-4 text-lg text-zinc-400">
      I offer professional photography services for various occasions. Whether it's a wedding, portrait, or event, I capture moments beautifully.
    </p>
    <h3 className="mb-2 text-2xl">Pricing</h3>
    <ul className="space-y-2">
      <li className="text-xl">Wedding Photography: Coming Soon</li>
      <li className="text-xl">Portrait Photography: Coming Soon</li>
      <li className="text-xl">Event Photography: Coming Soon</li>
    </ul>
  </Block>
);

const VideographyServiceBlock = () => (
  <Block className="col-span-12 md:col-span-4"> {/* Adjusted to take remaining space */}
    <h2 className="mb-4 text-3xl">Videography Services</h2>
    <p className="mb-4 text-lg text-zinc-400">
      I provide high-quality videography services for various events and projects. From weddings to corporate videos, I deliver stunning visuals.
    </p>
    <h3 className="mb-2 text-2xl">Pricing</h3>
    <ul className="space-y-2">
      <li className="text-xl">Wedding Videography: Coming Soon</li>
      <li className="text-xl">Corporate Videos: Coming Soon</li>
      <li className="text-xl">Event Videography: Coming Soon</li>
    </ul>
  </Block>
);

const VideographyBlock = () => (
  <Block className="col-span-12 md:col-span-8"> {/* Adjusted to match PhotographyBlock */}
    <h2 className="mb-4 text-3xl">Videography</h2>
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
      <iframe
        src="https://www.youtube.com/embed/KquzybSCKwA?autoplay=1&mute=1&controls=0"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/9fHNeifuvJg?autoplay=1&mute=1&controls=0"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/Agy1ENbWhu0?autoplay=1&mute=1&controls=0"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-4">
    <FiMapPin className="text-4xl" />
    <p className="text-center text-xl text-zinc-400">Surabaya</p>
  </Block>
);

const TestimonialsBlock = () => (
  <Block className="col-span-12 md:col-span-4"> {/* Adjusted to take less space */}
    <h2 className="mb-4 text-3xl">Testimonials</h2>
    <div className="space-y-4">
      <blockquote className="p-4 border-l-4 border-red-300 bg-zinc-800 rounded">
        <p className="text-xl">"Took a while to finish my order but i was not disappointed. Communicated well with customer, shown value in the work"</p>
        <footer className="mt-2 text-zinc-400">- volt5231</footer>
      </blockquote>
      <blockquote className="p-4 border-l-4 border-red-300 bg-zinc-800 rounded">
        <p className="text-xl">"accomplished the task as communicated, met my fiverr expectations. Overall i would recommend with proper communication."</p>
        <footer className="mt-2 text-zinc-400">- rnchana</footer>
      </blockquote>
    </div>
  </Block>
);

const ServicesBlock = () => (
  <Block className="col-span-12 md:col-span-6">
    <h2 className="mb-4 text-3xl">Services</h2>
    <ul className="space-y-2">
      <li className="text-xl">Photography</li>
      <li className="text-xl">Videography</li>
      <li className="text-xl">Web Development</li>
      <li className="text-xl">Game Development</li>
    </ul>
  </Block>
);

const ContactBlock = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await axios.post('/api/contact', form);
      setStatus(response.data.message);
      setForm({ name: '', email: '', message: '' });
    } catch (error: any) {
      setStatus(error.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <Block className="col-span-12 md:col-span-8"> {/* Adjusted to take remaining space */}
      <h2 className="mb-4 text-3xl">Contact Me</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-4 py-2 transition-colors focus:border-red-300 focus:outline-0"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-4 py-2 transition-colors focus:border-red-300 focus:outline-0"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-4 py-2 transition-colors focus:border-red-300 focus:outline-0"
          required
        />
        <button
          type="submit"
          className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-4 py-2 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
        >
          <FiMail /> Send Message
        </button>
        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </Block>
  );
};

export const RevealBento: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  return (
    <div className="min-h-screen px-4 py-8">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-7xl grid-flow-dense grid-cols-12 gap-10"
      >
        <HeaderBlock onContactClick={onContactClick} />
        <AboutBlock />
        <PhotographyBlock />
        <PhotographyServiceBlock />
        <VideographyServiceBlock />
        <VideographyBlock />
        <ContactBlock />
        <TestimonialsBlock />
      </motion.div>
    </div>
  );
};

export default RevealBento;