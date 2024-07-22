import { Router } from 'express';
import userController from '../controller/userController';

const router = Router();

router.get('/', userController.getUsers);

export default router;