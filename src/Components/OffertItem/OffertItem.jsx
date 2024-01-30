import React from 'react';
import { Link } from "react-router-dom";
import './OffertItem.css';
import bedroom_icon from '../Assets/bedroom.svg';
import bathroom_icon from '../Assets/bathroom.svg';
import parking_icon from '../Assets/parking.svg';
import arrow from '../Assets/arrow_offert.svg';


const OffertItem = ({main_image, offer, location, surface, bedrooms, bathrooms, parking, price, id}) => {
  return (
    <Link to={`/offert/${id}`} style={{textDecoration: "none"}}>
      <div className='offertitem'>
        <div className="offertitem-image-container">
          <img src={main_image} alt="" className='offertitem-mainimg' />
          <p className='offertitem-offer'>{offer}</p>
        </div>
        <div className="offertitem-content">
          <div className="offertitem-location-surface-container">
            <p className='offertitem-location'>{location}</p>
            <p className='offertitem-surface'>{surface}m2</p>
          </div>
          <div className="offertitem-rooms">
            <div className="offertitem-room">
              <p>{bedrooms}</p>
              <div>
                <img src={bedroom_icon} alt="" />
              </div>
            </div>
            <div className="offertitem-room">
              <p>{bathrooms}</p>
              <div>
                <img src={bathroom_icon} alt="" />
              </div>
            </div>
            <div className="offertitem-room">
              <p>{parking}</p>
              <div>
                <img src={parking_icon} alt="" />
              </div>
            </div>
          </div>
          <div className="offertitem-price-container">
            <p>${price}</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default OffertItem
