import React from 'react';

const CustomLeftArrow = ({ onClick, currentSlide }) => {
  return (
    <button
      className="custom-arrow custom-arrow-left"
      onClick={() => onClick()}
    >
      <span className="arrow">&lt;</span>
    </button>
  );
};

const CustomRightArrow = ({ onClick, currentSlide }) => {
  return (
    <button
      className="custom-arrow custom-arrow-right"
      onClick={() => onClick()}
    >
      <span> &gt;</span>
    </button>
  );
};

export { CustomLeftArrow, CustomRightArrow };
