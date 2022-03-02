import { NextFunction, Request, Response } from 'express';
import { NewUser } from '../interfaces/UsersInterface';

const isValidPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body as NewUser;

  if (!password) res.status(400).json({ error: 'Password is required' });

  if (typeof password !== 'string') res.status(422).json({ error: 'Password must be a string' });

  if (password.length <= 7) {
    return res.status(422).json({ error: 'Password must be longer than 7 characters' });
  }

  next();
};

export default isValidPassword;