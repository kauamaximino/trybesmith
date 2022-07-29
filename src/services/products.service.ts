import productsModel from '../models/products.model';
import { Products } from '../interfaces/product.interface';

async function create(product: Products) {
  const productCreate = await productsModel.create(product);
  return productCreate;
}

async function getAll() {
  const products = await productsModel.getAll();
  return products;
}

export = {
  create,
  getAll,
};