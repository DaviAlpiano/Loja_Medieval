import { Router } from 'express';
import productsController from '../controller/products.controller';

const router = Router();

router.post('/', productsController.postProduct);

export default router;