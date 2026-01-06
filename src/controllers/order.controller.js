import Order from '../models/Order.js';
import Service from '../models/Service.js';
import Notification from '../models/Notification.js';
import Razorpay from 'razorpay';
import crypto from 'crypto';

let razorpay = null;

if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
} else {
  console.warn('Razorpay keys not configured. Payment features will be disabled.');
}

/**
 * CREATE COURSE ORDER
 */
export const createCourseOrder = async (req, res) => {
  try {
    const { courseId, amount } = req.body;

    if (!razorpay) {
      return res.status(500).json({ message: 'Payment service not configured' });
    }

    const options = {
      amount: amount * 100, // Razorpay expects amount in paisa
      currency: 'INR',
      receipt: `course_${courseId}_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    // Save to DB
    const dbOrder = await Order.create({
      service: null, // No service, it's a course
      client: req.user._id,
      earner: null, // No earner for courses
      amount: amount,
      status: 'pending',
      razorpayOrderId: order.id,
      courseId: courseId
    });

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      dbOrderId: dbOrder._id
    });
  } catch (error) {
    console.error('Create course order error:', error);
    res.status(500).json({ message: 'Failed to create order' });
  }
};
export const createOrder = async (req, res) => {
  try {
    const service = await Service.findById(req.body.serviceId);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    const order = await Order.create({
      service: service._id,
      client: req.user._id,
      earner: service.earner,
      amount: service.price,
      status: 'pending'
    });

    // Notification for earner
    await Notification.create({
      user: service.earner,
      message: `New order received: ${order._id}`
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * GET SINGLE ORDER BY ID
 */
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('service')
      .populate('client', 'name email')
      .populate('earner', 'name email');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * VERIFY COURSE PAYMENT
 */
export const verifyCoursePayment = async (req, res) => {
  try {
    const { orderId, razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;

    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    const sign = razorpayOrderId + '|' + razorpayPaymentId;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest('hex');

    if (razorpaySignature === expectedSign) {
      order.status = 'paid';
      order.razorpayPaymentId = razorpayPaymentId;
      await order.save();
      res.json({ message: 'Payment verified successfully' });
    } else {
      res.status(400).json({ message: 'Payment verification failed' });
    }
  } catch (error) {
    console.error('Verify payment error:', error);
    res.status(500).json({ message: 'Verification failed' });
  }
};
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [
        { client: req.user._id },
        { earner: req.user._id }
      ]
    }).populate('service');

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
