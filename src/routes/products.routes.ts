import express from 'express';
import productsController from '../controllers/products.controller';

const products = express.Router();

products.post('/products', productsController.create);
products.get('/products', productsController.getAll);

export default products;