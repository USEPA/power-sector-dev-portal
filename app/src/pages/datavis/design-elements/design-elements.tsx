// src/pages/datavis/principles.tsx
import React from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import Banner from "../../../components/datavis/Banner/Banner";
import InfoBlock from "../../../components/datavis/InfloBlock/InfoBlock";

const DesignElements: React.FC = () => {
  const { content, error } = useMarkdownContent('/content/datavis/design-elements/design-elements.md');

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

    const extractPrinciples = (markdownContent: string) => {
      const sections = markdownContent.split(/##\s+/);
      const titleSection = sections[0].split("\n\n");
      const title = titleSection[0].replace(/^#\s*/, '').trim();
      const tagline = titleSection[1].trim();
      const introSection = sections[1].split("\n\n");
      const introTitle = introSection[0].trim();
      const introContent = introSection[1].trim();


      const elements = sections.slice(2).map((section) => {
          const lines = section.split("\n").map(line => line.trim()).filter(line => line);
          const title = lines[0];

          const bodyLines = lines.slice(1);
          const contentParts: string[] = [];
          let link = '';

          bodyLines.forEach(line => {
              const linkMatch = line.match(/\[(.*?)\]\((.*?)\)/);
              if (linkMatch) {
                  link = linkMatch[2]; 
              } else {
                  contentParts.push(line); 
              }
          });

          const content = contentParts.join("\n").trim(); 

          return { title: title.trim(), content, link };
      });

      return { title, tagline, introTitle, introContent, elements };
  };

  const { title, tagline, introTitle, introContent, elements } = content 
      ? extractPrinciples(content) 
      : { title: '', tagline: '', introTitle: '', introContent: '', elements: [] };

  return (
    <div className="principles-page">
      <Banner
        title={title}
        tagline={tagline}
      />
      <div className="container">
      <div className="intro-section">
        <h2>{introTitle}</h2>
        <p>{introContent}</p>
      </div>
        <div className="grid grid-col--two ">
          {elements.map((element, index) => (
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

