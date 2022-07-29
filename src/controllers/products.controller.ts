import { Request, Response } from 'express';

import productsService from '../services/products.service';
import { Products } from '../interfaces/product.interface';

async function create(request: Request, response: Response) {
  const product: Products = request.body;
  const productCreate = await productsService.create(product);
  response.status(201).json(productCreate);
}

export = {
  create,
};
