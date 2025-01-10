import { z } from "zod";

const ZodQuestionSchema = z.object({
  question: z.string().min(1, "Question cannot be empty"),
  options: z.array(z.string()).min(2, "There must be at least two options"),
  answer: z.string().min(1, "Answer cannot be empty")
});

export const ZodQuizSchema = z.object({
  _id: z.string().min(1, "Quiz ID cannot be empty"),
  moduleId: z.string().min(1, "Module ID cannot be empty"),
  title: z.string().min(1, "Title cannot be empty"),
  questions: z.array(ZodQuestionSchema).min(1, "At least one question is required"),
  link: z.string().url("Link must be a valid URL")
});