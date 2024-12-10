import React from "react";
import useMarkdownContent from "../../hooks/useMarkdownContent";
import ReactMarkdown from "react-markdown";
import "./datavis.scss";

const DataVisualization: React.FC = () => {
  const { content, error } = useMarkdownContent(
    `${window.location.origin}/content/datavis/datavis.html`
  );

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default DataVisualization;