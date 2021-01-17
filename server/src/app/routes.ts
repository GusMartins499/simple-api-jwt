import { Router } from 'express';

import authMiddleware from './middlewares/AuthMiddleware';

import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const router = Router();

router.post('/users', UserController.store);
router.get('/users', authMiddleware, UserController.index);
router.post('/auth', AuthController.authenticate);

export default router;
