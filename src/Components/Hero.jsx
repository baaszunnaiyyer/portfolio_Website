import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = (props) => {
  const animText = useRef();

  useGSAP(() => {
    gsap.from(animText.current, { x: -200,delay:4.3 , opacity: 0, duration: 3, ease: "power3.out" });
  });

  return (
    <div className="sm:h-[95vh]  h-[90vh] w-screen bg-primary m-0 relative">
  <div
    ref={animText}
    className="absolute bottom-10 sm:left-10 sm:left-2 sm:m-4 sm:p-8 px-4 text-white font-bold text-7xl sm:text-7xl text-3xl"
  >
    <h1>{props.l1}</h1>
    <h1>{props.l2}</h1>
  </div>
</div>

  );
};

export default Hero;
