import { Request, Response } from 'express';

import productsService from '../services/products.service';
import { Products } from '../interfaces/products.interface';

async function create(request: Request, response: Response) {
  const product: Products = request.body;
  const productCreate = await productsService.create(product);
  response.status(201).json(productCreate);
}

async function getAll(_request: Request, response: Response) {
  const products = await productsService.getAll();
  response.status(200).json(products);
}

export = {
  create,
  getAll,
};
