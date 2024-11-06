// src/pages/datavis/principles.tsx
import React from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import Banner from "../../../components/datavis/Banner/Banner";
import InfoBlock from "../../../components/datavis/InfloBlock/InfoBlock";
import { extractBanner } from "../../../utilities/extractBanner";
import { extractInfoBlock } from "../../../utilities/extractInfoBlock";
import { extractIntro } from "../../../utilities/extractIntro";

const DesignElements: React.FC = () => {
  const { content, error } = useMarkdownContent('/content/datavis/design-elements/design-elements.md');

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  const { title, tagline} = content 
  ? extractBanner(content) 
  : { title: '', tagline: '' };


  const { info} = content 
  ? extractInfoBlock(content) 
  : { info: [] };

  const { introTitle, introContent} = content 
  ? extractIntro(content) 
  : { introTitle: '', introContent: '' };

  return (
    <div className="design-elements-page">
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
          {info.map((element, index) => (
            <InfoBlock
              key={index}
              title={element.title}
              content={element.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignElements;

