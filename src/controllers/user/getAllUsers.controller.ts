import { Request, Response } from 'express';
import User from '../../models/user.model';

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({ doc: users });
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).send('Server Error');
  }
};

export default getAllUsers;
