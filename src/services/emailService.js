const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(data) {
  const { to, subject, message } = data;
  const info = await transporter.sendMail({
    from: `<${process.env.EMAIL_USER}>`,
    to,
    subject,
    text: message,
  });

  console.log("Email sent:", info.messageId);
  return info;
}

module.exports = { sendEmail };
