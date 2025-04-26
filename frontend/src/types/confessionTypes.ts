export interface Confession {
    id: string;
    text: string;
    username: string;
    timestamp: string;
    likes: number;
    comments: number;
    isAnonymous: boolean;
  }
  
  export const confessionsData: Confession[] = [
    // Data will be imported from confessionsData.json
  ];