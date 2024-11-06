// src/utils/contentUtils.ts
export const extractBanner = (markdownContent: string) => {
    const sections = markdownContent.split(/##\s+/);
    
    // Extract title and tagline from the first section
    const titleSection = sections[0].split("\n\n");
    const title = titleSection[0]?.replace(/^#\s*/, '').trim() || '';
    const tagline = titleSection[1]?.trim() || '';
  
    return { title, tagline };
  };
  