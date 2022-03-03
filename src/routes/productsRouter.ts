import { Router } from 'express';
import Products from '../controllers/Products';

const productsRouter = Router();

productsRouter.post('/products', Products.createProduct);

export default productsRouter;