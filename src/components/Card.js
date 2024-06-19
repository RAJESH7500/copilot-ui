import React from 'react';

function Card({ image, description }) {
  const cardImageStyle = {
    height: '250px',
    background: `url(${image}) center/cover no-repeat`,
  };
  return (
    <div className="card-container">
      <div className="card-image" style={cardImageStyle}></div>
      <div className="card-content">
        <p className="card-text text-center">{description}</p>
      </div>
    </div>
  );
}

export default Card;
