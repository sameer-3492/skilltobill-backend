import express from 'express';
import {
  getMyCourses,
  getCourseById,
  enrollCourse,
  markCourseComplete,
} from '../controllers/course.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/my-courses', protect, getMyCourses);
router.get('/:id', protect, getCourseById);
router.post('/:id/enroll', protect, enrollCourse);
router.post('/:id/complete', protect, markCourseComplete);

export default router;
