import mongoose, { Schema } from "mongoose";
import { StudentType } from "./student.interfaces";

const StudentSchema: Schema = new Schema({
    id: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    enrollmentDate: { type: String, required: true },
    coursesEnrolled: { type: [String], required: true },
    profilePicture: { type: String },
    isActive: { type: Boolean, required: true },
    progress: { type: Number, required: true },
    courseProgress: { type: Map, of: Number, required: true },
    isDeleted: { type: Boolean, required: true },
  
    lastLogin: { type: String },
    contactNumber: { type: String },
    notificationPreferences: { type: [String] },
  
    learningHistory: [{
      courseId: { type: String, required: true },
      activity: { type: String, required: true },
      timestamp: { type: String, required: true }
    }],
    
    completedCourses: { type: [String] },
    certificates: { type: Map, of: String }
  });

  StudentSchema.pre('find', function(next){
    this.find({ isDeleted: {$ne: true} });
    next();
  })

  StudentSchema.pre('findOne',function(next){
    this.findOne({ isDeleted: {$ne: true} });
    next();
  })

  StudentSchema.pre('aggregate',function(next){
    this.pipeline().unshift({$match: { isDeleted: {$ne: true} }});
    next();
  })

  export const StudentModel = mongoose.model<StudentType>('Student', StudentSchema);
