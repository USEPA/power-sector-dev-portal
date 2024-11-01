// src/components/datavis/PrincipleItem.tsx
import React from 'react';

interface PrincipleItemProps {
    title: string;
    content: string;
}

const PrincipleItem: React.FC<PrincipleItemProps> = ({ title, content }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#007bff' }}>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default PrincipleItem;
