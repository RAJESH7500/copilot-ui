import React from 'react';

const CustomLeftArrow = ({ onClick, currentSlide }) => {
  return (
    <button
      className="custom-arrow custom-arrow-left"
      onClick={() => onClick()}
    ></button>
  );
};

const CustomRightArrow = ({ onClick, currentSlide }) => {
  return (
    <button
      className="custom-arrow custom-arrow-right"
      onClick={() => onClick()}
    ></button>
  );
};

export { CustomLeftArrow, CustomRightArrow };
