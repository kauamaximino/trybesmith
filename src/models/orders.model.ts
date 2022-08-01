import { RowDataPacket } from 'mysql2';
import connection from './connection';

async function getAllOrders() {
  const queryOrders = 'SELECT * FROM Trybesmith.Orders';
  const queryProducts = 'SELECT * FROM Trybesmith.Products';

  const [orders] = await connection.execute<RowDataPacket[]>(queryOrders);
  const [products] = await connection.execute<RowDataPacket[]>(queryProducts);

  return { orders, products };
}

export = { getAllOrders };