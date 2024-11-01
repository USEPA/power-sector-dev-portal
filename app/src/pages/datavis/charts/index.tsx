// src/pages/datavis/index.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownContent from '../../../hooks/useMarkdownContent';
import Banner from '../../../components/datavis/Banner';

const Charts: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/charts/charts.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }
    
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <Banner title="Charts" tagline="" />
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default Charts;
