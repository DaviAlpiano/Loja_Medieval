import { Router } from 'express';
import productsController from '../controller/productsController';

const router = Router();

router.post('/', productsController.postProduct);
router.get('/', productsController.getProducts);

export default router;