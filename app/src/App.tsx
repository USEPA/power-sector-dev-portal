import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Importing main pages for each section
import DataVisualization from "./pages/datavis/index";
import Principles from "./pages/datavis/principles/principles";
import DesignElements from "./pages/datavis/design-elements/index";
import Color from "./pages/datavis/design-elements/color";
import Typography from "./pages/datavis/design-elements/typography";
import Symbology from "./pages/datavis/design-elements/symbology";
import Layout from "./pages/datavis/design-elements/layout";
import Charts from "./pages/datavis/charts/index";
import LineCharts from "./pages/datavis/charts/line-charts";
import BarCharts from "./pages/datavis/charts/bar-charts";
import AreaCharts from "./pages/datavis/charts/area-charts";
import Maps from "./pages/datavis/charts/maps";
import FurtherReading from "./pages/datavis/further-reading/further-reading";

// Placeholder components for R Style Guide and API Documentation
import RStyleGuide from "./pages/rstyle/index";
import APIDocumentation from "./pages/api/index";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Menu */}
        <nav style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
          <h2>Open Source Resource Hub</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><Link to="/datavis">Data Visualization Guide</Link></li>
            <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
              <li><Link to="/datavis/principles">Principles</Link></li>
              <li><Link to="/datavis/design-elements">Design Elements</Link></li>
              <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
                <li><Link to="/datavis/design-elements/color">Color</Link></li>
                <li><Link to="/datavis/design-elements/typography">Typography</Link></li>
                <li><Link to="/datavis/design-elements/symbology">Symbology</Link></li>
                <li><Link to="/datavis/design-elements/layout">Layout</Link></li>
              </ul>
              <li><Link to="/datavis/charts">Charts</Link></li>
              <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
                <li><Link to="/datavis/charts/line-charts">Line Charts</Link></li>
                <li><Link to="/datavis/charts/bar-charts">Bar Charts</Link></li>
                <li><Link to="/datavis/charts/area-charts">Area Charts</Link></li>
                <li><Link to="/datavis/charts/maps">Maps</Link></li>
              </ul>
              <li><Link to="/datavis/further-reading">Further Reading</Link></li>
            </ul>
            {/* Links for R Style Guide and API Documentation */}
            <li><Link to="/rstyle">R Style Guide</Link></li>
            <li><Link to="/api">API Documentation</Link></li>
          </ul>
        </nav>

        {/* Route Components */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<div>Open Source Resource Hub</div>} />

          {/* Data Visualization Guide routes */}
          <Route path="/datavis" element={<DataVisualization />} />
          <Route path="/datavis/principles" element={<Principles />} />
          <Route path="/datavis/design-elements" element={<DesignElements />} />
          <Route path="/datavis/design-elements/color" element={<Color />} />
          <Route path="/datavis/design-elements/typography" element={<Typography />} />
          <Route path="/datavis/design-elements/symbology" element={<Symbology />} />
          <Route path="/datavis/design-elements/layout" element={<Layout />} />
          <Route path="/datavis/charts" element={<Charts />} />
          <Route path="/datavis/charts/line-charts" element={<LineCharts />} />
          <Route path="/datavis/charts/bar-charts" element={<BarCharts />} />
          <Route path="/datavis/charts/area-charts" element={<AreaCharts />} />
          <Route path="/datavis/charts/maps" element={<Maps />} />
          <Route path="/datavis/further-reading" element={<FurtherReading />} />

          {/* Routes for R Style Guide and API Documentation */}
          <Route path="/rstyle" element={<RStyleGuide />} />
          <Route path="/api" element={<APIDocumentation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
