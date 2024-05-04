import moment from 'moment';

const message =
  'May allah bless you with all the happiness and success in the world. Ameen!';

const generateMimicMainBody = (name: string, dateOfBirth: Date) => {
  const age = moment().diff(dateOfBirth, 'years');
  return `\n\tHappy Birthday ${name}\n
      \t${message}
      \tCongratulations to your ${age} year${
    age !== 1 ? 's' : ''
  } of celebrations \n
      \tWe hope you have a great day and a year filled with happiness.\n
      \tBest wishes from the team.\n
      \tCheers!\n
    
  `;
};

export default generateMimicMainBody;
