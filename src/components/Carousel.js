import React, { useEffect } from 'react';
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
    cover: '/images/discover.png',
    title: 'Discover',
  },
  {
    cover: '/images/generate.png',
    title: 'Generate',
  },
  {
    cover: '/images/summarize.png',
    title: 'Summarize',
  },
  {
    cover: '/images/search.png',
    title: 'Search',
  },
];
const Slider = ({
  setSearchText,
  setCurrentSlide,
  currentSlide,
  carouselRef,
}) => {
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
    <div className="carousel-container">
      <Carousel
        ref={carouselRef}
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
