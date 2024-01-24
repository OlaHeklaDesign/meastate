import React from 'react';
import './OffertDescription.css';


const OffertDescription = (props) => {

  const {property} = props;

  const descriptionWithLineBreaks = property.description.split('\n').map((text, index) => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  ));

  return (
    <div className='offertdescription'>
      <div className="offertdescription-content">
        <p>{descriptionWithLineBreaks}</p>
      </div>
      <div className="offertdescription-floorplan">
        <h4>Apartment floor plan</h4>
        <img src={property.floorPlan} alt="" />
      </div>
    </div>
  )
}

export default OffertDescription
