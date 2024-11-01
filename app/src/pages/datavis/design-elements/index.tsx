// src/pages/datavis/index.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownContent from '../../../hooks/useMarkdownContent';
import Banner from '../../../components/datavis/Banner';
import { Link } from 'react-router-dom';

const DesignElements: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/design-elements/design-elements.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }
    
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <Banner title="Design Elements" tagline="" />
            <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
                <li><Link to="/datavis/design-elements/color">Color</Link></li>
                <li><Link to="/datavis/design-elements/typography">Typography</Link></li>
                <li><Link to="/datavis/design-elements/symbology">Symbology</Link></li>
                <li><Link to="/datavis/design-elements/layout">Layout</Link></li>
              </ul>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default DesignElements;
