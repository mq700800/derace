import { data } from '../utils/data';
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from 'react-icons/hi2';
import './Carousel.css';

import React, { useEffect, useState } from 'react';
import useScreenSize from '../utils/Hooks/useScreenSize';

const Carousel = ({ darkMode }) => {
  const screenSize = useScreenSize();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCards, setHoveredCards] = useState(
    new Array(data.length).fill(false),
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    console.log(currentIndex);
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };
  const handleCardMouseEnter = (cardIndex) => {
    const updatedHoveredCards = [...hoveredCards];
    updatedHoveredCards[cardIndex] = true;
    setHoveredCards(updatedHoveredCards);
  };

  const handleCardMouseLeave = (cardIndex) => {
    const updatedHoveredCards = [...hoveredCards];
    updatedHoveredCards[cardIndex] = false;
    setHoveredCards(updatedHoveredCards);
  };
  let visibleCards = [];
  if (screenSize.width <= 480) {
    visibleCards = [currentIndex];
  } else if (screenSize.width <= 1024) {
    visibleCards = [currentIndex, (currentIndex + 1) % data.length];
  } else {
    visibleCards = [
      currentIndex,
      (currentIndex + 1) % data.length,
      (currentIndex + 2) % data.length,
    ];
  }

  return (
    <section
      className="container-carousel"
      style={{ backgroundColor: darkMode ? 'black' : 'white' }}
    >
      <HiOutlineArrowLongLeft
        onClick={handlePrevious}
        className="ArrowCarousel"
      />
      {visibleCards.map((cardIndex, index) => (
        <section
          className="card-carousel"
          style={{
            backgroundColor: darkMode
              ? hoveredCards[cardIndex]
                ? 'black'
                : '#181818'
              : hoveredCards[cardIndex]
              ? 'white'
              : ' #eeeeee',
            color: darkMode ? 'white' : 'black',
            border: `1px solid ${
              darkMode
                ? hoveredCards[cardIndex]
                  ? 'red'
                  : 'black'
                : hoveredCards[cardIndex]
                ? 'red'
                : 'white'
            }`,
          }}
          key={index}
          onMouseEnter={() => handleCardMouseEnter(cardIndex)}
          onMouseLeave={() => handleCardMouseLeave(cardIndex)}
          onTouchStart={() => handleTouchStart()}
          onTouchMove={() => handleTouchMove()}
          onTouchEnd={() => handleTouchEnd()}
        >
          <img src={data[cardIndex].img} className="card-image-carousel" />
          <h3 className="card-heading-carousel">{data[cardIndex].heading}</h3>
          <a
            className="card-button-carousel"
            style={{
              color: darkMode ? 'white' : 'black',
            }}
          >
            Read More
          </a>
        </section>
      ))}
      <HiOutlineArrowLongRight onClick={handleNext} className="ArrowCarousel" />
    </section>
  );
};

export default Carousel;
