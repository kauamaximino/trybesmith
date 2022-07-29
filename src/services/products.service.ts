import productsModel from '../models/products.model';
import { Products } from '../interfaces/product.interface';

async function create(product: Products) {
  const productCreate = await productsModel.create(product);
  return productCreate;
}

export = {
  create,
};