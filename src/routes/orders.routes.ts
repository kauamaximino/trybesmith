import express from 'express';
import ordersControllers from '../controllers/orders.controller';

const orders = express.Router();

orders.get('/orders', ordersControllers.getAllOrders);

export default orders;