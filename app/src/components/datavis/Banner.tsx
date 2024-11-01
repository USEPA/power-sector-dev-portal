import React from "react";
// import "./Banner.css"; 

interface BannerProps {
  title: string;
  tagline: string;
}

const Banner: React.FC<BannerProps> = ({ title, tagline }) => {
  return (
    <header className="page-header" style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
      <h1>{title}</h1>
      <p>{tagline}</p>
    </header>
  );
};

export default Banner;
