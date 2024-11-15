import React from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import Banner from "../../../components/datavis/Banner/Banner";
import InfoBlock from "../../../components/datavis/InfloBlock/InfoBlock";
import { extractBanner, extractIntro, extractSections } from "../../../utilities/extractContent";
import { Section } from "../../../types/ContentTypes"; 

const DesignElements: React.FC = () => {
  const { content, error } = useMarkdownContent('/content/datavis/design-elements/design-elements.md');

  // Extract content from markdown
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
        {sections.map((section, idx) => (
          <div key={idx} className="grid grid-col--two">
            {section.cards.map((card, cardIdx) => (
              <InfoBlock
                key={cardIdx}
                title={card.title}
                content={card.description}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignElements;
