import { Router } from 'express';
import loginController from '../controller/loginController';

const router = Router();

router.get('/', loginController.login);

export default router;