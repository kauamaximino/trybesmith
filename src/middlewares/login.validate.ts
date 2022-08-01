import { Request, Response, NextFunction } from 'express';

function validateBody(request: Request, response: Response, next: NextFunction) {
  const { username, password } = request.body;

  if (!username) {
    return response.status(400).json({ message: '"username" is required' });
  }

  if (!password) {
    return response.status(400).json({ message: '"password" is required' });
  }
  next();
}

export = validateBody;