import { ResultSetHeader } from 'mysql2';
import NewProduct from '../interfaces/ProductsInterface';
import connection from './connection';

const createProduct = async (product: NewProduct) => {
  const { name, amount } = product;
  const [newProduct] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return newProduct.insertId;
};

export default {
  createProduct,
};
