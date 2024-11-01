// src/pages/datavis/index.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownContent from '../../../hooks/useMarkdownContent';

const AreaCharts: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/charts/area-charts.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }
    
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Area Charts</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default AreaCharts;
