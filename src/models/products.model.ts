import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Products } from '../interfaces/product.interface';

async function create(product: Products): Promise<Products> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Products = { id, name, amount };
  return newProduct;
}

export = {
  create,
};