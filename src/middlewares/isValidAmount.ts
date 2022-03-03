import { NextFunction, Request, Response } from 'express';
import Product from '../interfaces/ProductsInterface';

const isValidAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body as Product;

  if (!amount) return res.status(400).json({ error: 'Amount is required' });

  if (typeof amount !== 'string') {
    return res.status(422).json({ error: 'Amount must be a string' });
  }

  if (amount.length <= 2) {
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
  }

  next();
};

export default isValidAmount;