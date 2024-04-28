import moment from 'moment';

const message =
  'May allah bless you with all the happiness and success in the world. Ameen!';

const generateMainBody = (name: string, dateOfBirth: Date) => {
  const age = moment().diff(dateOfBirth, 'years');
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; text-align: center;">Happy Birthday ${name}!</h2>
      <p style="color: #333;">${message}</p>
      <p style="color: #333;">Congratulations to your ${age} year${age !== 1 ? 's' : ''} of celebrations</p>
      <p style="color: #333;">We hope you have a great day and a year filled with happiness.</p>
      <p style="color: #333;">Best wishes from the team.</p>
      <p style="color: #333;">Cheers!</p>
    </div>
  `;
};

export default generateMainBody;
