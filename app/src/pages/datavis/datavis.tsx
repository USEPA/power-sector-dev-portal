// src/pages/datavis/index.tsx
import React from "react";
import { extractBanner } from "../../utilities/extractBanner";

import useMarkdownContent from "../../hooks/useMarkdownContent";
import "./datavis.scss";
import Banner from "../../components/Banner/Banner";

const DataVisualization: React.FC = () => {
  const { content, error } = useMarkdownContent("/content/datavis/datavis.md");


  const { title, tagline} = content 
  ? extractBanner(content) 
  : { title: '', tagline: '' };

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
