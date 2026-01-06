// models/Course.js
import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: String,
  url: String
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  videos: [videoSchema],
  earnersEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

export default mongoose.model('Course', courseSchema);
