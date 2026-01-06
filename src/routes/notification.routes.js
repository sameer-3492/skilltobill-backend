import express from 'express';
import { getUserNotifications } from '../controllers/notification.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', protect, getUserNotifications);

export default router;
