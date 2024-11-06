// src/pages/datavis/principles.tsx
import React from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import Banner from "../../../components/datavis/Banner/Banner";
import InfoBlock from "../../../components/datavis/InfloBlock/InfoBlock";
import './principles.scss';
import { extractBanner } from "../../../utilities/extractBanner";
import { extractInfoBlock } from "../../../utilities/extractInfoBlock";

const Principles: React.FC = () => {
  const { content, error } = useMarkdownContent(
    "/content/datavis/principles/principles.md"
  );

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  const { title, tagline} = content 
  ? extractBanner(content) 
  : { title: '', tagline: '' };

  const { introTitle, introContent, info} = content 
  ? extractInfoBlock(content) 
  : { introTitle: '', introContent: '', info: [] };

  return (
    <div className="principles-page">
      <Banner
        title={title}
        tagline={tagline}
        level="level2" 
      />
      <div className="container">
      <div className="intro-section">
        <h2>{introTitle}</h2>
        <p>{introContent}</p>
      </div>
        <div className="grid grid-col--two ">
          {info.map((principle, index) => (
            <InfoBlock
              key={index}
              title={principle.title}
              content={principle.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Principles;
