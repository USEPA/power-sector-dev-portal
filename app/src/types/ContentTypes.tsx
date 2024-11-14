export interface Card {
    title: string;
    description: string;
    link: string;
    image: string;
  }
  
  export interface Section {
    title: string;
    cards: Card[];
  }
  
  export interface Content {
    title: string;
    tagline: string;
    introTitle: string;
    introContent: string;
    sections: Section[];
  }