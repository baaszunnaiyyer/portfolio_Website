import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const horizontalDiv = useRef();
  const horizontalSec = useRef();

  useGSAP(() => {
    let scrollTween = gsap.to(horizontalDiv.current.children, {
      x: -window.innerWidth * 2, // Adjust scroll distance to move horizontally across screens
      scrollTrigger: {
        trigger: horizontalDiv.current.children,
        pin:true,
        scrub: 1,
        start: "",
        end: "+=3000",
        markers: true
      }
    });

    gsap.from(".horizontalSec", {
      y: -130,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".horizontalSec",
        containerAnimation: scrollTween,
        start: "left 70%",
        markers: true,
      }
    });

  });

  return (
    <div ref={horizontalDiv} className="relative w-screen bg-black text-center overflow-hidden">
      <div className="sticky w-[300vw] top-0 h-screen flex">
        
        {/*First Div */}
        <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
          <h1 className="text-9xl font-black">The Process</h1>
        </div>

        {/*Second Div */}
        <div ref={horizontalSec} className="horizontalSec w-screen h-screen flex items-center justify-around bg-black text-white">

          <div className='font-bold justify-center max-w-sm text-left items-center space-y-12'>
            <div className='text-4xl'>
              <h1 className='text-2xl'>01</h1>
              <h1>Research &</h1>
              <h1>Discovery</h1>
            </div>

            <div className='font-thin font-sans gap-y-5'>
            First, we start with discovery; this sets the foundation of the project. Discovery is about developing a clear understanding of your business and your goals and establishing a clear path forward. It's not all research behind a screen, it's about getting hands-on with workshops and interactive discussions to align our direction forward.
            </div>

          </div>

          <div className='font-bold justify-center max-w-sm text-left items-center space-y-12'>
            <div className='text-4xl'>
              <h1 className='text-2xl'>02</h1>
              <h1>Strategy &</h1>
              <h1>Creative</h1>
              <h1>Direction</h1>
            </div>

            <div className='font-thin font-sans gap-y-5'>
            Strategy is the necessary ingredient for exceptional, purposeful work. Using design thinking, we unite and establish an effective strategy that enables positive transformation with a clear direction. It goes hand in hand with creative direction, where we explore bringing the strategy to life visually.
            </div>

          </div>
          
        </div>

        {/*Third Div */}
        <div ref={horizontalSec} className="horizontalSec w-screen h-screen flex items-center justify-around bg-black text-white">

          <div className='font-bold justify-center max-w-sm text-left items-center space-y-12'>
            <div className='text-4xl'>
              <h1 className='text-2xl'>03</h1>
              <h1>Design &</h1>
              <h1>Development</h1>
            </div>

            <div className='font-thin font-sans gap-y-5'>
            This is where the magic happens. We've done all the hard work and now it's time to have some fun and bring the ideas to life. This step will vary depending on what your goals are and the services you require. I offer everything from graphic design and identity to web design and development.
            </div>

          </div>

          <div className='font-bold justify-center max-w-sm text-left items-center space-y-12'>
            <div className='text-4xl'>
              <h1 className='text-2xl'>04</h1>
              <h1>Quality</h1>
              <h1>Assurance</h1>
            </div>

            <div className='font-thin font-sans gap-y-5'>
            I'm here for the long haul, committed to developing long term relationships built on trust. I live by the mantra of measure twice, cut once, so by the time we reach handover, everything should look and feel just right. Rest assured that if anything does pop up, I'm dedicated to offering flexibility and providing assistance during and after the handover.
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;