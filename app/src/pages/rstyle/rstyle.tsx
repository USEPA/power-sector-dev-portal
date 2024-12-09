// src/pages/datavis/index.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownContent from '../../hooks/useMarkdownContent';

const RStyleGuide: React.FC = () => {
    const { content, error } = useMarkdownContent(process.env.PUBLIC_URL + '/content/rstyle/rstyle.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>R Style Guide</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default RStyleGuide;
