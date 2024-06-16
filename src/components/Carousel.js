import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
const sliderImageUrl = [
  {
    url: '/images/cimage.jpeg',
    text: 'Research',
  },
  {
    url: '/images/cimage.jpeg',
    text: 'Search',
  },
  {
    url: '/images/cimage.jpeg',
    text: 'Summarise',
  },
  {
    url: '/images/cimage.jpeg',
    text: 'Generate',
  },
  {
    url: '/images/cimage.jpeg',
    text: 'Simplyfy',
  },
];
const Slider = ({ setSearchText }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (previousSlide, { currentSlide }) => {
    setCurrentSlide(currentSlide);
  };

  const getClassName = (index) => {
    const totalItems = sliderImageUrl.length;
    const middleIndex = (currentSlide + 1) % totalItems;
    const leftIndex = (currentSlide + totalItems) % totalItems;
    const rightIndex = (currentSlide + 2) % totalItems;

    if (index === middleIndex) return 'scaled';
    if (index === leftIndex || index === rightIndex) return 'half-hidden';
    return '';
  };
  return (
    <div className=" mt-3">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        afterChange={handleAfterChange}
      >
        {sliderImageUrl.map((item, index) => {
          console.log('current slide is ', currentSlide);
          return (
            <div
              className={`slider ${getClassName(index)} 
                 `}
              key={index}
            >
              <Card
                image={item.url}
                description={item.text}
                onClick={() => setSearchText(item.text)}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
