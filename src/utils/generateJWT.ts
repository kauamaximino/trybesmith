import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Users } from '../interfaces/users.interface';

dotenv.config();

async function generateToken(credentials: Users) {
  const token = await jwt.sign({ credentials }, 'secretJWT', {
    expiresIn: '30d',
    algorithm: 'HS256',
  });
  return token;
}

export = generateToken;