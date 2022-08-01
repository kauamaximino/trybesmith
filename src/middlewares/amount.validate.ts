import { Request, Response, NextFunction } from 'express';

function validateAmount(request: Request, response: Response, next: NextFunction) {
  const { amount } = request.body;

  if (!amount) {
    return response.status(400).json({ message: '"amount" is required' });
  }

  if (typeof amount !== 'string') {
    return response.status(422).json({ message: '"amount" must be a string' });
  }

  if (amount.length < 3) {
    return response.status(422).json({
      message: '"amount" length must be at least 3 characters long',
    });
  }
  next();
}

export = validateAmount;