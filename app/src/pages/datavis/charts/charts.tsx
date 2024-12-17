import React from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import Banner from "../../../components/Banner/Banner";
import {
  extractBanner,
  extractIntro,
  extractSections,
} from "../../../utilities/extractContent";
import { Section, Card } from "../../../types/ContentTypes";
import "./Charts.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile";

const Charts: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(
    `${base}content/datavis/charts/charts.md`
  );
  const isMobileView = useIsMobile();

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
              {section.cards &&
                section.cards.map((card: Card, idx: number) => (
                  <div key={idx} className="card">
                    {isMobileView ? (
                      <img src={card.imagemb} alt={card.title} />
                    ) : (
                      <img src={card.image} alt={card.title} />
                    )}
                    <div className="card-content">
                      <h4>{card.title}</h4>
                      <p>{card.content}</p>
                      {card.link ? (
                        <Link to={card.link}>
                          Learn about {card.title} <ArrowForwardIcon />
                        </Link>
                      ) : (
                        " "
                      )}
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
