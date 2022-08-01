import { Request, Response, NextFunction } from 'express';

function validateName(request: Request, response: Response, next: NextFunction) {
  const { name } = request.body;

  if (!name) {
    return response.status(400).json({ message: '"name" is required' });
  }

  if (typeof name !== 'string') {
    return response.status(422).json({ message: '"name" must be a string' });
  }

  if (name.length < 3) {
    return response.status(422).json({
      message: '"name" length must be at least 3 characters long',
    });
  }
  next();
}

export = validateName;