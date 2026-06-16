import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Path to testimonials file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const testimonialsFilePath = path.join(__dirname, 'testimonials.json');

// Middleware
app.use(cors());
app.use(express.json());

// Check SMTP configurations
const isSmtpConfigured = !!(process.env.SMTP_USER && process.env.SMTP_PASS);

if (!isSmtpConfigured && process.env.NODE_ENV !== 'production') {
  console.warn('\n==================================================================');
  console.warn('⚠️  WARNING: SMTP credentials (SMTP_USER & SMTP_PASS) not set in .env');
  console.warn('Form registrations will be logged to the console but emails will NOT be sent.');
  console.warn('To enable emails, create a .env file with your SMTP credentials.');
  console.warn('==================================================================\n');
}

// Nodemailer Transporter
let transporter;
if (isSmtpConfigured) {
  const isGmail = process.env.SMTP_USER.endsWith('@gmail.com') || (process.env.SMTP_HOST && process.env.SMTP_HOST.includes('gmail.com'));
  
  if (isGmail) {
    console.log('Configuring Nodemailer with service: "gmail"');
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } else {
    console.log('Configuring Nodemailer with custom SMTP settings');
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
}

// Memory fallback for testimonials in read-only environments (like Vercel serverless)
let memoryTestimonials = [];

const loadTestimonials = () => {
  try {
    if (fs.existsSync(testimonialsFilePath)) {
      const data = fs.readFileSync(testimonialsFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading testimonials file:', error);
  }
  
  // Return memory list or empty array
  return memoryTestimonials;
};

const saveTestimonials = (list) => {
  try {
    fs.writeFileSync(testimonialsFilePath, JSON.stringify(list, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.warn('Warning: Could not write to disk (likely serverless environment). Saving to in-memory store.');
    memoryTestimonials = list;
    return false;
  }
};

// --- Testimonials API Endpoints ---

// Get all testimonials
app.get('/api/testimonials', (req, res) => {
  const testimonials = loadTestimonials();
  res.status(200).json(testimonials);
});

// Create a new testimonial
app.post('/api/testimonials', (req, res) => {
  const { name, role, company, quote, metric, metricLabel } = req.body;

  if (!name || !role || !company || !quote) {
    return res.status(400).json({
      success: false,
      message: 'Name, role, company, and quote are required.'
    });
  }

  const newTestimonial = {
    name,
    role,
    company,
    quote,
    metric: metric || 'Growth',
    metricLabel: metricLabel || 'Generated'
  };

  const currentList = loadTestimonials();
  currentList.push(newTestimonial);
  saveTestimonials(currentList);

  console.log(`[New Testimonial] Added by ${name} (${role} at ${company})`);
  res.status(201).json({
    success: true,
    message: 'Testimonial published successfully!',
    testimonials: currentList
  });
});

// --- Lead Registration API Endpoint ---
app.post('/api/register', async (req, res) => {
  const { name, email, linkedinUrl, goal } = req.body;

  if (!name || !email || !linkedinUrl || !goal) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields (name, email, linkedinUrl, goal) are required.' 
    });
  }

  console.log(`[New Registration Request] Name: ${name}, Email: ${email}, LinkedIn: ${linkedinUrl}, Goal: ${goal}`);

  const recipientEmails = [
    'syedkhalidnayaz@gmail.com',
    'opportunityedgeagency@gmail.com'
  ];

  if (!isSmtpConfigured) {
    console.log('Simulating registration success (SMTP credentials are not configured).');
    return res.status(200).json({
      success: true,
      message: 'Registration simulated successfully (SMTP not configured).'
    });
  }

  try {
    const mailOptions = {
      from: `"Opportunity Edge Leads" <${process.env.SMTP_USER}>`,
      to: recipientEmails.join(', '),
      subject: `🔥 New Lead Registration: ${name}`,
      text: `
New Lead Registration received:

Full Name: ${name}
Business Email: ${email}
LinkedIn Profile: ${linkedinUrl}
Growth Goal: ${goal}
      `,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f3ede2; border-radius: 12px; background-color: #fdfbf7;">
          <h2 style="color: #2c1e1b; border-bottom: 2px solid #8c5a3c; padding-bottom: 10px; margin-top: 0;">🔥 New Registration Received</h2>
          <p style="font-size: 16px; color: #4a3c38; line-height: 1.6;">
            A new lead has applied for a strategy session on the Opportunity Edge website.
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f3ede2;">
              <td style="padding: 10px; font-weight: bold; color: #2c1e1b; width: 180px;">Full Name:</td>
              <td style="padding: 10px; color: #2c1e1b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #2c1e1b;">Business Email:</td>
              <td style="padding: 10px; color: #2c1e1b;"><a href="mailto:${email}" style="color: #8c5a3c; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="background-color: #f3ede2;">
              <td style="padding: 10px; font-weight: bold; color: #2c1e1b;">LinkedIn Profile:</td>
              <td style="padding: 10px; color: #2c1e1b;"><a href="${linkedinUrl}" target="_blank" style="color: #8c5a3c; text-decoration: none;">${linkedinUrl}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #2c1e1b;">Growth Goal:</td>
              <td style="padding: 10px; color: #2c1e1b;">${goal}</td>
            </tr>
          </table>
          <div style="margin-top: 30px; padding: 15px; background-color: #fcf9f2; border-left: 4px solid #8c5a3c; border-radius: 4px; font-size: 12px; color: #7a6c69;">
            This email was generated automatically by the Opportunity Edge backend.
          </div>
        </div>
      `,
    };

    console.log(`Attempting to send email from ${process.env.SMTP_USER} to ${recipientEmails.join(' and ')}...`);
    await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent!`);
    return res.status(200).json({ success: true, message: 'Registration submitted and emails sent.' });

  } catch (error) {
    console.error('Error sending registration email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send registration email.',
      error: error.message 
    });
  }
});

// Start Server locally if not running on Vercel
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
  });
}

export default app;
