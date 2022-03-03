import { Router } from 'express';
import { createProduct, getAllProducts } from '../controllers/Products';
import isValidAmount from '../middlewares/isValidAmount';
import isValidProductName from '../middlewares/isValidProductName';

const productsRouter = Router();

productsRouter.post('/products', isValidProductName, isValidAmount, createProduct);

productsRouter.get('/products', getAllProducts);

export default productsRouter;