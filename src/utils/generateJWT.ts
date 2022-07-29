import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../interfaces/user.interface';

dotenv.config();

async function generateToken(credentials: User) {
  const token = await jwt.sign({ credentials }, 'secretJWT', {
    expiresIn: '30d',
    algorithm: 'HS256',
  });
  return token;
}

export = generateToken;