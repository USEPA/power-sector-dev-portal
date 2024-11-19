import React from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import {
  extractBanner,
  extractIntro,
  extractSections,
} from "../../../utilities/extractContent";
import { Section } from "../../../types/ContentTypes";
import ReactMarkdown from "react-markdown";
import renderHeader from "../../../utilities/renderHeader";
import SVGRenderer from "../../../components/datavis/SvgRenderer/SvgRenderer";
import DoDontCard from "../../../components/datavis/DoDontCard/DoDontCard";

const Layout: React.FC = () => {
  const { content, error } = useMarkdownContent(
    "/content/datavis/design-elements/layout.md"
  );
  const { title } = content ? extractBanner(content) : { title: "" };
  const { introTitle, introContent } = content
    ? extractIntro(content)
    : { introTitle: "", introContent: "" };

  const sections: Section[] = content ? extractSections(content) : [];

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div className="color-page">
      <div className="container">
        <h1>{title}</h1>
        <h2>{introTitle}</h2>
        <ReactMarkdown>{introContent}</ReactMarkdown>

        {sections.map((section, idx) => (
          <div key={idx}>
            {renderHeader(section.title, section.level || 3)}
            {section.content && (
              <div>
                <ReactMarkdown>{section.content}</ReactMarkdown>
              </div>
            )}
            {section.image &&
              (section.image?.endsWith(".svg") ? (
                <SVGRenderer src={section.image} alt={section.title} />
              ) : (
                <img
                  src={section.image}
                  alt={section.title}
                  className="section-image"
                />
              ))}

            {section.cards && section.cards.length > 0 && (
              <div className="cards-container">
                {section.cards.map((card, cardIdx) => (
                  <DoDontCard
                    key={cardIdx}
                    type={card.type}
                    title={card.title}
                    content={card.content}
                    image={card.image}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
