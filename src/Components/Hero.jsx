import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = (props) => {
  const animText = useRef();

  useGSAP(() => {
    gsap.from(animText.current, { x: -200,delay:5.1 , opacity: 0, duration: 3, ease: "power3.out" });
  });

  return (
    <div className="h-[95vh] w-screen bg-primary m-0 relative">
      <div ref={animText} className="absolute bottom-10 left-10 m-4 p-8 text-white text-7xl font-bold">
        <h1>{props.l1}</h1>
        <h1>{props.l2}</h1>
      </div>
    </div>
  );
};

export default Hero;
