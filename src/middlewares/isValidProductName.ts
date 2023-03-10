import { NextFunction, Request, Response } from 'express';
import Product from '../interfaces/ProductsInterface';

const isValidProductName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body as Product;

  if (!name) return res.status(400).json({ error: 'Name is required' });

  if (typeof name !== 'string') {
    return res.status(422).json({ error: 'Name must be a string' });
  }

  if (name.length <= 2) {
    return res.status(422).json({ error: 'Name must be longer than 2 characters' });
  }

  next();
};

export default isValidProductName;