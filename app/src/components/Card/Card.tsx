import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

interface CardProps {
    title?: string;
    content?: string;
    link?: string; 
}

const Card: React.FC<CardProps> = ({ title, content, link }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            {content && <p className="content">{content}</p>}
            {link && (
                <Link to={link} className="usa-button blue-button">
                    {title === "Principles" ? "Read the Principles" 
                    : title === "Design Elements" ? "Learn About Design Elements" 
                    : title === "Charts" ? "Choose a Chart"
                    : "Find Further Readings"
                    }
                </Link>
            )}
        </div>
    );
};

export default Card;
