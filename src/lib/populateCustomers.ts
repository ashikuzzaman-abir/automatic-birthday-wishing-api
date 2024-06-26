import User from '../models/user.model';
import moment from 'moment';
import { faker } from '@faker-js/faker';
const populateCustomers = async () => {
  const currentDay = moment().format('DD');
  const currentMonth = moment().format('MM');
  const numberOfCustomers = 5;
  try {
    for (let i = 0; i < numberOfCustomers; i++) {
      const user = new User({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: '12345678',
        dateOfBirth: `1999-${currentMonth}-${currentDay}`,
      });

      await user.save();
      console.log(`Customer ${i + 1} created`);
    }
  } catch (error) {
    console.log(error);
  }
};
export default populateCustomers;
