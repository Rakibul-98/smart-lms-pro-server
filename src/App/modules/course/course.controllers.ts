import { Request, Response } from "express";
import { ZodCourseSchema } from "./course.validation";
import { CourseServices } from "./course.services";


const createCourse = async (req: Request, res: Response): Promise<any> => {
    try {
        const { course } = req.body;
        const zodParsedData = ZodCourseSchema.parse(course);

        const result = await CourseServices.createCourseIntoDB(zodParsedData);

        return res.status(200).json({
            success: true,
            message: "Course created successfully",
            data: result
        })
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to create Course",
            error: error
        });
    }
}

const getAllCourses = async (req: Request, res: Response): Promise<any> => {
    try {
        const results = await CourseServices.getAllCoursesFromDB();
        return res.status(200).json({
            success: true,
            message: "Courses retrieved successfully",
            data: results
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to retrieve Courses",
            error: error
        });
    }
}

const getCourseCategory =  async (req: Request, res: Response): Promise<any> => {
    try {
        const results = await CourseServices.getCoursesGroupedByCategory();
        return res.status(200).json({
            success: true,
            message: "Course category retrieved successfully",
            data: results
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to retrieve Course Category",
            error: error
        });
    }
}

const getSingleCourse = async (req: Request, res: Response): Promise<any> => {
    try {

        const {courseId} = req.params;

        const result = await CourseServices.getSingleCourseFromDB(courseId);

        return res.status(200).json({
            success: true,
            message: "Course retrieved successfully",
            data: result
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to retrieve Course",
            error: error
        });
    }
}

const updateCourse = async (req: Request, res: Response): Promise<any> => {
    try {

        const {CourseId} = req.params;
        const { Course: updatedCourseData } = req.body;

        const result = await CourseServices.updateCourseIntoDB(CourseId, updatedCourseData);
        
        return res.status(200).json({
            success: true,
            message: "Course updated successfully",
            data: result
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to update Course details",
            error: error
        });
    }
}

const deleteACourse = async (req: Request, res: Response): Promise<any> => {
    try {

        const {CourseId} = req.params;

        const result = await CourseServices.deleteCourseFromDB(CourseId);
        
        return res.status(200).json({
            success: true,
            message: "Course deleted successfully",
            data: {}
        })

    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: "Failed to delete Course",
            error: error
        });
    }
}

export const CourseControllers = {
    createCourse,
    getAllCourses,
    getSingleCourse,
    updateCourse,
    deleteACourse,
    getCourseCategory,
}