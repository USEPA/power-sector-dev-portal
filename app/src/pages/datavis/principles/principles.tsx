// src/pages/datavis/principles.tsx
import React from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import Banner from "../../../components/datavis/Banner/Banner";
import InfoBlock from "../../../components/datavis/InfloBlock/InfoBlock";
import './principles.scss';

const Principles: React.FC = () => {
  const { content, error } = useMarkdownContent(
    "/content/datavis/principles/principles.md"
  );

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


      const principles = sections.slice(2).map((section) => {
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

      return { title, tagline, introTitle, introContent, principles };
  };

  const { title, tagline, introTitle, introContent, principles } = content 
      ? extractPrinciples(content) 
      : { title: '', tagline: '', introTitle: '', introContent: '', principles: [] };

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
          {principles.map((principle, index) => (
            <InfoBlock
              key={index}
              title={principle.title}
              content={principle.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Principles;
