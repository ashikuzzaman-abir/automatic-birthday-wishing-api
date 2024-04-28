import nodemailer from 'nodemailer';
import {
  MAIL_ADDRESS,
  MAIL_HOST,
  MAIL_PASSWORD,
  MAIL_PORT,
} from '../config/main.config';

// Create a transporter using SMTP
export const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: false,
  auth: {
    user: MAIL_ADDRESS,
    pass: MAIL_PASSWORD,
  },
});


const sendEmail = async (
  to: string,
  subject: string,
  text: string
): Promise<void> => {
  try {

    // Define the email options
    const mailOptions = {
      from: MAIL_ADDRESS,
      to,
      subject,
      html:text,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.log('Error sending email:', error.message, '/n', error.stack);
  }
};

export default sendEmail;
