import express from 'express';
import createAUser from '../controllers/user/createAuser.controller';
import getAllUsers from '../controllers/user/getAllUsers.controller';
import deleteUser from '../controllers/user/deleteUser.controller';
import seedCustomers from '../controllers/user/seedCustomers.controller';

const router = express.Router();

router.post('/register', createAUser);
router.get('/seed', seedCustomers);
router.get('/', getAllUsers);
router.delete('/:id', deleteUser);

export default router;
