import { Router } from 'express';
import loginController from '../controller/loginController';

const router = Router();

router.post('/', loginController.login);

export default router;