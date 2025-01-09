import { Request, Response } from "express";
import { zodStudentTypeSchema } from "./student.validation";
import { StudentServices } from "./student.services";


const createStudent = async (req: Request, res: Response): Promise<any> => {
    try {
        const { student } = req.body;
        const zodParsedData = zodStudentTypeSchema.parse(student);

        const result = await StudentServices.createStudentIntoDB(zodParsedData);

        return res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result
        })
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to create student",
            error: error
        });
    }
}

const getAllStudents = async (req: Request, res: Response): Promise<any> => {
    try {
        const results = await StudentServices.getAllStudentsFromDB();
        return res.status(200).json({
            success: true,
            message: "Students retrieved successfully",
            data: results
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to retrieve students",
            error: error
        });
    }
}

const getSingleStudent = async (req: Request, res: Response): Promise<any> => {
    try {

        const {studentId} = req.params;
        console.log(studentId);

        const result = await StudentServices.getSingleStudentFromDB(studentId);

        return res.status(200).json({
            success: true,
            message: "Student retrieved successfully",
            data: result
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to retrieve student",
            error: error
        });
    }
}

const updateStudent = async (req: Request, res: Response): Promise<any> => {
    try {

        const {studentId} = req.params;
        const { student: updatedStudentData } = req.body;

        const result = await StudentServices.updateStudentIntoDB(studentId, updatedStudentData);
        
        return res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: result
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to update student details",
            error: error
        });
    }
}

const deleteAStudent = async (req: Request, res: Response): Promise<any> => {
    try {

        const {studentId} = req.params;

        const result = await StudentServices.deleteStudentFromDB(studentId);
        
        return res.status(200).json({
            success: true,
            message: "Student deleted successfully",
            data: {}
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to delete student",
            error: error
        });
    }
}

export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent,
    updateStudent,
    deleteAStudent,
}