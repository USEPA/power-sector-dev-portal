// src/pages/datavis/index.tsx
import React from "react";
// import { extractBanner } from "../../utilities/extractContent";

import useMarkdownContent from "../../hooks/useMarkdownContent";
import "./datavis.scss";
// import Banner from "../../components/Banner/Banner";
import ReactMarkdown from "react-markdown";

const DataVisualization: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(`${base}content/datavis/datavis.md`);


  // const { title, tagline } = content ? extractBanner(content) : { title: '', tagline: '' };

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div>
       <ReactMarkdown>{content}</ReactMarkdown>
      {/* <Banner title={title} tagline={tagline} level="level1" /> */}
    </div>
  );
};

export default DataVisualization;
