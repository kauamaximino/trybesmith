import express from 'express';
import product from './products.routes';
import user from './users.routes';
import orders from './orders.routes';
import logins from './logins.routes';

const router = express.Router();

router.use(product);
router.use(user);
router.use(orders);
router.use(logins);

export default router;