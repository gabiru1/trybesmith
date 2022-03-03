import dotenv from 'dotenv';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createProductService, getAllProductsService } from '../services/Products';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'kauandabahia';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    const { name, amount } = req.body;
  
    if (!authorization) return res.status(401).json({ error: 'Token not found' });
  
    jwt.verify(authorization, SECRET);
  
    const id = await createProductService({ name, amount });

    const product = {
      item: {
        id,
        name,
        amount,
      },
    };
  
    return res.status(201).json(product);
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
  
    if (!authorization) return res.status(401).json({ error: 'Token not found' });
  
    jwt.verify(authorization, SECRET);
  
    const allProducts = await getAllProductsService();

    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export {
  createProduct,
  getAllProducts,
};