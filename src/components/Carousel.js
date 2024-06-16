import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow, CustomRightArrow } from './CustomArrows';
import Card from './Card';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const cards = [
  {
    cover:
      'https://copilot.microsoft.com/th?id=OCZI.0d379b1692ac76aaec42058d760bb2f2d5bbf10e36abda3e036142c3370719b4_20240507012336&w=224&h=260&c=8&qlt=100&pid=PID',
    title: 'Research',
  },
  {
    cover:
      'https://copilot.microsoft.com/th?id=OSK.C6C735117D3F03987F781E529596A6C7&w=224&h=260&c=8&qlt=100&pid=PID',
    title: 'Generate',
  },
  {
    cover:
      'https://copilot.microsoft.com/th?id=OCZI.739a4aeea58880397eb6627f605a10d24defc3b836f76893c4def94039214ab4_20240507012336&w=224&h=260&c=8&qlt=100&pid=PID',
    title: 'Summarize',
  },
  {
    cover:
      'https://copilot.microsoft.com/th?id=OCZI.054c14cd4800b4cabaf91bc7ee7ab35e06fc635b8107d762c2b7b1f2afab2849_20240507012336&w=224&h=260&c=8&qlt=100&pid=PID',
    title: 'Search',
  },
  {
    cover:
      'https://copilot.microsoft.com/th?id=OCZI.3d32746e1c9c1f0e4cdf64bd16e342bc1a95bd3bf617184c18c4197a0b803dc2_20240507012336&w=224&h=260&c=8&qlt=100&pid=PID',
    title: 'Simplify',
  },
];
const Slider = ({ setSearchText }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setSearchText(cards[(currentSlide + 1) % 5]?.title);
  }, [currentSlide]);

  const handleAfterChange = (previousSlide, { currentSlide }) => {
    setCurrentSlide(currentSlide);
  };
  const getClassName = (index) => {
    const totalItems = cards.length;
    const middleIndex = (currentSlide + 1) % totalItems;

    if (index === middleIndex) return 'scaled';
    return '';
  };

  return (
    <div className=" mt-3">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        afterChange={handleAfterChange}
        customLeftArrow={
          <CustomLeftArrow
            currentSlide={currentSlide}
            onClick={() => setCurrentSlide((currentSlide - 1 + 5) % 5)}
          />
        }
        customRightArrow={
          <CustomRightArrow
            currentSlide={currentSlide}
            onClick={() => setCurrentSlide((currentSlide + 1) % 5)}
          />
        }
      >
        {cards.map((item, index) => {
          return (
            <div
              className={`slider ${getClassName(index)} 
                 `}
              key={index}
            >
              <Card image={item.cover} description={item.title} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
