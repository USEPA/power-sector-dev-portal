// src/pages/datavis/index.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownContent from '../../hooks/useMarkdownContent';
import './index.scss';
import { Link } from 'react-router-dom';

const DataVisualization: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/datavis.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>Data Visualization Style Guide</h1>
            <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
              <li><Link to="/datavis/principles">Principles</Link></li>
              <li><Link to="/datavis/design-elements">Design Elements</Link></li>
              <li><Link to="/datavis/charts">Charts</Link></li>
              <li><Link to="/datavis/further-reading">Further Reading</Link></li>
            </ul>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default DataVisualization;
