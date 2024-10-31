// src/pages/TestPage.tsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';

const TestPage: React.FC = () => {
    const [markdownContent, setMarkdownContent] = useState<string>('');

    useEffect(() => {
        fetch('./content/test.md')
            .then((res) => res.text())
            .then((text) => setMarkdownContent(text));
    }, []);

    return (
        <Layout>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </Layout>
    );
};

export default TestPage;
