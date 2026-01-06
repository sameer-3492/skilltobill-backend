import Notification from '../models/Notification.js';

/**
 * GET USER NOTIFICATIONS
 */
export const getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    console.error('Get notifications error:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
