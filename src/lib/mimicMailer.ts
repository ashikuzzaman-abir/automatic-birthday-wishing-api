const mimicMailer = (to: string, subject: string, text: string) => {
  console.log(`
    Email: ${to} \n
    Subject: ${subject} \n
    Body: ${text}
  `);
};

export default mimicMailer;
