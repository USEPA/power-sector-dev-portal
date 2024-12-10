import { useEffect, useState } from 'react';
import matter from 'gray-matter';

const useMarkdownContent = (filePath: string) => {
  const [content, setContent] = useState<string>('');
  const [frontmatter, setFrontmatter] = useState<Record<string, any>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        // Fetch the markdown file content
        const response = await fetch(filePath);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();

        // Parse frontmatter and content using gray-matter
        const { data, content } = matter(text);
        console.log(data, content)

        setContent(content);
        setFrontmatter(data);
      } catch (err) {
        console.error('Error fetching markdown:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    fetchMarkdown();
  }, [filePath]);

  return { content, frontmatter, error };
};

export default useMarkdownContent;
