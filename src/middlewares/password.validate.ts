import { Request, Response, NextFunction } from 'express';

function validatePassword(request: Request, response: Response, next: NextFunction) {
  const { password } = request.body;

  if (!password) {
    return response.status(400).json({ message: '"password" is required' });
  }

  if (typeof password !== 'string') {
    return response.status(422).json({ message: '"password" must be a string' });
  }

  if (password.length < 8) {
    return response.status(422).json({
      message: '"password" length must be at least 8 characters long',
    });
  }
  next();
}

export = validatePassword;