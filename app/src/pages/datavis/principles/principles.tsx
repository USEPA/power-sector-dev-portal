// src/pages/datavis/principles.tsx
import React from 'react';
import useMarkdownContent from '../../../hooks/useMarkdownContent';
import Banner from '../../../components/datavis/Banner';
import PrincipleItem from '../../../components/datavis/PrincipleItem';
// import './Principles.css';

const Principles: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/principles/principles.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }

    const extractPrinciples = (markdownContent: string) => {
        const sections = markdownContent.split(/###\s+/).slice(1); 
        return sections.map((section) => {
            const [title, ...body] = section.split('\n'); 
            const content = body.join('\n').trim(); 
            return { title, content };
        });
    };

    
    const principles = extractPrinciples(content);

    return (
        <div className="principles-page">
            <Banner title="Principles" tagline="General advice on how data visualizations and data products should be approached." />
            {principles.map((principle, index) => (
                <PrincipleItem key={index} title={principle.title} content={principle.content} />
            ))}
        </div>
    );
};

export default Principles;
