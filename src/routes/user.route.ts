import express from 'express';
import createAUser from '../controllers/user/createAuser.controller';
import getAllUsers from '../controllers/user/getAllUsers.controller';
import deleteUser from '../controllers/user/deleteUser.controller';

const router = express.Router();

router.post('/', createAUser);
router.get('/', getAllUsers);
router.delete('/:id', deleteUser);

export default router;
