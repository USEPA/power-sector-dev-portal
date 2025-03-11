import React from "react";
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

  const { title, tagline } = content
    ? extractBanner(content)
    : { title: "", tagline: "" };
  const { introTitle, introContent } = content
    ? extractIntro(content)
    : { introTitle: "", introContent: "" };
  const sections: Section[] = content ? extractSections(content) : [];
  const accordions: Accordion[] = content ? extractAccordions(content) : [];

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
        {sections.map((section: Section, index: number) => (
          <div key={index} className="section">
            {!section.cards || section.cards.length === 0 && (
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
            )}

            {section.cards && (
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
            )}
          </div>
        ))}

        <div className="usa-accordion">
          {accordions.map((accordion: Accordion, index: number) => (
            <div key={index} className="accordion">
              <h3 className="usa-accordion__heading">
                <button
                  type="button"
                  className="usa-accordion__button"
                  aria-expanded="false"
                  aria-controls={`a-${index}`}
                >
                  {accordion.title}
                </button>
              </h3>
              <div
                id={`a-${index}`}
                className="usa-accordion__content usa-prose"
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
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Charts;
