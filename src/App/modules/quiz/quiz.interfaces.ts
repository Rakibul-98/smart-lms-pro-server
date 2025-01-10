export type QuizType = {
    _id: string;
    moduleId: string;
    title: string;
    questions: Question[];
    link: string;
};

type Question = {
    question: string;
    options: string[];
    answer: string;
};
