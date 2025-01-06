import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Ensure environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.CONTACT_EMAIL) {
      return res.status(500).json({ message: 'Email environment variables are not set.' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail options
    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: `Contact Form Submission from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
