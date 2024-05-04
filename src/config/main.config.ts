import moment from 'moment';
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
export const ENV = process.env.ENVIRONMENT || 'development';
export const PORT = process.env.PORT || 5000;

export const MAIL_HOST = process.env.MAIL_HOST;
export const MAIL_ADDRESS = process.env.MAIL_ADDRESS;
export const MAIL_PORT = process.env.MAIL_PORT;
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

export const SCHEDULER_OPTIONS = {
  // scheduled: true,
  // timezone: 'Asia/Dhaka',
};

const hour = moment().hour();
const minute = Number(moment().minute()) + 1;
export const AT_MIDNIGHT = '0 0 0 * * *';
export const IN_EVERY_SECONDS = '*/10 * * * * *';
export const SELECTED_TIMER = `${minute} ${hour} * * * `;

