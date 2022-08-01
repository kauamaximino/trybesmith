import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Logins } from '../interfaces/logins.interface';

async function login(username: string, password: string): Promise<Logins> {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const [[user]] = await connection.execute<RowDataPacket[]>(query, [username, password]);
  
  return user as Logins;
}

export = { login };