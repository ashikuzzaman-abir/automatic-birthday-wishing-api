import { Request, Response } from 'express';
import populateCustomers from '../../lib/populateCustomers';

const seedCustomers = async (req: Request, res: Response) => {
  try {
    // populate customers
    await populateCustomers();
    res.status(200).json({ message: 'Customers seeded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};
export default seedCustomers;
