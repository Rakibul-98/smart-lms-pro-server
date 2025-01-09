export type StudentType = {
    id: string;
    firstName: string; 
    lastName: string; 
    email: string; 
    enrollmentDate: string; 
    coursesEnrolled: string[]; 
    profilePicture?: string; 
    isActive: boolean; 
    progress: number; 
    courseProgress: Record<string, number>; 
    isDeleted: boolean;
    
    lastLogin?: string; 
    contactNumber?: string; 
    notificationPreferences?: string[]; 
    
    learningHistory?: {
      courseId: string; 
      activity: string; 
      timestamp: string; 
    }[];
    
    completedCourses?: string[]; 
    certificates?: Record<string, string>; 
  };
  
  