import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StickySection = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const onLoaderHidden = () => {
      if (sectionRefs.current) {
        sectionRefs.current.forEach((section, index) => {
          // GSAP animation on each sticky section
          gsap.fromTo(
            section,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: section,
                start: '40% 40%',
                end: '40% 0%',
                scrub: true,
                markers: false, // Enables markers for debugging
              },
            }
          );
        });

        // Refresh ScrollTrigger to ensure it recalculates positions
        ScrollTrigger.refresh();
      }
    };

    // Listen to custom event dispatched when the loader hides
    window.addEventListener('loaderHidden', onLoaderHidden);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('loaderHidden', onLoaderHidden);
    };
  }, []);

  return (
    <>
      <div className="relative h-[200vh] w-screen bg-black text-center">
        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          className="sticky top-0 h-screen text-left sm:text-7xl text-3xl font-semibold text-white justify-center items-center flex"
        >
          Truly Great Work
          <br />
          Requires Strategy.
        </div>
      </div>

      <div className="relative h-[200vh] w-screen bg-black text-center">
        <div
          ref={(el) => (sectionRefs.current[1] = el)}
          className="sticky top-0 h-screen sm:text-7xl text-3xl font-semibold text-white justify-center items-center grid"
        >
          <div>
            Without strategy, the
            <br />
            difference between
            <br />
            you and everyone else
            <br />
            is
            {[" " , "h", "a", "r", "d", " ", "t", "o", " " , "s", "e", "e"].map((char, index) => (
                <div
                  key={index}
                  className="font-black inline-block blur-lg hover:blur-none duration-3000 hover:duration-200"
                >
                  {char === " " ? "\u00A0" : char}
                </div>
              ))}

          </div>

        </div>
      </div>
    </>
  );
};

export default StickySection;



