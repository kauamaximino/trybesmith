import userModel from '../models/user.model';
import { User } from '../interfaces/user.interface';

async function login(user: User) {
  const token = await userModel.login(user);
  return token;
}

export = {
  login,
};