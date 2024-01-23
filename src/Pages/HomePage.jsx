import React from 'react';
import Hero from '../Components/Hero/Hero';
import Offert from '../Components/Offert/Offert';
import Steps from '../Components/Steps/Steps';
import Contact from '../Components/Contact/Contact';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Hero />
      <Offert />
      <Steps />
      <Contact />
    </div>
  )
}

export default HomePage