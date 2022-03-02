import { Router } from 'express';
import createUser from '../controllers/Users';
import isvalidUsername from '../middlewares/isValidUsername';
import isValidClass from '../middlewares/isValidClass';
import isValidLevel from '../middlewares/isValidLevel';
import isValidPassword from '../middlewares/isValidPassword';

const userRouter = Router();

userRouter.post('/', isvalidUsername, isValidClass, isValidLevel, isValidPassword, createUser);

export default userRouter;