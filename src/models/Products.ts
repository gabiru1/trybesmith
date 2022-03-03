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

const getAllProducts = async () => {
  const [allProducts] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );

  return allProducts;
};

export {
  createProduct,
  getAllProducts,
};
