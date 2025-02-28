import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.scss";
import { getPageLevelforBreadcrumbs } from "../../utilities/getPageInfo";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  // Map of path segments to user-friendly titles
  const breadcrumbTitles: { [key: string]: string } = {
    datavis: "Data Visualization Style Guide",
    "design-elements": "Design Elements",
    principles: "Principles",
    color: "Color",
    symbology: "Symbology",
    typography: "Typography",
    layout: "Chart Layout",
    charts: "Charts",
    maps: "Maps",
    "line-charts": "Line Charts",
    "bar-charts": "Bar Charts",
    "area-charts": "Area Charts",
    "further-reading": "Further Reading",
    api: "API Documentation",
    rstyle: "Custom ggplot Theme",
    "using-the-theme": "Using the Theme",
    "best-practices": "Best Practices",
  };

  // Split the current path into segments
  const segments = location.pathname.split("/").filter(Boolean);

  // Generate breadcrumb links
  let currentPath = "";
  const breadcrumbs = segments.map((segment) => {
    currentPath += `/${segment}`;
    return {
      name: breadcrumbTitles[segment] || segment,
      path: currentPath,
    };
  });

  
    const {
      isRouteWithBanner
    } = getPageLevelforBreadcrumbs(location);

  return (
    <nav className="usa-breadcrumb" aria-label="Breadcrumbs">
      <div className={isRouteWithBanner ? "banner-container" : "banner-container-with-sidenav"}>
      {/* container-with-sidenav */}
        <ol className="usa-breadcrumb__list">
          <li className="usa-breadcrumb__list-item">
            <Link to="/" className="usa-breadcrumb__link">
              Open Source Resource Hub
            </Link>
          </li>

          {breadcrumbs.map((breadcrumb, index) => (
            <li
              key={breadcrumb.path}
              className="usa-breadcrumb__list-item"
              aria-current={
                index === breadcrumbs.length - 1 ? "page" : undefined
              }
            >
              {index === breadcrumbs.length - 1 ? (
                <span>{breadcrumb.name}</span>
              ) : (
                <Link to={breadcrumb.path} className="usa-breadcrumb__link">
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
