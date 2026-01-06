import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  register,
  login,
  getMe,
  updateMe,
  uploadProfileImage,
} from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../STB-Frontend/assetes/images/'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/me', protect, updateMe);
router.post('/upload-profile-image', protect, upload.single('profileImage'), uploadProfileImage);

export default router;
