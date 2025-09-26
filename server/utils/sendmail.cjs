const nodemailer = require('nodemailer');

const sendEmail = async ({ subject, text, html }) => {
  try {
    // 1. Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // using Gmail
      auth: {
        user: process.env.GMAIL_USER, // your Gmail
        pass: process.env.GMAIL_PASS, // app password
      },
    });

    // 2. Mail options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'alishazmina7@gmail.com',
      subject,
      text,
      html,
    };

    // 3. Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
  } catch (err) {
    console.error('Error sending email: ', err);
    throw err;
  }
};

module.exports = sendEmail;
