import React from "react";
import useMarkdownContent from "../../hooks/useMarkdownContent";
import ReactMarkdown from "react-markdown";
import "./datavis.scss";

const DataVisualization: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, frontmatter, error } = useMarkdownContent(`${base}content/datavis/datavis.md`);

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div>
      {frontmatter.title && <h1>{frontmatter.title}</h1>}
      {frontmatter.tagline && <p>{frontmatter.tagline}</p>}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default DataVisualization;