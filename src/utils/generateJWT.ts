import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Users } from '../interfaces/users.interface';
import { LoginsJWT } from '../interfaces/logins.interface';

dotenv.config();

async function generateToken(credentials: Users | LoginsJWT) {
  const token = jwt.sign({ credentials }, 'secretJWT', {
    expiresIn: '30d',
    algorithm: 'HS256',
  });
  return token;
}

export = generateToken;