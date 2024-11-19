// src/components/datavis/InfloBlock/InfoBlock.tsx
import React from 'react';
import './InfoBlock.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface InfoBlockProps {
    title: string;
    content?: string;
    link?: string; 
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, content, link }) => {
    return (
        <div className="info-block">
            <h3>{title}</h3>
            {content && <p>{content}</p>}
            {link && (
                <a href={link}>
                    Learn about {title} <ArrowForwardIcon />
                </a>
            )}
        </div>
    );
};

export default InfoBlock;
