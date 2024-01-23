import React, { useState } from 'react';
import './TestimonialHero.css';
import arrow_next from '../Assets/testi-arrow.svg';
import arrow_prev from '../Assets/arrow-prev.svg';
import all_testimonials from '../Assets/all_testimonials';
import TestimonialItem from '../TestimonialItem/TestimonialItem';

const TestimonialHero = () => {
  const [currentState, setCurrentState] = useState(0);

  const nextSlide = () => {
    setCurrentState((prevSlide) => (prevSlide + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentState((prevSlide) => {
      let targetState;
      if (prevSlide === 0) {
        targetState = 4;
      } else {
        targetState = prevSlide - 1;
      }
      return targetState;
    });
  };

  if (currentState === 5) {
    setCurrentState(0);
  }
  

  const slideWidth = 670;
  const slidesCount = all_testimonials.length;

  const sliderStyle = {
    transform: `translateX(${-currentState * slideWidth}px)`,
    transition: 'transform 0.5s ease-in-out',
  };

  console.log(`current state: ${currentState}`)

  return (
    <div className="testimonial-bg">
      <div className="testimonialhero">
        <div className="testimonialhero-title-buttons">
          <h2>Opinions of Our Customers</h2>
          <div className="testimonialhero-buttons">
            <button className="testimonial-prevBtn" onClick={prevSlide}>
              <img src={arrow_next} alt="arrow" />
            </button>
            <button className="testimonial-nextBtn" onClick={nextSlide}>
              <img src={arrow_prev} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="testimonials-slider">
          <div className="testimonials-slides" style={sliderStyle}>
            {all_testimonials.map((testimonial, index) => (
              <TestimonialItem
                key={index}
                name={testimonial.name}
                image={testimonial.image}
                investment={testimonial.investment}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHero;
