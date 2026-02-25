import Contact from "../model/contact";

const createMessage = async (data) => {
  const { name, email, subject, message } = data;

  if (!name || !email || !subject || !message) {
    throw new Error({ message: "All fields required" });
  }
  const newMessage = await Contact.create({
    name,
    email,
    subject,
    message,
  });
  return newMessage;
};

const getMessages = async () => {
  const messages = await Contact.find().sort({ createdAt: -1 });

  return messages;
};

const getContactByDate = async (date) => {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);

  const end = new Date(date);
  end.setHours(23, 59, 59, 999);

  const contacts = await Contact.find({
    createdAt: { $gte: start, $lte: end },
  });

  return contacts;
};

module.exports = { createMessage, getMessages, getContactByDate };
