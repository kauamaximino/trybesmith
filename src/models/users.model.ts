import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Users } from '../interfaces/users.interface';
import generateJWT from '../utils/generateJWT';

async function login(user: Users) { 
  const { username, classe, level, password } = user;

  const query = 'INSERT INTO '
    + 'Trybesmith.Users(username, classe, level, password) VALUES(?, ?, ?, ?)';
  const values = [username, classe, level, password];

  await connection.execute<ResultSetHeader>(query, values);
  const token = await generateJWT(user);
  return token;
}

export = {
  login,
};