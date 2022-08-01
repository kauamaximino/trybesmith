import express from 'express';
import productsController from '../controllers/products.controller';
import middlewares from '../middlewares/index.validate';

const products = express.Router();

products.post(
  '/products',
  middlewares.validateName,
  middlewares.validateAmount,
  productsController.create,
);
products.get('/products', productsController.getAll);

export default products;