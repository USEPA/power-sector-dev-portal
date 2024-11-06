// src/pages/datavis/DataVisLayout.tsx
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const DataVisLayout: React.FC = () => {
  const location = useLocation();

  // Determine if the current path is a chart route
  const isChartRoute = location.pathname.startsWith("/datavis/charts");

  return (
    <div>
      {/* Main Navigation */}
      <nav style={{ padding: "10px", backgroundColor: "#e8e8e8" }}>
        <div className="banner-container">
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              display: "flex",
              gap: "10px",
            }}
          >
            <li>
              <Link to="/datavis/principles">Principles</Link>
            </li>
            <li>
              <Link to="/datavis/design-elements">Design Elements</Link>
            </li>
            <li>
              <Link to="/datavis/charts">Charts</Link>
            </li>
            <li>
              <Link to="/datavis/further-reading">Further Reading</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Conditional Chart Navigation */}
      {isChartRoute && (
        <nav style={{ padding: "10px", backgroundColor: "#e8e8e8" }}>
          <div className="banner-container">
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                display: "flex",
                gap: "10px",
              }}
            >
              <li>
                <Link to="/datavis/charts/line-charts">Line Charts</Link>
              </li>
              <li>
                <Link to="/datavis/charts/bar-charts">Bar Charts</Link>
              </li>
              <li>
                <Link to="/datavis/charts/area-charts">Area Charts</Link>
              </li>
              <li>
                <Link to="/datavis/charts/maps">Maps</Link>
              </li>
            </ul>
          </div>
        </nav>
      )}

      {/* Outlet renders the component of the nested route */}
      <Outlet />
    </div>
  );
};

export default DataVisLayout;
