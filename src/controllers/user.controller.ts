import { Request, Response } from 'express';

import userService = require('../services/user.service');
import { User } from '../interfaces/user.interface';

async function login(request: Request, response: Response) {
  const user: User = request.body;
  const token = await userService.login(user);
  
  response.status(201).json({ token });
}

export = {
  login,
};