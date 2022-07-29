import express from 'express';
import productsController from '../controllers/products.controller';

const product = express.Router();

product.post('/products', productsController.create);
product.get('/products', productsController.getAll);

export default product;