// src/pages/datavis/further-reading.tsx
import React from 'react';
import useMarkdownContent from '../../../../hooks/useMarkdownContent';
import Banner from '../../../../components/datavis/Banner/Banner';
import InfoBlock from '../../../../components/datavis/InfloBlock/InfoBlock';
import './further-reading.scss';

const FurtherReading: React.FC = () => {
    const { content, error } = useMarkdownContent('/content/datavis/further-reading/further-reading.md');

    if (error) {
        return <div>Error loading content: {error}</div>;
    }

    const extractFurtherReading = (markdownContent: string) => {
        const sections = markdownContent.split(/##\s+/);
        const titleSection = sections[0].split("\n\n");
        const title = titleSection[0].replace(/^#\s*/, '').trim();
        const tagline = titleSection[1].trim();
        const introSection = sections[1].split("\n\n");
        const introTitle = introSection[0].trim();
        const introContent = introSection[1].trim();


        const resources = sections.slice(2).map((section) => {
            const lines = section.split("\n").map(line => line.trim()).filter(line => line);
            const title = lines[0];

            const bodyLines = lines.slice(1);
            const contentParts: string[] = [];
            let link = '';

            bodyLines.forEach(line => {
                const linkMatch = line.match(/\[(.*?)\]\((.*?)\)/);
                if (linkMatch) {
                    link = linkMatch[2]; 
                } else {
                    contentParts.push(line); 
                }
            });

            const content = contentParts.join("\n").trim(); 

            return { title: title.trim(), content, link };
        });

        return { title, tagline, introTitle, introContent, resources };
    };

    const { title, tagline, introTitle, introContent, resources } = content 
        ? extractFurtherReading(content) 
        : { title: '', tagline: '', introTitle: '', introContent: '', resources: [] };

    return (
        <div className="further-reading-page">
            <Banner title={title} tagline={tagline} level="level2" />
            <div className="container">
                <div className="intro-section">
                    <h2>{introTitle}</h2>
                    <p>{introContent}</p>
                </div>
                <div className="grid grid-col--one">
                    {resources.map((resource, index) => (
                        <InfoBlock
                            key={index}
                            title={resource.title}
                            content={resource.content} 
                            link={resource.link} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FurtherReading;
