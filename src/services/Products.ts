import NewProduct from '../interfaces/ProductsInterface';
import { createProduct, getAllProducts } from '../models/Products';

const createProductService = async ({ name, amount }: NewProduct) => {
  const newProduct = await createProduct({ name, amount });
  
  return newProduct;
};

const getAllProductsService = async () => {
  const allProducts = await getAllProducts();
  
  return allProducts;
};

export {
  createProductService,
  getAllProductsService,
};
