import React from 'react';
 import img from '../../src/assets/AboutUs.avif'
function AboutNew() {
  return (
    <div className="p-0 text-center roboto-regular relative ">
      {/* New Section: TRAINING EVALUATION JOURNEY */}
      <div className="w-full  bg-[#ffffff] relative">
        <link rel="preload" href="About/rect-i.avif" as="image" />
        <img
          src={img}
          alt="Infographic"
          className="w-full  block mx-auto"
        />
      </div>
    </div>
  );
}
 
export default AboutNew;
 
 