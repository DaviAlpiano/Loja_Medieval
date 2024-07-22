import { Router } from 'express';
import productsController from '../controller/productsController';
import middlewares from '../middlewares';

const router = Router();

router.post('/', middlewares.validateProduct, productsController.postProduct);
router.get('/', productsController.getProducts);

export default router;