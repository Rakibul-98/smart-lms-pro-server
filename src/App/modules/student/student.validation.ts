import z from 'zod';

export const ZodLearningHistorySchema = z.object({
    courseId: z.string().min(1),
    activity: z.string().min(1),
    timestamp: z.string().min(1),
  });
  
  export const zodStudentTypeSchema = z.object({
    id: z.string().min(1),
    firstName: z.string().min(1),
    lastName: z.string().min(1), 
    email: z.string().email(),
    enrollmentDate: z.string().min(1),
    coursesEnrolled: z.array(z.string()).nonempty(),
    profilePicture: z.string().url().optional(),
    isActive: z.boolean(),
    progress: z.number().min(0).max(100),
    isDeleted: z.boolean().default(false),
    courseProgress: z.record(z.number().min(0).max(100)),
  
    lastLogin: z.string().optional(),
    contactNumber: z.string().optional(), 
    notificationPreferences: z.array(z.string()).optional(),
    learningHistory: z.array(ZodLearningHistorySchema).optional(), 
    completedCourses: z.array(z.string()).optional(),
    certificates: z.record(z.string()).optional(),
  });