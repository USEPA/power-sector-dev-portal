import React from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import { extractBanner, extractIntro, extractSections } from "../../../utilities/extractContent";
import { Section } from "../../../types/ContentTypes"; 
import ReactMarkdown from 'react-markdown'; 

const ColorPage: React.FC = () => {
  const { content, error } = useMarkdownContent('/content/datavis/design-elements/color.md');

  // Extract content from markdown
  const { title } = content ? extractBanner(content) : { title: '' };
  const { introTitle, introContent } = content ? extractIntro(content) : { introTitle: '', introContent: '' };
  const sections: Section[] = content ? extractSections(content) : [];

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div className="color-page">
      <div className="container">
        <h1>{title}</h1>

        <div className="intro-section">
          <h2>{introTitle}</h2>
          <ReactMarkdown>{introContent}</ReactMarkdown>
        </div>


        {sections.map((section, idx) => (
          <div key={idx} className="section">
            <h3>{section.title}</h3>
            <div>
              <ReactMarkdown>{section.content}</ReactMarkdown>
            </div>

            {section.subsections && (
              <div className="subsections">
                {section.subsections.map((subsection, subIdx) => (
                  <div key={subIdx} className="subsection">
                    <h4>{subsection.title}</h4>
                    <div>
                      <ReactMarkdown>{subsection.content}</ReactMarkdown>
                    </div>

                    {subsection.image && (
                      <div className="image-wrapper">
                        <img 
                          src={subsection.image} 
                          alt={subsection.title} 
                          className="subsection-image" 
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPage;
