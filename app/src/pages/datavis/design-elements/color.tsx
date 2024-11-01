// src/pages/datavis/index.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownContent from '../../../hooks/useMarkdownContent';

const Color: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/design-elements/color.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>Color</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default Color;
