import { model, Schema } from "mongoose";

const CourseSchema: Schema = new Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: Number, required: true },
    enrollmentLimit: { type: Number },
    progressTracking: {
      type: Map,
      of: Number
    },
    prerequisites: [String],
    isPublished: { type: Boolean, required: true },
    tags: [String],
    ratings: [
      {
        studentId: { type: String, required: true },
        rating: { type: Number, required: true },
        review: { type: String }
      }
    ],
    isDeleted: { type: Boolean, required: true },
    outline: [
      {
        title: { type: String, required: true },
        resources: [
          {
            type: { type: String, required: true },
            title: { type: String, required: true },
            link: { type: String, required: true }
          }
        ],
        quiz: {
          title: { type: String },
          link: { type: String }
        }
      }
    ]
});

export const CourseModel = model("Course", CourseSchema);
