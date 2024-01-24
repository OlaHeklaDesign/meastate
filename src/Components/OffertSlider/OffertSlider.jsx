import React from 'react';
import './OffertSlider.css';
import arrowNext from '../Assets/offer-arrow-next.svg';
import arrowPrev from '../Assets/offer-arrow-prew.svg';



const OffertSlider = (props) => {

  const {property} = props;

  return (
    <div className='offertslider'>
      <div className="offertslider-mainimg">
        <img src={property.additionalImages[0]} alt="" />
        <div className="offertslider-buttons">
          <button>
            <img src={arrowPrev} alt="arrow" />
          </button>
          <button>
            <img src={arrowNext} alt="arrow" />
          </button>
        </div>
      </div>
      <div className="offertslider-images">
        {property.additionalImages.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </div>
    </div>
  )
}

export default OffertSlider
