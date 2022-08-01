import usersModel from '../models/users.model';
import { Users } from '../interfaces/users.interface';

async function login(user: Users) {
  const token = await usersModel.login(user);
  return token;
}

export = {
  login,
};