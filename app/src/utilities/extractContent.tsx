import matter from 'gray-matter';
import { Section } from '../types/ContentTypes';

export function extractSections(content: string): Section[] {
  const parsedContent = matter(content);
  const sections = parsedContent.data.sections || [];

  return sections.map((section: Section) => ({
    ...section,
    cards: section.cards || [], 
  }));
}


export function extractBanner(content: string) {
  const parsedContent = matter(content);
  return { title: parsedContent.data.title, tagline: parsedContent.data.tagline };
}

export function extractIntro(content: string) {
  const parsedContent = matter(content);
  const introContent = parsedContent.data.introContent || [];
  
  
  return {
    introTitle: parsedContent.data.introTitle,
    introContent: introContent, 
  };
}
