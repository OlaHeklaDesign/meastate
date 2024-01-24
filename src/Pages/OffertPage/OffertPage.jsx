import React from 'react';
import './OffertPage.css';
import { useParams } from "react-router-dom";
import OffertSlider from '../../Components/OffertSlider/OffertSlider';
import all_offers from '../../Components/Assets/all_offers';
import OffertContent from '../../Components/OffertContent/OffertContent';
import OffertDescription from '../../Components/OffertDescription/OffertDescription';
import Contact from '../../Components/Contact/Contact';
import TextBg from '../../Components/TextBg/TextBg';


const OffertPage = () => {

  const{offertId} = useParams();
  const property = all_offers.find((e) => e.id === Number(offertId));

  return (
    <div className='offertpage'>
      <div className="offertpage-slider-content-container">
        <OffertSlider property={property} />
        <OffertContent property={property} />
      </div>
      <div className="offertpage-description">
        <OffertDescription property={property} />
      </div>
      <TextBg />
      <Contact />
    </div>
  )
}

export default OffertPage