// src/pages/datavis/index.tsx
import React from 'react';
import useMarkdownContent from '../../../hooks/useMarkdownContent';
import Banner from '../../../components/datavis/Banner/Banner';
import { extractBanner } from '../../../utilities/extractBanner';
import { extractIntro } from '../../../utilities/extractIntro';

const Charts: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/charts/charts.md');

    const { title, tagline} = content 
    ? extractBanner(content) 
    : { title: '', tagline: '' };

    const { introTitle, introContent} = content 
    ? extractIntro(content) 
    : { introTitle: '', introContent: '' };
  
    if (error) {
      return <div>Error loading content: {error}</div>;
    }
    
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
      </div>
    </div>
    );
};

export default Charts;
