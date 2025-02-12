
export interface BlogPost {
  title: string;
  description: string;
  image: string;
  fullContent?: {
    title: string;
    introduction: string;
    sections: Array<{
      heading: string;
      content: string;
      quote?: string;
    }>;
    faq?: {
      title: string;
      subtitle: string;
      questions: Array<{
        question: string;
        answer: string;
      }>;
    };
  };
}
