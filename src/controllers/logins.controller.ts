import { Request, Response } from 'express';
import loginsService from '../services/logins.service';

async function login(request: Request, response: Response) {
  try {
    const { username, password } = request.body;
    const token = await loginsService.login(username, password);
    response.status(200).json({ token });
  } catch ({ message }) {
    response.status(401).json({ message });
  }
}

export = {
  login,
};