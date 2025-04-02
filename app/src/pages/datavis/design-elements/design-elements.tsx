import React from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import Banner from "../../../components/Banner/Banner";
import {
  extractBanner,
  extractIntro,
  extractSections,
} from "../../../utilities/extractContent";
import { Section } from "../../../types/ContentTypes";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile";

const DesignElements: React.FC = () => {
  const isMobileView = useIsMobile();
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(
    `${base}content/datavis/design-elements/design-elements.md`
  );

  // Extract content from markdown
  const { title, tagline } = content
    ? extractBanner(content)
    : { title: "", tagline: "" };
  const { introTitle, introContent } = content
    ? extractIntro(content)
    : { introTitle: "", introContent: "" };
  const sections: Section[] = content ? extractSections(content) : [];

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div className="page">
      <Banner title={title} tagline={tagline} level="level2" />
      <div className="container">
        <div className="intro-section">
          <h2>{introTitle}</h2>
          <p>{introContent}</p>
        </div>
        {sections.map((section, idx) => (
          <div key={idx} className="section">
            {section.cards &&
              section.cards.map((card) => (
                <div className="charts-card">
                  {isMobileView ? (
                    <img src={card.imagemb} alt={card.alt} />
                  ) : (
                    <img src={card.image} alt={card.alt} />
                  )}
                  <div className="card-content">
                    <h4>{card.title}</h4>
                    {card.content && (
                      <ReactMarkdown>{card.content}</ReactMarkdown>
                    )}
                    {card.link && (
                      <Link className="usa-button blue-button" to={card.link}>
                        Learn about {card.title}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignElements;
