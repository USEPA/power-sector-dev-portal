export interface Card {
  title?: string;
  content?: string;
  link?: string;
  image: string;
  imagemb?: string;
  type: 'do' | 'do-not'; 
}

  
export interface Section {
  title?: string;
  content?: string;
  image?: string;
  imagemb?: string;
  level?: number;
  cards?: Card[]; 
}

  