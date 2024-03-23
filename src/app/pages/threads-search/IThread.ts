// Define an interface for the base Topic class
export interface ITopic {
    id: number;
    title: string;
    description: string;
    courseId: number;
    tags: string;
  }
  
  // Define an interface extending the base Topic interface for TopicCount
  export interface ITopicCount extends ITopic {
    totalRecords: number;
  }
  