import nodemailer from 'nodemailer';

const mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async ({ to, subject, html }) => {
  try {
    await mailTransporter.sendMail({
      from: `"SkillToBill" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log('Mail sent to:', to);
  } catch (error) {
    console.error('Mail error:', error);
    throw error;
  }
};
