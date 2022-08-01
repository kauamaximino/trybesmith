import { Request, Response } from 'express';

import usersService = require('../services/users.service');
import { Users } from '../interfaces/users.interface';

async function login(request: Request, response: Response) {
  const user: Users = request.body;
  const token = await usersService.login(user);
  
  response.status(201).json({ token });
}

export = {
  login,
};