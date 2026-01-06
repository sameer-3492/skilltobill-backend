import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  razorpayOrderId: String,
  razorpayPaymentId: String,
  razorpaySignature: String,

  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  },

  amount: Number,
  type: {
    type: String,
    enum: ['service', 'course']
  },

  status: {
    type: String,
    enum: ['created', 'success', 'failed'],
    default: 'created'
  }
}, { timestamps: true });

export default mongoose.model('Payment', paymentSchema);
