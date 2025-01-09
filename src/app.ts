import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import { StudentRoutes } from './App/modules/student/student.routes';
import { CourseRoutes } from './App/modules/course/course.routes';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/courses', CourseRoutes)

const getAController = (req: Request, res: Response) => {
    res.send('Hello from A controller');
}

app.get('/', getAController);

export default app;