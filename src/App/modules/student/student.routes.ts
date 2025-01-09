import express from 'express';
import { StudentControllers } from './student.controllers';

const router = express.Router();

router.post('/', StudentControllers.createStudent);

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSingleStudent);

router.put('/:studentId', StudentControllers.updateStudent);

router.delete('/:studentId', StudentControllers.deleteAStudent);

export const StudentRoutes = router;