import User from '../models/User.js';
import Service from '../models/Service.js';
import jwt from 'jsonwebtoken';

/**
 * Generate JWT token for user authentication
 * @param {string} id - User ID
 * @returns {string} JWT token
 */
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

/**
 * Register a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = generateToken(user._id);

    // If user is an earner, create a service entry in marketplace
    if (user.role === 'earner') {
      await Service.create({
        title: user.category,
        description: `Services offered by ${user.name} in ${user.category}`,
        price: 0, // Default price, can be updated later
        earner: user._id
      });
    }

    res.status(201).json({ token, user });
  } catch (error) {
    res.status(400).json({ message: 'Could not create account. Please check the information and try again.', error: error.message });
  }
};

/**
 * Login user with email and password
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Email or password is incorrect. Please try again.' });
    }
    const token = generateToken(user._id);
    res.json({ token, user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Unable to login right now. Please try again later.' });
  }
};

/**
 * Get current user profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getMe = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({ message: 'Failed to get user', error: error.message });
  }
};

/**
 * Update current user profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const updateMe = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(user);
  } catch (error) {
    console.error('Update me error:', error);
    res.status(400).json({ message: 'Update failed', error: error.message });
  }
};

export const uploadProfileImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    const user = await User.findById(req.user._id);
    user.profileImage = `/assetes/images/${req.file.filename}`;
    await user.save();
    res.json({ message: 'Profile image updated', profileImage: user.profileImage });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Upload failed' });
  }
};
