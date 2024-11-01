import React from "react";
import "./Banner.scss"; 

interface BannerProps {
  title: string;
  tagline: string;
}

const Banner: React.FC<BannerProps> = ({ title, tagline }) => {
  return (
    <header className="banner" style={{ padding: "10px" }}>
        <div className="container">
      <h1>{title}</h1>
      <p>{tagline}</p>
      </div>
    </header>
  );
};

export default Banner;
