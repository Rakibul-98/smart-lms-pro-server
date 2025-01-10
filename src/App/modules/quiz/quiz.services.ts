import { QuizType } from "./quiz.interfaces";
import { QuizModel } from "./quiz.models";

const createQuizIntoDB = async (Quiz: QuizType) => {
    const result = await QuizModel.create(Quiz);
    return result;
}

const getAllQuizesFromDB = async () => {
    const result = await QuizModel.find();
    return result;
}

const getSingleQuizFromDB = async (moduleId: String) => {
    const result = await QuizModel.findOne({ moduleId });
    return result;
}

const updateQuizIntoDB = async (id: String, updatedQuiz: QuizType) => {
    const result = await QuizModel.findOneAndUpdate({ id }, updatedQuiz, { new: true });
    return result;
}

const deleteQuizFromDB = async (id: String) => {
    return await QuizModel.updateOne({ id }, { isDeleted: true });
}

export const QuizServices = {
    createQuizIntoDB,
    getAllQuizesFromDB,
    getSingleQuizFromDB,
    updateQuizIntoDB,
    deleteQuizFromDB,
}