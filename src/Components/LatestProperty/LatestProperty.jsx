import React, { useState } from 'react';
import './LatestProperty.css';
import nextBtn from '../Assets/testi-arrow.svg';
import prevBtn from '../Assets/arrow-prev.svg';
import latest_property from '../Assets/latest_property';
import OffertItem from '../OffertItem/OffertItem';



const LatestProperty = () => {

  const [currentState, setCurrentState] = useState(0);

  const nextSlide = () => {
    setCurrentState((prevSlide) => (prevSlide + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentState((prevSlide) => {
      let targetState;
      if (prevSlide === 0) {
        targetState = 8;
      } else {
        targetState = prevSlide - 1;
      }
      return targetState;
    });
  };

  if (currentState === 9) {
    setCurrentState(0);
  }
  

let slideWidth = 329;


  const slidesCount = latest_property.length;

  const sliderStyle = {
    transform: `translateX(${-currentState * slideWidth}px)`,
    transition: 'transform 0.5s ease-in-out',
  };

  console.log(`current state: ${currentState}`)


  return (
   <div className='latestproperty'>
    <div className="latestproperty-title-buttons-container">
      <h2>Latest properties</h2>
      <div className="latestproperty-buttons">
        <button className='latestproperty-prevBtn' onClick={prevSlide}>
          <img src={nextBtn} alt="" />
        </button>
        <button className='latestproperty-nextBtn' onClick={nextSlide}>
          <img src={prevBtn} alt="" />
        </button>
      </div>
    </div>
    <div className="latestproperty-slider">
      <div className="latestproperty-slides" style={sliderStyle}>
        {latest_property.map((property, index) => (
          <OffertItem key={index} offer={property.offer} main_image={property.main_image} location={property.location} surface={property.surface} bedrooms={property.bedrooms} bathrooms={property.bathrooms} parking={property.parking} price={property.price} id={property.id} additionalImages={property.additionalImages} floorPlan={property.floorPlan} agentId={property.agentId} description={property.description} />
        ))}
      </div>
    </div>
   </div>
  )
}

export default LatestProperty
