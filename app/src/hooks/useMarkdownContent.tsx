import { useState, useEffect } from 'react';
import matter from 'gray-matter';

interface FrontmatterData {
  title: string;
  tagline: string;
  [key: string]: string; 
}

const useMarkdownContent = (path: string) => {
  const [content, setContent] = useState<string>('');
  const [frontmatter, setFrontmatter] = useState<FrontmatterData>({
    title: '',
    tagline: ''
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(path);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const parsed = matter(text);
        setContent(parsed.content);
        setFrontmatter({
          title: parsed.data.title || '',
          tagline: parsed.data.tagline || '',
          ...parsed.data
        });
      } catch (err) {
        console.error('Error fetching markdown:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    fetchMarkdown();
  }, [path]);

  return { content, frontmatter, error };
};

export default useMarkdownContent;