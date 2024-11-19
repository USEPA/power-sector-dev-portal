import React from 'react';
import useMarkdownContent from '../../../hooks/useMarkdownContent';
import Banner from '../../../components/datavis/Banner/Banner';
import { extractBanner, extractIntro, extractSections } from '../../../utilities/extractContent';
import { Section, Card } from '../../../types/ContentTypes';
import './Charts.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Charts: React.FC = () => {
  const { content, error } = useMarkdownContent('/content/datavis/charts/charts.md');

  const { title, tagline } = content ? extractBanner(content) : { title: '', tagline: '' };
  const { introTitle, introContent } = content ? extractIntro(content) : { introTitle: '', introContent: '' };
  const sections: Section[] = content ? extractSections(content) : [];

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div className="design-elements-page">
      <Banner title={title} tagline={tagline} level="level2" />
      <div className="container">
        <div className="intro-section">
          <h2>{introTitle}</h2>
          <p>{introContent}</p>
        </div>
        {sections.map((section: Section, index: number) => (
          <div key={index} className="section">
            <h3>{section.title}</h3>
            <div className="cards">
              {section.cards && section.cards.map((card: Card, idx: number) => (
                <div key={idx} className="card">
                  <img src={card.image} alt={card.title} />
                  <div className="card-content">
                  <h4>{card.title}</h4>
                  <p>{card.content}</p>
                  {card.link ?
                  <a href={card.link}>Learn about {card.title} <ArrowForwardIcon /></a> 
                  : " " }
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charts;
