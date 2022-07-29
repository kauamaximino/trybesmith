import express from 'express';
import product from './products.routes';

const router = express.Router();

router.use(product);

export default router;