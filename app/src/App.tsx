// App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import './assets/css/styles.css';

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
import RStyleGuide from "./pages/rstyle/rstyle";
import APIDocumentation from "./pages/api/api";
import DataVisLayout from "./layouts/dataVisLayout"

function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ padding: "10px", backgroundColor: "#162e51" }}>
          <div className="banner-container">
            <h2 style={{color: "white"}}>Open Source Resource Hub</h2>
          </div>
        </div>
        <nav style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
          <div className="banner-container">
            <ul style={{ listStyleType: "none", padding: 0, display: 'flex', justifyContent: 'space-between' }}>
              <li><Link to="/datavis">Data Visualization Guide</Link></li>
              <li><Link to="/rstyle">R Style Guide</Link></li>
              <li><Link to="/api">API Documentation</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<div>Open Source Resource Hub</div>} />

          {/* Wrap all Data Visualization Guide routes in the DataVisLayout */}
          <Route path="/datavis" element={<DataVisLayout />}>
            <Route index element={<DataVisualization />} />
            <Route path="principles" element={<Principles />} />
            <Route path="design-elements" element={<DesignElements />} />
            <Route path="design-elements/color" element={<Color />} />
            <Route path="design-elements/typography" element={<Typography />} />
            <Route path="design-elements/symbology" element={<Symbology />} />
            <Route path="design-elements/layout" element={<Layout />} />
            <Route path="charts" element={<Charts />} />
            <Route path="charts/line-charts" element={<LineCharts />} />
            <Route path="charts/bar-charts" element={<BarCharts />} />
            <Route path="charts/area-charts" element={<AreaCharts />} />
            <Route path="charts/maps" element={<Maps />} />
            <Route path="further-reading" element={<FurtherReading />} />
          </Route>

          <Route path="/rstyle" element={<RStyleGuide />} />
          <Route path="/api" element={<APIDocumentation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
