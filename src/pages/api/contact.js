const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const destinationEmail = process.env.CONTACT_EMAIL || 'franciscopassuelo@gmail.com';

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error('Missing SMTP environment variables.');
    return res.status(500).json({ message: 'Failed to send email' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const emailSubject = subject || `New message from ${name}`;

    await transporter.sendMail({
      from: `"${name}" <${smtpUser}>`,
      to: destinationEmail,
      replyTo: email,
      subject: emailSubject,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject || 'No subject provided'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form email failed:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
