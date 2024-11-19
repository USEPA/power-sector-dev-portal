import React from "react";
import "./Banner.scss";

interface BannerProps {
  title: string;
  tagline: string;
  level?: string; 
}

const Banner: React.FC<BannerProps> = ({ title, tagline, level = "default" }) => {
  return (
    <header className={`banner ${level}`}>
      <div className="banner-container">
        <h1>{title}</h1>
        <p>{tagline}</p>
      </div>
    </header>
  );
};

export default Banner;
