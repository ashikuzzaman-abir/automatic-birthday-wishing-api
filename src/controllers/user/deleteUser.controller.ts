import { Request, Response } from 'express';
import User from '../../models/user.model';

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.json({ message: 'User deleted successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default deleteUser;
