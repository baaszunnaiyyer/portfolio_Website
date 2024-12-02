import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import gsap from 'gsap';

const About = () => {
  const animtedText = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({yoyo:true, repeat:-1});

    // Animate each "Developer" div one by one with a delay
    tl.to(animtedText.current, {y:"0%" , duration: 1})
      .to(animtedText.current, { y: "-33.3%", duration:2, ease: "elastic.inOut" }) // First Developer
      .to(animtedText.current, {y: "-33.3%", duration:2})
      .to(animtedText.current, {y: "-66.6%", duration:2 , ease: "elastic.inOut"})
      .to(animtedText.current, {y: "-66.6%", duration:1})
      
      
      
  });

  return (
    <div className='h-screen w-screen bg-white text-center justify-center items-center flex'>
      <div className=' sm:text-left sm:text-7xl text-2xl font-semibold'>
        <div>KASRA ZUNNAIYYER IS A</div>  
        <div className='overflow-hidden max-h-8 sm:max-h-16  sm:-translate-x-24'>
          <div ref={animtedText}>
            <div>DEVELOPER</div>
            <div>ARTIST</div>
            <div>PRODUCT DESIGNER</div>
          </div>
        </div>
        <div>DEDICATED TO FINDING</div>
        <div className='sm:-translate-x-24'>STRATEGIC, ENGAGING</div>
        <div className='sm:-translate-x-24'>CREATIVE SOLUTIONS.</div>
        <div>CURRENTLY BASED IN</div>
        <div>KARACHI, PAKISTAN.</div>
      </div>
    </div>
  );
};

export default About;
