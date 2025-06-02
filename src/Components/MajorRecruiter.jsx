import React, { useEffect, useState } from 'react';

const MajorRecruiter = () => {
  const [reverse, setReverse] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  const logoPaths = [
    'TopRecruiters/40.avif',
    'TopRecruiters/1.avif',
    'TopRecruiters/2.avif',
    'TopRecruiters/3.avif',
    'TopRecruiters/4.avif',
    'TopRecruiters/5.avif',
    'TopRecruiters/6.avif',
    'TopRecruiters/7.avif',
    'TopRecruiters/8.avif',
    'TopRecruiters/9.avif',
    'TopRecruiters/10.avif',
    'TopRecruiters/11.avif',
    'TopRecruiters/12.avif',
    'TopRecruiters/13.avif',
    'TopRecruiters/14.avif',
    'TopRecruiters/15.avif',
    'TopRecruiters/16.avif',
    'TopRecruiters/17.avif',
    'TopRecruiters/18.avif',
    'TopRecruiters/19.avif',
    'TopRecruiters/20.avif',
    'TopRecruiters/paloalto.png',
    'TopRecruiters/autodesk.png',
    'TopRecruiters/ey.png',
    'TopRecruiters/servicenow.png',
    'TopRecruiters/walmart.png',
  ];

  const logos = logoPaths.map((src, index) => (
    <div key={`first-${index}`} className="flex-none mx-2 sm:mx-4 my-2 min-w-[100px] sm:min-w-[120px] md:min-w-[140px]">
      <img
        src={src}
        alt={`Recruiter ${index + 1}`}
        className="h-10 sm:h-14 md:h-20 w-auto object-contain"
      />
    </div>
  ));

  const duplicatedLogos = logos.map((logo, index) =>
    React.cloneElement(logo, { key: `second-${index}` })
  );

  useEffect(() => {
    const handleAnimationEnd = (e) => {
      if (e.animationName === (isMobile ? 'scroll-mobile' : 'scroll')) {
        setReverse(true);
      } else if (e.animationName === 'reverseScroll') {
        setReverse(false);
      }
    };

    const logoSlider = document.querySelector('.logo-slider-track');
    if (logoSlider) {
      logoSlider.addEventListener('animationend', handleAnimationEnd);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (logoSlider) {
        logoSlider.removeEventListener('animationend', handleAnimationEnd);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <div className="relative bg-[#01224F] roboto-regular py-6 sm:py-8">
      {/* Info box for desktop */}
      {!isMobile && (
        <div className="absolute top-0 left-0 h-full flex items-center z-10 bg-[#01224F] pl-4 pr-6 py-2">
          <h2 className="text-[#FFC80E] font-bold text-sm sm:text-base md:text-lg whitespace-nowrap">Our Top Recruiters</h2>
        </div>
      )}

      <div className={`overflow-hidden w-full ${!isMobile ? 'pl-[160px]' : ''}`}>
        <div
          className={`logo-slider-track flex items-center gap-2 md:gap-4 ${
            reverse ? 'reverse' : isMobile ? 'animate-scroll-mobile' : 'animate-scroll'
          }`}
        >
          {[...logos, ...duplicatedLogos]}
        </div>
      </div>

      <style>{`
        .logo-slider-track {
          width: max-content;
        }

        .animate-scroll {
          animation: scroll 30s linear forwards;
        }

        .animate-scroll-mobile {
          animation: scroll-mobile 30s linear forwards;
        }

        .reverse {
          animation: reverseScroll 15s linear forwards;
        }

        .logo-slider-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes reverseScroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default MajorRecruiter;
