import React, { useState } from 'react';
import './OffertSlider.css';
import arrowNext from '../Assets/offer-arrow-next.svg';
import arrowPrev from '../Assets/offer-arrow-prew.svg';
import all_offers from '../Assets/all_offers';



const OffertSlider = (props) => {

  const {property} = props;

  const [currentState, setCurrentState] = useState(0);


  const nextSlide = () => {
    setCurrentState((prevSlide) => (prevSlide + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentState((prevSlide) => {
      let targetState;
      if (prevSlide === 0) {
        targetState = 3;
      } else {
        targetState = prevSlide - 1;
      }
      return targetState;
    });
  };

  if (currentState === 4) {
    setCurrentState(0);
  }
  

  const slideWidth = 743;
  const slidesCount = 4;

  const sliderStyle = {
    transform: `translateX(${-currentState * slideWidth}px)`,
    transition: 'transform 0.5s ease-in-out',
  };

  const handleThumbnailClick = (index) => {
    setCurrentState(index);
  }

  return (
    <div className='offertslider'>
      <div className="offertslider-mainimg offert-slider">
        <div className="offert-slides" style={sliderStyle}>
        {property.additionalImages.map((image, index) => (
          <img key={index} src={image} />
        ))}
        </div>
        <div className="offertslider-buttons">
          <button onClick={prevSlide} className='offert-slider-prevBtn'> 
            <img src={arrowPrev} alt="arrow" />
          </button>
          <button onClick={nextSlide} className='offert-slider-nextBtn'>
            <img src={arrowNext} alt="arrow" />
          </button>
        </div>
      </div>
      <div className="offertslider-images">
        {property.additionalImages.map((image, index) => (
          <img key={index} src={image} onClick={() => handleThumbnailClick(index)}/>
        ))}
      </div>
    </div>
  )
}

export default OffertSlider
