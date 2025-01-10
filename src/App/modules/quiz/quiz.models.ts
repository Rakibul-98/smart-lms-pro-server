import { model, Schema } from "mongoose";

const questionSchema = new Schema({
    question: { type: String, required: true },
    options: { type: [String], required: true },
    answer: { type: String, required: true }
});

const quizSchema = new Schema({
    _id: { type: String, required: true },
    moduleId: { type: String, required: true },
    title: { type: String, required: true },
    questions: { type: [questionSchema], required: true },
    link: { type: String, required: true }
});

export const QuizModel = model("Quiz", quizSchema);
