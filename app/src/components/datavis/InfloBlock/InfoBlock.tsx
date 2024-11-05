// src/components/datavis/PrincipleItem.tsx
import React from 'react';
import "./InfoBlock.scss"; 

interface InfoBlockProps {
    title: string;
    content: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, content }) => {
    return (
        <div className="InfoBlock">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default InfoBlock;
