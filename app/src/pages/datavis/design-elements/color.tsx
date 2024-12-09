import React from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import {
  extractBanner,
  extractIntro,
  extractSections,
} from "../../../utilities/extractContent";
import { Section } from "../../../types/ContentTypes";
import ReactMarkdown from "react-markdown";
import renderHeader from "../../../utilities/renderContent";
import SVGRenderer from "../../../components/SvgRenderer/SvgRenderer";
import SideNav from "../../../components/SideNav/SideNav";

const ColorPage: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(`${base}content/datavis/design-elements/color.md`
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
          <div className="usa-in-page-nav-container container">
          <main id="main-content" className="main-content">
      <div className="intro-section">
        <h1>{title}</h1>
        <h2>{introTitle}</h2>
        <ReactMarkdown>{introContent}</ReactMarkdown>
        </div>

        {sections.map((section) => (
          <>
            {section.title && renderHeader(section.title, section.level || 3)}
            
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
          </>
        ))}
        </main>
        <SideNav />
      </div>
    </div>
  );
};

export default ColorPage;
