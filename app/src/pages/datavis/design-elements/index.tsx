// src/pages/datavis/index.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownContent from '../../../hooks/useMarkdownContent';
import Banner from '../../../components/datavis/Banner';

const DesignElements: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/design-elements/design-elements.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }
    
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <Banner title="Design Elements" tagline="" />
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default DesignElements;
