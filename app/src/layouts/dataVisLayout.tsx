// src/pages/datavis/DataVisLayout.tsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DataVisLayout: React.FC = () => {
  return (
    <div>
      {/* Navigation */}
      <nav style={{ padding: '10px', backgroundColor: '#f4f4f4' }}>
        <ul style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none', padding: 0 }}>
          <li><Link to="/datavis/principles">Principles</Link></li>
          <li><Link to="/datavis/design-elements">Design Elements</Link></li>
          <li><Link to="/datavis/charts">Charts</Link></li>
          <li><Link to="/datavis/further-reading">Further Reading</Link></li>
        </ul>
      </nav>
      {/* Outlet renders the component of the nested route */}
      <Outlet />
    </div>
  );
};

export default DataVisLayout;
