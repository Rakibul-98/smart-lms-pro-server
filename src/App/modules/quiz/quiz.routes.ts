import express from 'express';
import { QuizControllers } from './quiz.controllers';

const router = express.Router();

router.post('/', QuizControllers.createQuiz);

router.get('/', QuizControllers.getAllQuizs);

router.get('/:quizId', QuizControllers.getSingleQuiz);

router.put('/:quizId', QuizControllers.updateQuiz);

router.delete('/:quizId', QuizControllers.deleteAQuiz);

export const QuizRoutes = router;