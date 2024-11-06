// src/pages/datavis/index.tsx
import React from "react";

import useMarkdownContent from "../../hooks/useMarkdownContent";
import "./datavis.scss";
import Banner from "../../components/datavis/Banner/Banner";

const DataVisualization: React.FC = () => {
  const { content, error } = useMarkdownContent("/content/datavis/datavis.md");

  const extractPrinciples = (markdownContent: string) => {
    const sections = markdownContent.split(/##\s+/);
    const titleSection = sections[0].split("\n\n");
    const title = titleSection[0].replace(/^#\s*/, '').trim();
    const tagline = titleSection[1].trim();


    return { title, tagline,  };
};

const { title, tagline } = content 
? extractPrinciples(content) 
: { title: '', tagline: '',};

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div>
      <Banner title={title} tagline={tagline} level="level1" />
    </div>
  );
};

export default DataVisualization;
