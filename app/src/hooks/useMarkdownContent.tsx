// import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import fs from 'fs';
// import path from 'path';

const useMarkdownContent = (path: string) => {
    const fileContents = fs.readFileSync(path, 'utf-8');
    const { data, content } = matter(fileContents)

    console.log(data); 
console.log(content);

//   const [content, setContent] = useState<string>('');
//   const [frontmatter, setFrontmatter] = useState<Record<string, any>>({});
//   const [error, setError] = useState<string | null>(null);




//   useEffect(() => {
//     const fetchMarkdown = async () => {
//       try {
//         const response = await fetch(path);
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const text = await response.text();
        
//         // Parse the frontmatter from the HTML file
//         const parsed = matter(text);
        
//         setContent(parsed.content);
//         setFrontmatter(parsed.data);
//       } catch (err) {
//         console.error('Error fetching markdown:', err);
//         setError(err instanceof Error ? err.message : 'An unknown error occurred');
//       }
//     };

//     fetchMarkdown();
//   }, [path]);

//   return { content, frontmatter, error };
};

export default useMarkdownContent;