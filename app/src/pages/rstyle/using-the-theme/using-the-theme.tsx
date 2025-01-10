import React from 'react';
import useMarkdownContent from '../../../hooks/useMarkdownContent';
import InfoBlock from '../../../components/InfloBlock/InfoBlock';
import { extractIntro, extractSections } from '../../../utilities/extractContent';
import { Section } from '../../../types/ContentTypes';
import './using-the-theme.scss';

const UsingTheTheme: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(`${base}content/rstyle/using-the-theme/using-the-theme.md`);
  const { introTitle, introContent } = content ? extractIntro(content) : { introTitle: '', introContent: '' };
  const sections: Section[] = content ? extractSections(content) : [];

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div className="using-the-theme-page">
      <div className="container">
        <div className="intro-section">
          <h2>{introTitle}</h2>
          <p>{introContent}</p>
        </div>
        {sections.map((section, index) => (
          <div key={index} className="section">
            <h3>{section.title}</h3>
            <div className="grid grid-col--one">
            {section.cards && section.cards.map((card, idx) => (
                <InfoBlock
                  key={idx}
                  title={card.title}
                  content={card.content}
                  link={card.link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsingTheTheme;
