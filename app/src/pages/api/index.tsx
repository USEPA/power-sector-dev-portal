// src/pages/datavis/index.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownContent from '../../hooks/useMarkdownContent';

const APIDocumentation: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/api/api.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>API Documentation</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default APIDocumentation;
