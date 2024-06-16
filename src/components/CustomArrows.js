import React from 'react';

const CustomLeftArrow = ({ onClick, currentSlide }) => {
  return (
    <button
      className="custom-arrow custom-arrow-left"
      onClick={() => onClick()}
    >
      &#8249;
    </button>
  );
};

const CustomRightArrow = ({ onClick, currentSlide }) => {
  return (
    <button
      className="custom-arrow custom-arrow-right"
      onClick={() => onClick()}
    >
      &#8250;
    </button>
  );
};

export { CustomLeftArrow, CustomRightArrow };
