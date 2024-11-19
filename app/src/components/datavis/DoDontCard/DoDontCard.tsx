import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import "./DoDontCard.scss";
import SVGRenderer from './../SvgRenderer/SvgRenderer';

interface DoDontCardProps {
  type: 'do' | 'do-not';
  title: string;
  content?: string;
  image: string;
}

const DoDontCard: React.FC<DoDontCardProps> = ({ type, title, content, image }) => {
  return (
    <div className={`do-dont-card ${type === 'do' ? 'card-do' : 'card-do-not'}`}>
    <div className="card-icon">
      {type === 'do' ? (
        <CheckCircleIcon sx={{ color: 'blue', fontSize: '1.5rem' }} />
      ) : (
        <CancelIcon sx={{ color: 'red', fontSize: '1.5rem' }} />
      )}
    </div>

    <div className="card-image-container">
      {image.endsWith('.svg') ? (
        <SVGRenderer src={image} alt={title} />
      ) : (
        <img src={image} alt={title} className="card-image" />
      )}
    </div>

    <div className="card-content">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  </div>
  );
};

export default DoDontCard;
