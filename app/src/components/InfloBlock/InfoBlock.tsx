// src/components/datavis/InfloBlock/InfoBlock.tsx
import React from "react";
import "./InfoBlock.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

interface InfoBlockProps {
  title?: string;
  content?: string;
  link?: string;
  type?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  content,
  link,
  type,
}) => {
  return (
    <div className="info-block">
      <h3>{title}</h3>
      {content && <ReactMarkdown>{content}</ReactMarkdown>}
      {link &&
        (type === "visit" ? (
          <a className="external-link" href={link} target="_blank" rel="noopener noreferrer">
            Visit {title} <ArrowForwardIcon />
          </a>
        ) : (
          <Link className="external-link" to={link}>
            Learn about {title} <ArrowForwardIcon />
          </Link>
        ))}
    </div>
  );
};

export default InfoBlock;
