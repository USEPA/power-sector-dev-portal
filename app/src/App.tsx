import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import './assets/css/styles.css';


// Importing main pages for each section
import DataVisualization from "./pages/datavis/datavis";
import Principles from "./pages/datavis/principles/principles";
import DesignElements from "./pages/datavis/design-elements/design-elements";
import Color from "./pages/datavis/design-elements/color";
import Typography from "./pages/datavis/design-elements/typography";
import Symbology from "./pages/datavis/design-elements/symbology";
import Layout from "./pages/datavis/design-elements/layout";
import Charts from "./pages/datavis/charts/charts";
import LineCharts from "./pages/datavis/charts/line-charts";
import BarCharts from "./pages/datavis/charts/bar-charts";
import AreaCharts from "./pages/datavis/charts/area-charts";
import Maps from "./pages/datavis/charts/maps";
import FurtherReading from "./pages/datavis/further-reading/further-reading/further-reading";

// Placeholder components for R Style Guide and API Documentation
import RStyleGuide from "./pages/rstyle/rstyle";
import APIDocumentation from "./pages/api/api";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Menu */}
        <div style={{ padding: "10px", backgroundColor: "#162e51" }}>   <div className="banner-container"> <h2>Open Source Resource Hub</h2></div></div>
        <nav style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
        <div className="banner-container">
          <ul style={{ listStyleType: "none", padding: 0, display: 'flex', justifyContent: 'space-between'}}>
            <li><Link to="/datavis">Data Visualization Guide</Link></li>
            <li><Link to="/rstyle">R Style Guide</Link></li>
            <li><Link to="/api">API Documentation</Link></li>
          </ul>
          </div>
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
