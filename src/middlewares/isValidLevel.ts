import { NextFunction, Request, Response } from 'express';
import { NewUser } from '../interfaces/UsersInterface';

const isValidLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body as NewUser;
  
  if (level <= 0) return res.status(422).json({ error: 'Level must be greater than 0' });
  
  if (!level) return res.status(400).json({ error: 'Level is required' });
  
  if (typeof level !== 'number') return res.status(422).json({ error: 'Level must be a number' });

  next();
};

export default isValidLevel;