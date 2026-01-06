import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  earner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  status: {
    type: String,
    enum: ['pending', 'paid', 'completed'],
    default: 'pending'
  },
  courseId: String, // For course orders
  razorpayOrderId: String,
  razorpayPaymentId: String
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
