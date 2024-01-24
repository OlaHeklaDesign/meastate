import React from 'react';
import './OffertContent.css';
import bedroom_icon from '../Assets/bedroom.svg';
import bathroom_icon from '../Assets/bathroom.svg';
import parking_icon from '../Assets/parking.svg';
import phone_icon from '../Assets/offer-phone.svg';
import arrow_icon from '../Assets/arrow-offer.svg';
import agent from '../Assets/agentimg.png';

const OffertContent = (props) => {

  const {property} = props;

  return (
    <div className='offertcontent'>
      <div className="offertcontent-location-surface-container">
        <h3>{property.location}</h3>
        <p>{property.surface}m2</p>
      </div>
      <div className="offertcontent-rooms">
        <div className="offertcontent-room">
          <div>
            <img src={bedroom_icon} alt="bedroom icon" />
          </div>
          <p>{property.bedrooms} bedrooms</p>
        </div>
        <div className="offertcontent-room">
          <div>
            <img src={bathroom_icon} alt="beathroom icon" />
          </div>
          <p>{property.bathrooms} bathrooms</p>
        </div>
        <div className="offertcontent-room">
          <div>
            <img src={parking_icon} alt="parking icon" />
          </div>
          <p>{property.parking} parking spots</p>
        </div>
      </div>
      <div className="offertcontent-agent">
        <img src={agent} alt="" className='offertcontent-agent-photo' />
        <div className="offertcontent-agent-content">
          <p>Real Estate Agent</p>
          <p>Johanna Walczyk</p>
          <div className="offertcontent-agent-phone">
            <div>
              <img src={phone_icon} alt="phone icon" />
              <p>+54 657 3453 23</p>
            </div>
            <img src={arrow_icon} alt="arrow icon" />
          </div>
        </div>
      </div>
      <div className="offertcontent-contact">
        <h4>Wants to see this apartment!</h4>
        <div>
          <input type="text" placeholder='First and last name' />
          <input type="text" placeholder='Phone number' />
        </div>
        <button>Make an appointment</button>
      </div>
    </div>
  )
}

export default OffertContent
