import { Router } from 'express';
import checkLogin from '../controllers/Logins';
import createUser from '../controllers/Users';
import isValidClass from '../middlewares/isValidClass';
import isValidLevel from '../middlewares/isValidLevel';
import isValidPassword from '../middlewares/isValidPassword';
import isvalidUsername from '../middlewares/isValidUsername';

const userRouter = Router();

userRouter.post('/users', isvalidUsername, isValidClass, isValidLevel, isValidPassword, createUser);

userRouter.post('/login', isvalidUsername, isValidPassword, checkLogin);

export default userRouter;