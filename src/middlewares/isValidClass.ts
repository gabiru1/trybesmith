import { NextFunction, Request, Response } from 'express';
import { NewUser } from '../interfaces/UsersInterface';

const isValidClass = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body as NewUser;

  if (!classe) return res.status(400).json({ error: 'Classe is required' });

  if (typeof classe !== 'string') {
    return res.status(422).json({ error: 'Classe must be a string' });
  }

  if (classe.length <= 2) {
    return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
  }

  next();
};

export default isValidClass;