import React from 'react';
import Hero from '../Components/Hero/Hero';
import Offert from '../Components/Offert/Offert';
import Steps from '../Components/Steps/Steps';
import Contact from '../Components/Contact/Contact';
import TestimonialHero from '../Components/TestimonialHero/TestimonialHero';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Hero />
      <Offert />
      <TestimonialHero/>
      <Steps />
      <Contact />
    </div>
  )
}

export default HomePage