import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import {
  createOrder,
  getOrderById,
  getMyOrders,
  createCourseOrder,
  verifyCoursePayment
} from '../controllers/order.controller.js';

const router = express.Router();

// Create order
router.post('/', protect, createOrder);

// Create course order
router.post('/course', protect, createCourseOrder);

// Verify course payment
router.post('/verify', protect, verifyCoursePayment);

// Get logged-in user's orders
router.get('/me', protect, getMyOrders);

// Get order by id
router.get('/:id', protect, getOrderById);

export default router;
