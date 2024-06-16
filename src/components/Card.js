import React from 'react';

function Card({ image, description }) {
  const cardImageStyle = {
    height: '350px',
    background: `url(${image}) center/cover no-repeat`,
  };
  return (
    <div className="card-container">
      <div className="card-image" style={cardImageStyle}></div>
      <div className="card-content">
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
