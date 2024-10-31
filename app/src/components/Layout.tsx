// src/components/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <header style={{ marginBottom: '20px' }}>
                <h1>My React App</h1>
            </header>
            <main>{children}</main>
            <footer style={{ marginTop: '20px' }}>
                <p>&copy; 2024 My React App</p>
            </footer>
        </div>
    );
};

export default Layout;
