// src/components/Navigation.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navigation: React.FC = () => {
  const location = useLocation();

  const getPageInfo = () => {
    if (location.pathname.startsWith("/datavis")) {
      return { route: "/datavis", title: "Data Visualization Style Guide", isDatavisRoute: true };
    }
    if (location.pathname.startsWith("/rstyle")) {
      return { route: "/rstyle", title: "R Style Guide", isRStyleRoute: true };
    }
    if (location.pathname.startsWith("/api")) {
      return { route: "/api", title: "API Documentation", isApiRoute: true };
    }
    return { route: "/", title: "Open Source Resource Hub", isHomeRoute: true };
  };
  
  // Usage
  const { route, title, isDatavisRoute, isApiRoute, isRStyleRoute, isHomeRoute } = getPageInfo();
  
  

  return (
    <div className="main-banner">
       <h3><Link to={route}>{title}</Link></h3>
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
            <li className="backToHomeLink">
              <Link to="/">Back to Open Source Hub</Link>
            </li>
          </ul>
        </nav>
      )}
      {isApiRoute || isRStyleRoute && (
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
           <li className="backToHomeLink">
              <Link to="/">Back to Open Source Hub</Link>
            </li>
          </ul>
        </nav>
      )}
      {isHomeRoute && (
        <></>
      )}
    </div>
  );
};

export default Navigation;
