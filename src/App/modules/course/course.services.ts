import { CourseType } from "./course.interfaces";
import { CourseModel } from "./course.models";


const createCourseIntoDB = async (Course: CourseType) => {
    const result = await CourseModel.create(Course);
    return result;
}

const getAllCoursesFromDB = async () => {
    const Courses = await CourseModel.find();
    return Courses;
}

const getCoursesGroupedByCategory = async () => {
    const courses: CourseType[] = await CourseModel.find();

    const groupedCourses = courses.reduce((acc: { [key: string]: { title: string, id: string }[] }, course: CourseType) => {
        if (!acc[course.category]) {
            acc[course.category] = [];
        }
        acc[course.category].push({
            title: course.title,
            id: course.id
        });
        return acc;
    }, {});

    const coursesArray = Object.keys(groupedCourses).map((category) => ({
        category,
        courses: groupedCourses[category],
    }));

    return coursesArray;
};

const getSingleCourseFromDB = async (id: String) => {
    const Course = await CourseModel.findOne({ id });
    return Course;
}

const updateCourseIntoDB = async (id: String, updatedCourse: CourseType) => {
    const Course = await CourseModel.findOneAndUpdate({ id }, updatedCourse, { new: true });
    return Course;
}

const deleteCourseFromDB = async (id: String) => {
    return await CourseModel.updateOne({ id }, { isDeleted: true });
}

export const CourseServices = {
    createCourseIntoDB,
    getAllCoursesFromDB,
    getSingleCourseFromDB,
    updateCourseIntoDB,
    deleteCourseFromDB,
    getCoursesGroupedByCategory,
}