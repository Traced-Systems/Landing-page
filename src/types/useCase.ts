
import { ReactNode } from 'react';

export interface UseCase {
  title: string;
  description: string | ReactNode;
  image: string;
  fullContent?: {
    title: string;
    authorIcon: string;
    introduction: string | ReactNode;
    content: Array<{
      heading: string;
      text: string;
    }>;
  };
}
