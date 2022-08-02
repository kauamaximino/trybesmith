import { Request, Response, NextFunction } from 'express';

function validateClasse(request: Request, response: Response, next: NextFunction) {
  const { classe } = request.body;

  if (!classe) {
    return response.status(400).json({ message: '"classe" is required' });
  }

  if (typeof classe !== 'string') {
    return response.status(422).json({ message: '"classe" must be a string' });
  }

  if (classe.length < 3) {
    return response.status(422).json({
      message: '"classe" length must be at least 3 characters long',
    });
  }
  next();
}

export = validateClasse;