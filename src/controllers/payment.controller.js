// src/controllers/payment.controller.js
import crypto from 'crypto';
import Payment from '../models/Payment.js';
import User from '../models/User.js';
import WalletTransaction from '../models/WalletTransaction.js';
import Notification from '../models/Notification.js';

export const razorpayWebhook = async (req, res) => {
  try {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    const shasum = crypto
      .createHmac('sha256', secret)
      .update(req.body.toString())
      .digest('hex');

    if (shasum !== req.headers['x-razorpay-signature']) {
      console.log('Invalid signature detected');
      return res.status(400).json({ message: 'Invalid signature' });
    }

    const payload = JSON.parse(req.body);

    if (payload.event === 'payment.captured') {
      const razorpayOrderId = payload.payload.payment.entity.order_id;

      const payment = await Payment.findOne({ razorpayOrderId }).populate('order');
      if (!payment) return res.status(404).json({ message: 'Payment not found' });

      // Update Payment
      payment.status = 'success';
      payment.razorpayPaymentId = payload.payload.payment.entity.id;
      await payment.save();

      // Update Order
      const order = payment.order;
      order.status = 'paid';
      await order.save();

      // Update Wallet
      const total = payment.amount;
      const platformFee = total * 0.12;
      const earnerAmount = total - platformFee;

      const earner = await User.findById(order.earner);
      if (earner) {
        earner.walletBalance += earnerAmount;
        await earner.save();

        // Wallet Transaction
        await WalletTransaction.create({
          user: earner._id,
          amount: earnerAmount,
          type: 'credit',
          description: `Payment received for order ${order._id}, platform fee ${platformFee}`,
        });

        // Notification
        await Notification.create({
          user: earner._id,
          message: `You received ₹${earnerAmount} for order ${order._id}`,
          type: 'payment',
        });
      }

      console.log(`Payment processed successfully for order: ${order._id}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook processing error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
