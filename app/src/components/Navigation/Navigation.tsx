// src/components/Navigation.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navigation: React.FC = () => {
  const location = useLocation();

  //   Determine current route
  const isDatavisRoute = location.pathname.startsWith("/datavis");
  const isOtherRoute  = location.pathname.startsWith("/api") || location.pathname.startsWith("/rstyle");

  const getPageTitle = () => {
    if (location.pathname.startsWith("/datavis")) {
      return "Data Visualization Style Guide";
    }
    if (location.pathname.startsWith("/rstyle")) {
      return "R Style Guide";
    }
    if (location.pathname.startsWith("/api")) {
      return "API Documentation";
    }
    return "Open Source Resource Hub";
  };

  return (
    <div className="main-banner">
      <h3>{getPageTitle()}</h3>
      {isDatavisRoute && (
        <nav>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              display: "flex",
              gap: "10px",
              width: "100%",
            }}
          >
            <li>
              <Link to="/datavis/principles">Principles</Link>
            </li>
            <li className="dropdown">
              <Link to="/datavis/design-elements">
                Design Elements <KeyboardArrowDownIcon />
              </Link>
              <div className="dropdown-content">
                <Link to="/datavis/design-elements/color">Color</Link>
                <Link to="/datavis/design-elements/typography">Typography</Link>
                <Link to="/datavis/design-elements/symbology">Symbology</Link>
                <Link to="/datavis/design-elements/layout">Chart Layout</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/datavis/charts">
                Charts <KeyboardArrowDownIcon />
              </Link>
              <div className="dropdown-content">
                <Link to="/datavis/charts/line-charts">Line Charts</Link>
                <Link to="/datavis/charts/bar-charts">Bar Charts</Link>
                <Link to="/datavis/charts/area-charts">Area Charts</Link>
                <Link to="/datavis/charts/maps">Maps</Link>
              </div>
            </li>
            <li>
              <Link to="/datavis/further-reading">Further Reading</Link>
            </li>
            <li>
              <Link to="/">Back to Open Source Hub</Link>
            </li>
          </ul>
        </nav>
      )}
      {isOtherRoute && (
        <nav>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              display: "flex",
              gap: "10px",
              width: "100%",
            }}
          >
            <li>
              <Link to="/">Back to Open Source Hub</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
