import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Products } from '../interfaces/products.interface';

async function create(product: Products): Promise<Products> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Products = { id, name, amount };
  return newProduct;
}

async function getAll(): Promise<Products[]> {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [result] = await connection.execute(query);
  return result as Products[];
}

export = {
  create,
  getAll,
};