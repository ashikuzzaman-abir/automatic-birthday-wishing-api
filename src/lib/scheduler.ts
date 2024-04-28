import moment from 'moment';
import User from '../models/user.model';
import mimicMailer from './mimicMailer';
import sendEmail from './mailer';
import generateMainBody from './generateMailBody';

export const sendBirthdayMessage = async () => {
  try {
    const today = moment().startOf('day');
    const users = await User.find().select('-password');
    const usersWhoHasBirthdayToday = users.filter((user) => {
      const dob = moment(user.dateOfBirth);
      return dob.date() === today.date() && dob.month() === today.month();
    });

    usersWhoHasBirthdayToday.forEach((user) => {
      mimicMailer(
        user.email,
        'Happy Birthday',
        generateMainBody(user.name, user.dateOfBirth)
      );
      if (process.argv[6] === 'with-mailer') {
        sendEmail(
          user.email,
          'Happy Birthday',
          generateMainBody(user.name, user.dateOfBirth)
        );
      }
    });
  } catch (error) {
    console.log(error.stack);
  }
};
