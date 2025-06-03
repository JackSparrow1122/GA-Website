import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import checklist from '/public/Clgimage/checklist.png'; // ✅ Apne path ke hisab se adjust kar

const CollegeInfoSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const points = [
    "Trainings Within the Walls of Campus",
    "Industry-Validated Training Content",
    "Practical Application Modules"
  ];

  // Duplicate points for infinite loop effect
  const loopPoints = [...points, ...points];

  return (
    <section className="bg-[#01224F] text-white py-4 overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee {
            display: inline-flex;
            white-space: nowrap;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

      <div className="w-full">
        <div className="animate-marquee space-x-12">
          {loopPoints.map((text, index) => (
            <div
              key={index}
              className="flex items-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl space-x-2 px-4"
            >
              <img
                src={checklist}
                alt="Tick"
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeInfoSection;
