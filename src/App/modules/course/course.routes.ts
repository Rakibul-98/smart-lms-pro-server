import express from 'express';
import { CourseControllers } from './course.controllers';

const router = express.Router();

router.post('/', CourseControllers.createCourse);

router.get('/', CourseControllers.getAllCourses);

router.get('/category', CourseControllers.getCourseCategory);

router.get('/:courseId', CourseControllers.getSingleCourse);

router.put('/:courseId', CourseControllers.updateCourse);

router.delete('/:courseId', CourseControllers.deleteACourse);

export const CourseRoutes = router;