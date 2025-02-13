import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import "./assets/css/styles.css";
import OpenSourceResourceHub from './pages/open-source-resource-hub';
import DataVisualization from "./pages/datavis/datavis";
import Navigation from "./components/Navigation/Navigation";
import DataVisLayout from "./layouts/dataVisLayout";
import Principles from "./pages/datavis/principles/principles";
import DesignElements from "./pages/datavis/design-elements/design-elements";
import Color from "./pages/datavis/design-elements/color";
import Typography from "./pages/datavis/design-elements/typography";
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
import BestPractices from "./pages/rstyle/best-practices/best-practices";
import UsingTheTheme from "./pages/rstyle/using-the-theme/using-the-theme";

function App() {
  const DynamicTheme = () => {
    const location = useLocation();

    useEffect(() => {
      const root = document.documentElement; 

      // Remove any previously added classes
      root.classList.remove("rstyle", "datavis", "api", "root");

      // Add the class based on the current route
      if (location.pathname.startsWith("/rstyle")) {
        root.classList.add("rstyle");
      } else if (location.pathname.startsWith("/datavis")) {
        root.classList.add("datavis");
      } else if (location.pathname.startsWith("/api")) {
        root.classList.add("api");
      } 
      else {
        root.classList.add("root");
      }
    }, [location]);

    return null;
  };

  return (
    <Router>
      <div className="App">
        <DynamicTheme />
        <Navigation />
        <Routes>
          <Route path="/" element={<DataVisLayout />}>
          <Route index element={<OpenSourceResourceHub />} />
          </Route>
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
          <Route path="/rstyle" element={<DataVisLayout />}>
            <Route index element={<RStyleGuide />} />
            <Route path="using-the-theme" element={<UsingTheTheme />} />
            <Route path="best-practices" element={<BestPractices />} />
          </Route>
          
          <Route path="/api" element={<APIDocumentation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
