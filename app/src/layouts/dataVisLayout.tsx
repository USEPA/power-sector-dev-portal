// src/pages/datavis/DataVisLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

const DataVisLayout: React.FC = () => {

  return (
    <div>
      {/* Outlet renders the component of the nested route */}
      <Outlet />
    </div>
  );
};

export default DataVisLayout;
