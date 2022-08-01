import loginsModel from '../models/logins.model';
import generateToken from '../utils/generateJWT';

async function login(username: string, password: string) {
  const user = await loginsModel.login(username, password);

  if (!user) throw new Error('Username or password invalid');

  const { id } = user;
  const token = await generateToken({ id, username });
  return token;
}

export = { login };