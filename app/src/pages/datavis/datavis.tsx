import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import "./datavis.scss";


interface Frontmatter {
  title: string;
  tagline: string;
}

const DataVisualization: React.FC = () => {
  const [content, setContent] = useState<string | null>(null);
  const [frontmatter, setFrontmatter] = useState<Frontmatter | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch("/content/datavis/datavis.md"); 
        if (!res.ok) throw new Error("Failed to fetch markdown file");
        const markdownContent = await res.text();
        
        const { content, data } = matter(markdownContent);
        
        setContent(content); 
        setFrontmatter({
          title: data.title || 'Default Title',
          tagline: data.tagline || 'Default Tagline',
        });
      } catch (err) {
        if (err instanceof Error) {  
          setError("Error loading content: " + err.message);
        } else {
          setError("Unknown error occurred");
        }
      }
    };

    fetchContent();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      
      {frontmatter && (
        <div className="banner">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.tagline}</p>
        </div>
      )}
      
      
      {content && <ReactMarkdown>{content}</ReactMarkdown>}
    </div>
  );
};

export default DataVisualization;
