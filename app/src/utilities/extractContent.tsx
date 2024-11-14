import matter from 'gray-matter';
import { Section } from '../types/ContentTypes';

export function extractSections(content: string): Section[] {
  const parsedContent = matter(content);
  return parsedContent.data.sections || [];
}

export function extractBanner(content: string) {
  const parsedContent = matter(content);
  return { title: parsedContent.data.title, tagline: parsedContent.data.tagline };
}

export function extractIntro(content: string) {
  const parsedContent = matter(content);
  return { introTitle: parsedContent.data.introTitle, introContent: parsedContent.data.introContent };
}