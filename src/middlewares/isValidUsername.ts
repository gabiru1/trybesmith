import { NextFunction, Request, Response } from 'express';
import { NewUser } from '../interfaces/UsersInterface';

const isvalidUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body as NewUser;

  if (!username) return res.status(400).json({ error: 'Username is required' });
  
  if (typeof username !== 'string') {
    return res.status(422).json({ error: 'Username must be a string' });
  }
  
  if (username.length <= 2) {
    return res.status(422).json({ error: 'Username must be longer than 2 characters' });
  }

  next();
};

export default isvalidUsername;