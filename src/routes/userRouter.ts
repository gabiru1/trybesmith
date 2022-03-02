import { Router } from 'express';
import createUser from '../controllers/Users';

const userRouter = Router();

userRouter.post('/', createUser);

export default userRouter;