// controllers/course.controller.js
import Course from '../models/Course.js';
import User from '../models/User.js';
import Notification from '../models/Notification.js';

// My Courses for logged-in user
export const getMyCourses = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('enrolledCourses.course');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const myCourses = (user.enrolledCourses || [])
      .map(ec => {
        if (!ec.course) return null;
        const courseObj = ec.course.toObject ? ec.course.toObject() : ec.course;
        courseObj.progress = ec.progress ?? 0;
        courseObj.completed = !!ec.completed;
        courseObj.enrolledAt = ec.enrolledAt;
        return courseObj;
      })
      .filter(Boolean);

    res.json(myCourses);
  } catch (err) {
    res.status(500).json({ message: 'Unable to fetch your courses. Please try again.' });
  }
};

// Course detail by ID
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if(!course) return res.status(404).json({ message: 'Course not found' });
    // Attach simple progress info for the requesting user
    const user = await User.findById(req.user._id);
    let progress = 0;
    let completed = false;
    if (user && user.enrolledCourses) {
      const ec = user.enrolledCourses.find(e => `${e.course}` === `${course._id}`);
      if (ec) {
        progress = ec.progress || 0;
        completed = !!ec.completed;
      }
    }
    const courseObj = course.toObject();
    courseObj.progress = progress;
    courseObj.completed = completed;
    res.json(courseObj);
  } catch (err) {
    res.status(500).json({ message: 'Unable to load course. Please try again later.' });
  }
};

// Enroll in a course
export const enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if(!course) return res.status(404).json({ message: 'Course not found' });

    if(!course.earnersEnrolled.includes(req.user._id)) {
      course.earnersEnrolled.push(req.user._id);
      await course.save();
    }

    // Add to user's enrolledCourses if not present
    const user = await User.findById(req.user._id);
    if (user) {
      const exists = user.enrolledCourses.some(ec => `${ec.course}` === `${course._id}`);
      if (!exists) {
        user.enrolledCourses.push({ course: course._id, progress: 0, completed: false });
        await user.save();
      }
    }

    // Create a simple in-app notification
    try {
      if (user) {
        await Notification.create({ user: user._id, message: `Enrolled in ${course.title} successfully.`, type: 'course' });
      }
    } catch (nErr) {
      console.error('Notification create error:', nErr.message);
    }

    res.json({ message: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Enrollment failed. Please try again.' });
  }
};

// Mark course as completed for the current user
export const markCourseComplete = async (req, res) => {
  try {
    const courseId = req.params.id;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const ec = user.enrolledCourses.find(e => `${e.course}` === `${courseId}`);
    if (!ec) return res.status(400).json({ message: 'You are not enrolled in this course' });

    ec.progress = 100;
    ec.completed = true;
    await user.save();

    try {
      await Notification.create({ user: user._id, message: `Marked ${courseId} as completed`, type: 'course' });
    } catch (nErr) { console.error('Notification error:', nErr.message); }

    res.json({ message: 'Course marked as completed' });
  } catch (err) {
    res.status(500).json({ message: 'Unable to mark course completed. Try again.' });
  }
};
