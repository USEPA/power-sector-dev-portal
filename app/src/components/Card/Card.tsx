import React from "react";
import "./Card.scss";
import { Link, useLocation } from "react-router-dom";

interface CardProps {
  title?: string;
  content?: string;
  link?: string;
}

const getClassNameFromTitle = (title?: string): string => {
  if (!title) return "";

  const allowedTitles = [
    "Data Visualization Style Guide",
    "R Style Guide",
    "API",
  ];

  if (allowedTitles.includes(title)) {
    return title
      .split(" ") 
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(""); 
  }

  return "";
};

const Card: React.FC<CardProps> = ({ title, content, link }) => {
  const { pathname } = useLocation(); 
  const className = pathname === "/" ? getClassNameFromTitle(title) : "";

  return (
    <div className={`card ${className}`}>
      <h3>{title}</h3>
      {content && <p className="content">{content}</p>}
      {link && (
        <Link to={link} className="usa-button blue-button">
          {title === "Principles"
            ? "Read the Principles"
            : title === "Design Elements"
            ? "Learn About Design Elements"
            : title === "Charts"
            ? "Choose a Chart"
            : title === "Further Readings"
            ? "Find Further Readings"
            : `Go to ${title}`}
        </Link>
      )}
    </div>
  );
};

export default Card;
