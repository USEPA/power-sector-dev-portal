import React, { useState } from "react";
import useMarkdownContent from "../../../hooks/useMarkdownContent";
import Banner from "../../../components/Banner/Banner";
import {
  extractAccordions,
  extractBanner,
  extractIntro,
  extractSections,
} from "../../../utilities/extractContent";
import { Section, Card, Accordion } from "../../../types/ContentTypes";
import "./Charts.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile";
import SVGRenderer from "../../../components/SvgRenderer/SvgRenderer";
import ReactMarkdown from "react-markdown";
import renderHeader from "../../../utilities/renderContent";

const Charts: React.FC = () => {
  const base = import.meta.env.BASE_URL;
  const { content, error } = useMarkdownContent(
    `${base}content/datavis/charts/charts.md`
  );
  const isMobileView = useIsMobile();
  const [openAccordions, setOpenAccordions] = useState<number[]>([]);

  const { title, tagline } = content
    ? extractBanner(content)
    : { title: "", tagline: "" };
  const { introTitle, introContent } = content
    ? extractIntro(content)
    : { introTitle: "", introContent: "" };
  const sections: Section[] = content ? extractSections(content) : [];
  const accordions: Accordion[] = content ? extractAccordions(content) : [];

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prevOpenAccordions) => {
      if (prevOpenAccordions.includes(index)) {
        return prevOpenAccordions.filter((i) => i !== index);
      } else {
        return [...prevOpenAccordions, index];
      }
    });
  };

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <div className="page">
      <Banner title={title} tagline={tagline} level="level2" />
      <div className="container">
        <div className="intro-section">
          <h2>{introTitle}</h2>
          <ReactMarkdown>{introContent}</ReactMarkdown>
        </div>
        {sections.map((section: Section, index: number) => (
          <div key={index} className="section">
            {!section.cards ||
              (section.cards.length === 0 && (
                <>
                  {section.title &&
                    renderHeader(section.title, section.level || 3)}
                  {section.content && (
                    <div>
                      <ReactMarkdown>{section.content}</ReactMarkdown>
                    </div>
                  )}
                  {section.image &&
                    (section.image?.endsWith(".svg") ? (
                      <SVGRenderer
                        src={section.image}
                        alt={section.alt ? section.alt : section.title}
                      />
                    ) : (
                      <img
                        src={section.image}
                        alt={section.alt ? section.alt : section.title}
                        className="section-image"
                      />
                    ))}
                </>
              ))}

{!section.cards ||
              (section.cards.length > 0 && (
              <>
                {section.title &&
                  renderHeader(section.title, section.level || 3)}
                {section.content && (
                  <div>
                    <ReactMarkdown>{section.content}</ReactMarkdown>
                  </div>
                )}
                <div className="cards">
                  {section.cards.map((card: Card, idx: number) => (
                    <div key={idx} className="charts-card">
                      {isMobileView ? (
                        <img src={card.imagemb} alt={card.alt} />
                      ) : (
                        <img src={card.image} alt={card.alt} />
                      )}
                      <div className="card-content">
                        <h4>{card.title}</h4>
                        <p>{card.content}</p>
                        {card.link && (
                          <Link to={card.link}>
                            Learn about {card.title} <ArrowForwardIcon />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
               ))}
          </div>
        ))}

        <div className="accordion-container">
          {accordions.map((accordion: Accordion, index: number) => {
            const isOpen = openAccordions.includes(index);
            return (
              <div key={index} className="accordion">
                <h3 className="accordion__heading">
                  <button
                    type="button"
                    className="accordion__button"
                    aria-expanded={isOpen}
                    aria-controls={`a-${index}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {accordion.title}
                  </button>
                </h3>
                <div
                  id={`a-${index}`}
                  className={`accordion__content ${isOpen ? "open" : "closed"}`}
                >
                  <div className="cards">
                    {accordion.cards &&
                      accordion.cards.map((card: Card, idx: number) => (
                        <div key={idx} className="charts-card">
                          {isMobileView ? (
                            <img src={card.imagemb} alt={card.alt} />
                          ) : (
                            <img src={card.image} alt={card.alt} />
                          )}
                          <div className="card-content">
                            <h4>{card.title}</h4>
                            <p>{card.content}</p>
                            {card.link && (
                              <Link to={card.link}>
                                Learn about {card.title} <ArrowForwardIcon />
                              </Link>
                            )}
                            {!card.link && (
                              <p><b><i>(not included in this guide)</i></b></p>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Charts;
