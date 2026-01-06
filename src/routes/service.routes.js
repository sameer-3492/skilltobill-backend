import express from 'express';
import { createService, getServices } from '../controllers/service.controller.js';
import { protect, restrictTo } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getServices);
router.post('/', protect, restrictTo('earner'), createService);

export default router;
