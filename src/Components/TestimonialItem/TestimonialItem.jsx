import React from 'react';
import './TestimonialItem.css';


const TestimonialItem = ({image, name, testimonial, investment}) => {
  return (
    <div className='testimonial'>
      <img src={image} alt="" />
      <p className='testimonial-testimonial'>{testimonial}</p>
      <p className='testimonial-name'>{name}</p>
      <p className='testimonial-investment'>{investment}</p>
    </div>
  )
}

export default TestimonialItem