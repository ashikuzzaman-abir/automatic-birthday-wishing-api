const message =
  'May allah bless you with all the happiness and success in the world. Ameen!';

const generateMainBody = (name: string) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; text-align: center;">Happy Birthday ${name}!</h2>
      <p style="color: #333;">${message}</p>
      <p style="color: #333;">We hope you have a great day and a year filled with happiness.</p>
      <p style="color: #333;">Best wishes from the team.</p>
      <p style="color: #333;">Cheers!</p>
    </div>
  `;
};

export default generateMainBody;
