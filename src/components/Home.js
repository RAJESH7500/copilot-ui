import React, { useRef, useState } from 'react';
import CustomCarousel from './Carousel';
import { FaPaperPlane, FaMicrophone, FaPlus } from 'react-icons/fa';
function Home() {
  const [searchtext, setSearchText] = useState(null);
  const [isSearched, setIsSearched] = useState(false);
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };
  const handleOnClick = (e) => {
    setSearchText(e.target.innerText.toLowerCase());
    handleFocus();
    setIsSearched(false);
  };
  const services = ['Research', 'Search', 'summarise', 'generate', 'simplify'];
  return (
    <div>
      <div className="row p-5">
        <div class="col-8">
          {!isSearched ? (
            <>
              <h1 className="text-center">Copilot</h1>
              <h3 className="text-center">Your everyday AI campanion</h3>
              <CustomCarousel setSearchText={setSearchText} />
              <div className="terms-of-uses">
                <p>
                  Copilot uses AI. Check for mistakes. <a href="#">Terms</a> |{' '}
                  <a href="#">Privacy</a> | <a href="#">FAQs</a>
                </p>
              </div>
            </>
          ) : (
            <div className="chat-div">{searchtext}</div>
          )}
          <div className="input-div" onClick={handleFocus}>
            <input
              type="text"
              placeholder="Ask me anything..."
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

        <div class="col-4">
          <div className="left">
            <h2>Services</h2>
            {services.map((item, index) => (
              <button
                type="button"
                class="btn btn-light mt-3"
                onClick={handleOnClick}
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
