import connectDB from '../db';
import dotenv from 'dotenv';
import populateCustomers from '../lib/populateCustomers';
dotenv.config();

connectDB();

populateCustomers();
// process.exit(0);
