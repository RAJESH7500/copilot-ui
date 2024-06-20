import React, { useRef, useState } from 'react';
import CustomCarousel from './Carousel';
import { FaPaperPlane, FaMicrophone, FaPlus } from 'react-icons/fa';
import Header from './Header';

function Home() {
  const [searchtext, setSearchText] = useState(null);
  const [isSearched, setIsSearched] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const inputRef = useRef();
  const carouselRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleOnClick = (e, index) => {
    setSearchText(e.target.innerText.toLowerCase());
    handleFocus();
    setIsSearched(false);
    carouselRef.current.goToSlide((index - 1 + 5) % 5);
  };

  return (
    <>
      <Header handleOnClick={handleOnClick} />
      <div className="center">
        {!isSearched ? (
          <>
            <h1 className="text-center">
              <img
                src="/images/logoc.jpeg"
                alt="logo"
                width="100px"
                height="100px"
              />
            </h1>
            <h3 className="text-center" style={{ marginLeft: '20px' }}>
              <b>Power Your Practice</b>
            </h3>

            <CustomCarousel
              setSearchText={setSearchText}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              carouselRef={carouselRef}
            />

            <div className="terms-of-uses">
              <p>
                <b>Disclaimer: </b>AI-assisted research. Double check for
                accuracy.
              </p>
            </div>
          </>
        ) : (
          <div className="chat-div">{searchtext}</div>
        )}
        <div className="input-div" onClick={handleFocus}>
          <input
            type="text"
            placeholder="Ask me something about law"
            className="input-box"
            name="text"
            value={!isSearched ? searchtext : ''}
            onChange={(e) => {
              setSearchText(e.target.value);
              setIsSearched(false);
            }}
            ref={inputRef}
          />
          <div className="button-container">
            <button className="btn">
              <FaPlus />
            </button>
            <div className="separator"></div>
            <button className="btn">
              <FaMicrophone />
            </button>
            <button
              className="btn"
              onClick={() => {
                setIsSearched(true);
              }}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
