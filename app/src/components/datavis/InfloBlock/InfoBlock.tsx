// src/components/datavis/InfloBlock/InfoBlock.tsx
import React from 'react';
import './InfoBlock.scss';

interface InfoBlockProps {
    title: string;
    content: string;
    link?: string; 
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, content, link }) => {
    return (
        <div className="info-block">
            <h3>{title}</h3>
            {content && <p>{content}</p>}
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    Visit {title}
                </a>
            )}
        </div>
    );
};

export default InfoBlock;
