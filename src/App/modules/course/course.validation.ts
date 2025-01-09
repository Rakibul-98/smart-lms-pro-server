import { z } from "zod";

const ZodRatingSchema = z.object({
  studentId: z.string().min(1),
  rating: z.number().min(1).max(5),
  review: z.string().optional()
});

const ZodOutlineSchema = z.object({
  title: z.string().min(1),
  resources: z.array(
    z.object({
      type: z.string().min(1),
      title: z.string().min(1),
      link: z.string().url()
    })
  ).nonempty(),
  quiz: z.object({
    title: z.string().min(1),
    link: z.string().url()
  }).optional()
});

export const ZodCourseSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  duration: z.number().positive(),
  enrollmentLimit: z.number().positive().optional(),
  progressTracking: z.record(z.number().min(0).max(100)).optional(),
  prerequisites: z.array(z.string()).optional(),
  isPublished: z.boolean(),
  tags: z.array(z.string()).optional(),
  ratings: z.array(ZodRatingSchema).optional(),
  isDeleted: z.boolean().default(false),
  outline: z.array(ZodOutlineSchema).nonempty()
});
