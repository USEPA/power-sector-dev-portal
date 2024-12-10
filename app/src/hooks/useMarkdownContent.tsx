import { useState, useEffect } from 'react';
import matter from 'gray-matter';

const useMarkdownContent = (path: string) => {
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
        try {
          console.log('Current Origin:', window.location.origin);
          console.log('Attempting to fetch from:', path);
      
          // Try multiple potential paths
          const possiblePaths = [
            path,
            `${window.location.origin}${path}`,
            `${window.location.origin}/content/datavis/datavis.md`
          ];
      
          for (const attemptPath of possiblePaths) {
            try {
              const response = await fetch(attemptPath);
              console.log(`Attempt with ${attemptPath}:`, response.status);
      
              if (response.ok) {
                const text = await response.text();
                setContent(text);
                return;
              }
            } catch (attemptError) {
              console.error(`Failed to fetch from ${attemptPath}:`, attemptError);
            }
          }
      
          throw new Error('Could not fetch markdown from any path');
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