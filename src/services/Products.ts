import NewProduct from '../interfaces/ProductsInterface';
import Products from '../models/Products';

const createProduct = async ({ name, amount }: NewProduct) => {
  const newProduct = await Products.createProduct({ name, amount });
  
  return newProduct;
};

export default {
  createProduct,
};
