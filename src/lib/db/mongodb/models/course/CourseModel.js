import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  refrenceLink: {
    type: String,
    required: true,
  },
  joined: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  courseLink: {
    type: String,
    required: true,
  },
  uploadedDate: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  level: {
    type: String,
    required: true,
  },
});

export default mongoose.models.courses || mongoose.model('courses', CourseSchema);