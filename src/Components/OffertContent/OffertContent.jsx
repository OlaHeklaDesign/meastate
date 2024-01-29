import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './OffertContent.css';
import bedroom_icon from '../Assets/bedroom.svg';
import bathroom_icon from '../Assets/bathroom.svg';
import parking_icon from '../Assets/parking.svg';
import phone_icon from '../Assets/offer-phone.svg';
import arrow_icon from '../Assets/arrow-offer.svg';
import all_agents from '../Assets/all_agents';


const OffertContent = (props) => {

  const {property} = props;

  const getAgentInfo = (agentId) => {
    return all_agents.find(agent => agent.id === agentId);
  }

  const agentInfo = getAgentInfo(property.agentId);

  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_qw2awi7', 'template_dik51uo', form.current, '5yKegLgQNAhBuNB7d')
      .then(
        (result) => {
          setSuccessMessage('Your message has been sent.');
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);

          setFormValues({
            user_name: '',
            user_phone: '',
          });

        },
        (error) => {
          setErrorMessage('Something went wrong.');
          setTimeout(() => {
            setErrorMessage('');
          }, 3000);
        }
      );
  };

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
        <img src={agentInfo.agentImage} alt="" className='offertcontent-agent-photo' />
        <div className="offertcontent-agent-content">
          <p>Real Estate Agent</p>
          <p>{agentInfo.agentName}</p>
          <div className="offertcontent-agent-phone">
            <div>
              <img src={phone_icon} alt="phone icon" />
              <p>{agentInfo.agentPhoneNumber}</p>
            </div>
            <img src={arrow_icon} alt="arrow icon" />
          </div>
        </div>
      </div>
      <div className="offertcontent-contact">
        <h4>Wants to see this apartment!</h4>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input  type="text" 
                    placeholder='First and last name' 
                    name="user_name"
                    value={formValues.user_name}
                    onChange={handleInputChange}/>
            <input  type="number" 
                    placeholder='Phone number' 
                    name="user_phone"
                    value={formValues.user_phone}
                    onChange={handleInputChange} />
          </div>
          <button type="submit" value="Send">Make an appointment</button>
          <p className='offert-form-message'>{successMessage}</p>
          <p className='offert-form-message'>{errorMessage}</p>
        </form>
      </div>
    </div>
  )
}

export default OffertContent
