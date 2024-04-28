import moment from 'moment';

const mimicMailer = (to: string, subject: string, text: string) => {
  console.log(`
    Time: ${moment().toLocaleString()} \n
    Email: ${to} \n
    Subject: ${subject} \n
    Body: ${text}
  `);
};

export default mimicMailer;
