const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "arnold.ryan801@gmail.com",
    subject: "Thanks for joining in!",
    text: `welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "arnold.ryan801@gmail.com",
    subject: `Goodbye ${name}.`,
    text: `We are sad to see you go. Please let us know if there is anything we could do to improve.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
