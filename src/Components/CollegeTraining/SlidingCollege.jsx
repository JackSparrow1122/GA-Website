import React from 'react';

const SlidingCollege = () => {
  const logos = [
    "Clgimage/1-1.avif",
    "Clgimage/vsit.avif",
    "Clgimage/13-1.avif",
    "Clgimage/mgi.avif",
    "Clgimage/14-1.avif",
    "Clgimage/lexicon.avif",
    "Clgimage/15-1.avif",
    "Clgimage/isbr.avif",
    "Clgimage/16-1.avif",
    "Clgimage/agnel.avif",
    "Clgimage/6-2.avif",
    "Clgimage/ifeel.avif",
    "Clgimage/7-2.avif",
    "Clgimage/ies.avif",
    "Clgimage/8-2.avif",
    "Clgimage/bitm.avif",
    "Clgimage/9-2.avif",
    "Clgimage/bidar.avif",
    "Clgimage/10-2.avif",
    "Clgimage/asm.avif",
    "Clgimage/11-2.avif",
    "Clgimage/12-2.avif",
  ];

  return (
    <div className="logo-slider-section bg-[#01224F] py-4 roboto-regular">
      <p className="section-heading text-[#FFC80E] text-center text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold mb-4">
        Our College Partners
      </p>
      <div className="logo-slider relative overflow-hidden w-full">
        <div className="logo-slider-track flex animate-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src={logo} alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
          ))}
          {/* Duplicate the logos for seamless scrolling */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src={logo} alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Inline styles for custom CSS */}
      <style>{`
        .logo-slider-track {
          width: calc(120px * ${logos.length * 2}); /* Adjust based on the number of logos */
          animation: scroll 20s linear infinite;
        }

        .logo-slider-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-120px * ${logos.length})); } /* Adjust based on the number of logos */
        }
      `}</style>
    </div>
  );
};

export default SlidingCollege;
