import express from 'express';
import product from './products.routes';
import user from './users.routes';
import orders from './orders.routes';

const router = express.Router();

router.use(product);
router.use(user);
router.use(orders);

export default router;