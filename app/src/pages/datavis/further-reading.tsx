// src/pages/datavis/index.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownContent from '../../hooks/useMarkdownContent';

const FurtherReading: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/further-reading/further-reading.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }
    
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Further Reading</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default FurtherReading;
