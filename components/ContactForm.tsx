import { useState } from 'react';
import axios from 'axios';
import React from 'react';

const ContactForm: React.FC = () => {
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
    <section id="contact" className="py-12 bg-gray-200">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
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
          <button type="submit" className="px-6 py-3 bg-accent text-white rounded hover:bg-secondary transition">
            Send Message
          </button>
          {status && <p className="text-center mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
