
import { ReactNode } from 'react';

export interface BlogPost {
  title: string;
  description: string | ReactNode;
  image: string;
  fullContent?: {
    title: string;
    introduction: string | ReactNode;
    authorIcon?: string;
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
