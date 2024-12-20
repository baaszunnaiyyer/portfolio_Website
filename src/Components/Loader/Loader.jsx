import React, { useRef } from "react";
import "./styles.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";




const Loader = () => {
  let loaderText = useRef()
  let loaderDiv = useRef()

  useGSAP(()=>{
    const tl = gsap.timeline({ delay: 0.5 }); // Infinite loop with delay
    
    tl.to(loaderText.current, { translateY: "0%", duration: 0.5, ease: "power2.out" })
      .to(loaderText.current, { translateY: "-10%", duration: 0.5, ease: "power1.inOut" })
      .to(loaderText.current, { translateY: "-20%", duration: 0.4, ease: "power1.inOut" })
      .to(loaderText.current, { translateY: "-30%", duration: 0.3, ease: "power1.inOut" })
      .to(loaderText.current, { translateY: "-40%", duration: .2, ease: "power1.inOut" })
      .to(loaderText.current, { translateY: "-50%", duration: .2, ease: "power1.inOut" })
      .to(loaderText.current, { translateY: "-60%", duration: .2, ease: "power1.inOut" })
      .to(loaderText.current, { translateY: "-70%", duration: .2, ease: "power1.inOut" })
      .to(loaderText.current, { translateY: "-80%", duration: .2, ease: "power1.inOut" })
      .to(loaderText.current, { translateY: "-90%", duration: .2, ease: "power1.inOut" })
      .to(loaderText.current, { translateY: "-90%", duration: 0.7, ease: "power1.inOut" })
      .to(loaderDiv.current, {translateY: "-100%",borderRadius: "100%" , duration:0.7, ease: "power.Out"});
  })


  return (
    <div ref={loaderDiv} className="h-screen w-screen fixed flex justify-center items-center z-50 bg-white">
      <div className="text-primary sm:text-4xl text-xl max-h-11 -translate-y-20 translate-x-4 sm:mx-0 mx-auto leading-12 overflow-hidden">
      <div ref={loaderText}>
        {[
          "Hello", //0
          "Bonjour", //50
          "स्वागत हे", //150
          "Ciao", //200
          "Olá", //250
          "おい", //300
          "Hallå", 
          "Guten tag",
          "Hallo",
          "السَّلاَم", // 500
        ].map((word, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="sm:w-3 sm:h-3 w-2 h-2 bg-primary rounded-full"></div>
            <span>{word}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
