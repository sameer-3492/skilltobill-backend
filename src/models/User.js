import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['client', 'earner'],
    required: true
  },
  category: {
    type: String,
    required: function() { return this.role === 'earner'; }
  },
  phone: String,
  bio: String,
  skills: [String],
  portfolio: [{
    image: String,
    description: String
  }],
  profileImage: String,
  coverImage: String,
  walletBalance: {
    type: Number,
    default: 0
  }
  ,
  enrolledCourses: [{
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    progress: { type: Number, default: 0 },
    completed: { type: Boolean, default: false },
    enrolledAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model('User', userSchema);
