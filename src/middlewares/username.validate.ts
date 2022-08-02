import { Request, Response, NextFunction } from 'express';

function validateUsername(request: Request, response: Response, next: NextFunction) {
  const { username } = request.body;

  if (!username) {
    return response.status(400).json({ message: '"username" is required' });
  }

  if (typeof username !== 'string') {
    return response.status(422).json({ message: '"username" must be a string' });
  }

  if (username.length < 3) {
    return response.status(422).json({
      message: '"username" length must be at least 3 characters long',
    });
  }
  next();
}

export = validateUsername;