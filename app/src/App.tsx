// App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./assets/css/styles.css";
import DataVisualization from "./pages/datavis/datavis";
import Navigation from "./components/Navigation/navigation";
import DataVisLayout from "./layouts/dataVisLayout";
import Principles from "./pages/datavis/principles/principles";
import DesignElements from "./pages/datavis/design-elements/design-elements";
import Color from "./pages/datavis/design-elements/color";
import { Typography } from "@mui/material";
import Symbology from "./pages/datavis/design-elements/symbology";
import Layout from "./pages/datavis/design-elements/layout";
import LineCharts from "./pages/datavis/charts/line-charts";
import Charts from "./pages/datavis/charts/charts";
import BarCharts from "./pages/datavis/charts/bar-charts";
import AreaCharts from "./pages/datavis/charts/area-charts";
import Maps from "./pages/datavis/charts/maps";
import FurtherReading from "./pages/datavis/further-reading/further-reading/further-reading";
import RStyleGuide from "./pages/rstyle/rstyle";
import APIDocumentation from "./pages/api/api";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-banner">
          {/* Navigation Component */}
          <Navigation />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <ul>
                <li>
                  <Link to="/datavis">Data Visualization Style Guide</Link>
                </li>
                <li>
                  <Link to="rstyle">R Style Guide</Link>
                </li>
                <li>
                  <Link to="/api">API</Link>
                </li>
              </ul>
            }
          />
          <Route path="/datavis" element={<DataVisLayout />}>
            <Route index element={<DataVisualization />} />
            <Route path="principles" element={<Principles />} />
            <Route path="design-elements" element={<DesignElements />} />
            {/* Design Elements Sub-Routes */}
            <Route path="design-elements/color" element={<Color />} />
            <Route path="design-elements/typography" element={<Typography />} />
            <Route path="design-elements/symbology" element={<Symbology />} />
            <Route path="design-elements/layout" element={<Layout />} />
            {/* Charts Routes */}
            <Route path="charts" element={<Charts />} />
            <Route path="charts/line-charts" element={<LineCharts />} />
            <Route path="charts/bar-charts" element={<BarCharts />} />
            <Route path="charts/area-charts" element={<AreaCharts />} />
            <Route path="charts/maps" element={<Maps />} />
            {/* Other Routes */}
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
