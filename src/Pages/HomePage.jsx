import React from 'react';
import Hero from '../Components/Hero/Hero';
import Offert from '../Components/Offert/Offert';
import Steps from '../Components/Steps/Steps';
import Contact from '../Components/Contact/Contact';
import TestimonialHero from '../Components/TestimonialHero/TestimonialHero';
import LatestProperty from '../Components/LatestProperty/LatestProperty';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Hero />
      <Offert />
      <LatestProperty />
      <TestimonialHero/>
      <Steps />
      <Contact />
    </div>
  )
}

export default HomePage