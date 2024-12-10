import { useState, useEffect } from 'react';
import matter from 'gray-matter';

const useMarkdownContent = (path: string) => {
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        console.log('Attempting to fetch markdown from:', path);
        
        const response = await fetch(path, {
          headers: {
            'Content-Type': 'text/markdown',
          },
        });

        console.log('Fetch response:', response);
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response text:', errorText);
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        console.log('Fetched markdown content:', text);

        const parsed = matter(text);
        setContent(parsed.content);
      } catch (err) {
        console.error('Complete error details:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    fetchMarkdown();
  }, [path]);

  return { content, error };
};

export default useMarkdownContent;