import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './db';
import moment from 'moment';
import cron from 'node-cron';

import userRoutes from './routes/user.route';
import {
  PORT as PORT_CONFIG,
  SCHEDULER_OPTIONS,
  SELECTED_TIMER,
} from './config/main.config';
import { sendBirthdayMessage } from './lib/scheduler';

const PORT = PORT_CONFIG;

const app = express();

connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

cron.schedule(SELECTED_TIMER, sendBirthdayMessage, SCHEDULER_OPTIONS);
// console.log(process.argv[3]);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the server' });
});

// routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} at ${moment().format(
      'MMMM Do YYYY, h:mm:ss a'
    )}`
  );
});
