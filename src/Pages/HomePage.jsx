import React from 'react';
import Hero from '../Components/Hero/Hero';
import Offert from '../Components/Offert/Offert';
import Steps from '../Components/Steps/Steps';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Hero />
      <Offert />
      <Steps />
    </div>
  )
}

export default HomePage