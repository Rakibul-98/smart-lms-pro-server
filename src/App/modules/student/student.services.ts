import { StudentType } from './student.interfaces';
import { StudentModel } from "./student.modules";

const createStudentIntoDB = async (Student: StudentType) => {
    const result = await StudentModel.create(Student);
    return result;
}

const getAllStudentsFromDB = async()=>{
    const students = await StudentModel.find();
    return students;
}

const getSingleStudentFromDB = async (id: String)=>{
    const student = await StudentModel.findOne({id});
    return student;
}

const updateStudentIntoDB = async (id: String, updatedStudent: StudentType)=>{
    const student = await StudentModel.findOneAndUpdate({id}, updatedStudent, {new: true});
    return student;
}

const deleteStudentFromDB = async (id: String)=>{
    return await StudentModel.updateOne({id},{isDeleted: true});
}

export const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB,
    updateStudentIntoDB,
    deleteStudentFromDB,
}