import { Request, Response } from "express";
import { QuizServices } from "./quiz.services";
import { ZodQuizSchema } from "./quiz.validation";

const createQuiz = async (req: Request, res: Response): Promise<any> => {
    try {
        const { quiz } = req.body;
        console.log(quiz);
        const zodParsedData = ZodQuizSchema.parse(quiz);

        const result = await QuizServices.createQuizIntoDB(zodParsedData);

        return res.status(200).json({
            success: true,
            message: "Quiz created successfully",
            data: result
        })
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to create Quiz",
            error: error
        });
    }
}

const getAllQuizs = async (req: Request, res: Response): Promise<any> => {
    try {
        const results = await QuizServices.getAllQuizesFromDB();
        return res.status(200).json({
            success: true,
            message: "Quizs retrieved successfully",
            data: results
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to retrieve Quizs",
            error: error
        });
    }
}

const getSingleQuiz = async (req: Request, res: Response): Promise<any> => {
    try {

        const {quizId} = req.params;

        const result = await QuizServices.getSingleQuizFromDB(quizId);

        return res.status(200).json({
            success: true,
            message: "Quiz retrieved successfully",
            data: result
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to retrieve Quiz",
            error: error
        });
    }
}

const updateQuiz = async (req: Request, res: Response): Promise<any> => {
    try {

        const {quizId} = req.params;
        const { quiz: updatedQuizData } = req.body;

        const result = await QuizServices.updateQuizIntoDB(quizId, updatedQuizData);
        
        return res.status(200).json({
            success: true,
            message: "Quiz updated successfully",
            data: result
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to update Quiz details",
            error: error
        });
    }
}

const deleteAQuiz = async (req: Request, res: Response): Promise<any> => {
    try {

        const {quizId} = req.params;

        const result = await QuizServices.deleteQuizFromDB(quizId);
        
        return res.status(200).json({
            success: true,
            message: "Quiz deleted successfully",
            data: {}
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to delete Quiz",
            error: error
        });
    }
}

export const QuizControllers = {
    createQuiz,
    getAllQuizs,
    getSingleQuiz,
    updateQuiz,
    deleteAQuiz,
}