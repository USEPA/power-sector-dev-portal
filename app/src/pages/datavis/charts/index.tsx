// src/pages/datavis/index.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useMarkdownContent from '../../../hooks/useMarkdownContent';
import Banner from '../../../components/datavis/Banner';
import { Link } from 'react-router-dom';

const Charts: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/charts/charts.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }
    
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <Banner title="Charts" tagline="" />
            <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
                <li><Link to="/datavis/charts/line-charts">Line Charts</Link></li>
                <li><Link to="/datavis/charts/bar-charts">Bar Charts</Link></li>
                <li><Link to="/datavis/charts/area-charts">Area Charts</Link></li>
                <li><Link to="/datavis/charts/maps">Maps</Link></li>
              </ul>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default Charts;
