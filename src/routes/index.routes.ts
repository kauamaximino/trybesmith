import express from 'express';
import product from './products.routes';
import user from './user.routes';

const router = express.Router();

router.use(product);
router.use(user);

export default router;