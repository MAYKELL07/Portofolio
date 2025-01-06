import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-white">
          &times;
        </button>
        <h2 className="text-3xl font-semibold text-center mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif', fontWeight: 'bold' }}>
          Contact Me
        </h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 border rounded"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-3 border rounded"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="relative px-6 py-3 bg-accent text-white rounded border-2 border-transparent transition-all duration-300 hover:bg-secondary hover:border-white"
              style={{ overflow: 'hidden' }}
            >
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 transition-transform transform translate-x-full group-hover:translate-x-0">
                <span className="bg-white text-accent rounded-full p-2">
                  <FiArrowRight className="w-4 h-4 text-black" />
                </span>
              </span>
              <span className="relative z-10">Send Message</span>
            </button>
            {status && <p className="text-center mt-4">{status}</p>}
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href={process.env.INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg text-lg font-medium shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              style={{ transition: 'all 0.3s ease-in-out', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              Instagram
            </a>
            <a
              href={`https://wa.me/${process.env.WHATSAPP_NUMBER}?text=Hey!%20I'm%20looking%20forward%20about%20your%20Services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg text-lg font-medium shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              style={{ transition: 'all 0.3s ease-in-out', backdropFilter: 'blur(10px)' }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
