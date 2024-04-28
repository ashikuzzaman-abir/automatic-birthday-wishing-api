import moment from 'moment';
import User from '../models/user.model';
// import sendEmail from './mailer';
import mimicMailer from './mimicMailer';
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
      mimicMailer(user.email, 'Happy Birthday', generateMainBody(user.name));
    });
    // console.log(usersWhoHasBirthdayToday);
  } catch (error) {
    console.log(error.stack);
  }
};
