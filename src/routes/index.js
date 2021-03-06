import express from 'express';

import courier from './courier';
import order from './order';

const router = express.Router();

router.use('/auth', auth);

router.use('/courier', authMiddleware, courier);
router.use('/orders', authMiddleware, order);

export default router;
