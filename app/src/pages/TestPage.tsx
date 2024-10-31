// src/pages/TestPage.tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';

const TestPage: React.FC = () => {
    const [markdownContent, setMarkdownContent] = useState<string>('');

    useEffect(() => {
        fetch('/content/test.md')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.text();
            })
            .then((text) => setMarkdownContent(text))
            .catch((error) => console.error('Error fetching the Markdown file:', error));
    }, []);
    

    return (
        <Layout>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </Layout>
    );
};

export default TestPage;
