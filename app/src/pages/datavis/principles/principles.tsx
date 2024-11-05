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
    const sections = markdownContent.split(/##\s+/).slice(1);
    const introSection = sections[0].split("\n\n"); 
    const introTitle = introSection[0].trim(); 
    const introContent = introSection[1].trim(); 

    const principles = sections.slice(1).map((section) => {
      const [title, ...body] = section.split("\n");
      const content = body.join("\n").trim();
      return { title, content };
    });

    return { introTitle, introContent, principles }; 
  };

  const { introTitle, introContent, principles } = content 
  ? extractPrinciples(content) 
  : { introTitle: '', introContent: '', principles: [] };

  return (
    <div className="principles-page">
      <Banner
        title="Principles"
        tagline="General advice on how data visualizations and data products should be approached."
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
