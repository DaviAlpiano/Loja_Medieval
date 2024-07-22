import { Router } from 'express';
import loginController from '../controller/loginController';
import middlewares from '../middlewares';

const router = Router();

router.post('/', middlewares.validateLogin, loginController.login);

export default router;