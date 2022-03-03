import { Router } from 'express';
import Products from '../controllers/Products';
import isValidProductName from '../middlewares/isValidProductName';
import isValidAmount from '../middlewares/isValidAmount';

const productsRouter = Router();

productsRouter.post('/products', isValidProductName, isValidAmount, Products.createProduct);

export default productsRouter;