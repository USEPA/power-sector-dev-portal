// src/pages/datavis/index.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownContent from '../../hooks/useMarkdownContent';
import './index.scss';

const DataVisualization: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/datavis.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }
    
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Data Visualization Style Guide</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default DataVisualization;
