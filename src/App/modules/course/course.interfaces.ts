export type CourseType = {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: number;
  enrollmentLimit?: number;
  // content: {
  //     type: string;
  //     title: string;
  //     link: string;
  // }[];
  progressTracking?: Record<string, number>;
  prerequisites?: string[];
  isPublished: boolean;
  tags?: string[];
  ratings?: {
      studentId: string;
      rating: number;
      review?: string;
  }[];
  isDeleted: boolean;
  outline: {  // New field for course outline
      title: string; // Title of the section or module
      resources: { // Array of resources (articles, videos, etc.)
          type: string;
          title: string;
          link: string;
      }[];
      quiz?: {  // Optional quiz for the section
          title: string;
          link: string;
      };
  }[];
};

  