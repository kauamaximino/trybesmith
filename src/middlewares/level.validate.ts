import { Request, Response, NextFunction } from 'express';

function validateLevel(request: Request, response: Response, next: NextFunction) {
  const { level } = request.body;

  if (level === undefined) {
    return response.status(400).json({ message: '"level" is required' });
  }

  if (typeof level !== 'number') {
    return response.status(422).json({ message: '"level" must be a number' });
  }

  if (level <= 0) {
    return response.status(422).json({
      message: '"level" must be greater than or equal to 1',
    });
  }
  next();
}

export = validateLevel;