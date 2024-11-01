// src/pages/datavis/index.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownContent from '../../../hooks/useMarkdownContent';

const LineCharts: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/charts/line-charts.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>Line Charts</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default LineCharts;
