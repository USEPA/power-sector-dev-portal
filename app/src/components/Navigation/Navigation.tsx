import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Navigation.scss";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Navigation: React.FC = () => {
  const location = useLocation();
  const [expandedSection, setExpandedSection] = useState<string | null>(null); 
  const dropdownRef = useRef<HTMLUListElement | null>(null); 
  const getPageInfo = () => {
    if (location.pathname.startsWith("/datavis")) {
      return {
        route: "/datavis",
        title: "Data Visualization Style Guide",
        isDatavisRoute: true,
      };
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
  const {
    route,
    title,
    isDatavisRoute,
    isApiRoute,
    isRStyleRoute,

  } = getPageInfo();

  // Function to toggle section open/closed
  const toggleSection = (sectionId: string) => {
    setExpandedSection((prev) => (prev === sectionId ? null : sectionId));
  };

  // Helper function to determine if the current path matches a given link
  const isCurrentPath = (path: string) => location.pathname.startsWith(path);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExpandedSection(null); // Close all dropdowns when clicking outside
      }
    };

    // Add event listener for click outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo">
              <em className="usa-logo__text">
                <a href={route} title={title}>
                  {title}
                </a>
              </em>
            </div>
            <button type="button" className="usa-menu-btn">
              Menu
            </button>
          </div>

          <nav aria-label="Primary navigation" className="usa-nav">
            <button type="button" className="usa-nav__close">
             <CloseIcon />
            </button>
            {isDatavisRoute && (
              <ul className="usa-nav__primary usa-accordion" ref={dropdownRef}>
                <li className="usa-nav__primary-item">
                  <a
                    href="/datavis/principles"
                    className={`usa-nav-link ${isCurrentPath("/datavis/principles") ? "usa-current" : ""}`}
                  >
                    <span>Principles</span>
                  </a>
                </li>
                <li className="usa-nav__primary-item">
                  <button
                    type="button"
                    className={`usa-accordion__button usa-nav__link ${isCurrentPath("/datavis/design-elements") || isCurrentPath("/datavis/design-elements/") ? "usa-current" : ""}`}
                    aria-expanded={expandedSection === "section-one" ? "true" : "false"}
                    aria-controls="basic-nav-section-one"
                    onClick={() => toggleSection("section-one")}
                  >
                    <span style={{display: 'flex', alignItems: 'center'}}>Design Elements <KeyboardArrowDownIcon /></span>
                  </button>
                  <ul
                    id="basic-nav-section-one"
                    className="usa-nav__submenu"
                    style={{ display: expandedSection === "section-one" ? "block" : "none" }}
                  >
                    <li className="usa-nav__submenu-item">
                      <a
                        href="/datavis/design-elements"
                        className={isCurrentPath("/datavis/design-elements") ? "usa-current" : ""}
                      >
                        <span>Design Elements</span>
                      </a>
                    </li>
                    <li className="usa-nav__submenu-item">
                      <a
                        href="/datavis/design-elements/color"
                        className={isCurrentPath("/datavis/design-elements/color") ? "usa-current" : ""}
                      >
                        <span>Color</span>
                      </a>
                    </li>
                    <li className="usa-nav__submenu-item">
                      <a
                        href="/datavis/design-elements/typography"
                        className={isCurrentPath("/datavis/design-elements/typography") ? "usa-current" : ""}
                      >
                        <span>Typography</span>
                      </a>
                    </li>
                    <li className="usa-nav__submenu-item">
                      <a
                        href="/datavis/design-elements/symbology"
                        className={isCurrentPath("/datavis/design-elements/symbology") ? "usa-current" : ""}
                      >
                        <span>Symbology</span>
                      </a>
                    </li>
                    <li className="usa-nav__submenu-item">
                      <a
                        href="/datavis/design-elements/layout"
                        className={isCurrentPath("/datavis/design-elements/layout") ? "usa-current" : ""}
                      >
                        <span>Chart Layout</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="usa-nav__primary-item">
                  <button
                    type="button"
                    className={`usa-accordion__button usa-nav__link ${isCurrentPath("/datavis/charts") || isCurrentPath("/datavis/charts/") ? "usa-current" : ""}`}
                    aria-expanded={expandedSection === "section-two" ? "true" : "false"}
                    aria-controls="basic-nav-section-two"
                    onClick={() => toggleSection("section-two")}
                  >
                    <span style={{display: 'flex', alignItems: 'center'}}>Charts <KeyboardArrowDownIcon /></span>
                  </button>
                  <ul
                    id="basic-nav-section-two"
                    className="usa-nav__submenu"
                    style={{ display: expandedSection === "section-two" ? "block" : "none" }}
                  >
                    <li className="usa-nav__submenu-item">
                      <a
                        href="/datavis/charts"
                        className={isCurrentPath("/datavis/charts") ? "usa-current" : ""}
                      >
                        <span>Charts</span>
                      </a>
                    </li>
                    <li className="usa-nav__submenu-item">
                      <a
                        href="/datavis/charts/line-charts"
                        className={isCurrentPath("/datavis/charts/line-charts") ? "usa-current" : ""}
                      >
                        <span>Line Charts</span>
                      </a>
                    </li>
                    <li className="usa-nav__submenu-item">
                      <a
                        href="/datavis/charts/bar-charts"
                        className={isCurrentPath("/datavis/charts/bar-charts") ? "usa-current" : ""}
                      >
                        <span>Bar Charts</span>
                      </a>
                    </li>
                    <li className="usa-nav__submenu-item">
                      <a
                        href="/datavis/charts/area-charts"
                        className={isCurrentPath("/datavis/charts/area-charts") ? "usa-current" : ""}
                      >
                        <span>Area Charts</span>
                      </a>
                    </li>
                    <li className="usa-nav__submenu-item">
                      <a
                        href="/datavis/charts/maps"
                        className={isCurrentPath("/datavis/charts/maps") ? "usa-current" : ""}
                      >
                        <span>Maps</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="usa-nav__primary-item">
                  <a
                    href="/datavis/further-reading"
                    className={isCurrentPath("/datavis/further-reading") ? "usa-current" : ""}
                  >
                    <span>Further Reading</span>
                  </a>
                </li>
                <li className="usa-nav__primary-item">
                  <a href="/" className="usa-nav-link backToHomeLink">
                    <span>Back to Open Source Hub</span>
                  </a>
                </li>
              </ul>
            )}
            {(isApiRoute || isRStyleRoute) && (
              <ul className="usa-nav__primary usa-accordion">
                <li className="usa-nav__primary-item">
                  <a href="/" className="usa-nav-link backToHomeLink">
                    <span>Back to Open Source Hub</span>
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
