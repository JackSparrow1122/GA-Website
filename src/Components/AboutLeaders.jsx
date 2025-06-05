import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import QuotesSVG from "/About/qts.png";
import WaveElement from "./WaveElement";

const MeetTheLeaders = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const founder = {
    designation: "Founder",
    name: "Mr. Shashi Bhat",
    message:
      "At Gryphon Academy, our mission is to bridge the gap between Industry and academia by creating an industry-ready workforce within the walls of educational institutions. Through customized learning programmes tailored for professional courses, we ensure students are equipped with the practical skills to contribute from day one. With over 15 years of expertise in academia and corporate relations, we’ve built strong partnerships with top recruiters, opening exceptional career opportunities for students. Gryphon Academy's vast network of industry leaders reflects our commitment to aligning education with real-world demands and shaping the future of professional growth.",
    profilePic: "/About/foun.avif",
  };

  const coFounder = {
    designation: "Co-Founder",
    name: "Ms. Ummeaiman Ansari",
    message:
      "At Gryphon Academy, we envision a transformative approach towards education that bridges the gap between academia and industry. Drawing from my 15 years of enriching experience in industry, I have witnessed the challenges firsthand that industries faces in finding and nurturing talent equipped for real-world complexities. This approach of ours drives our mission to create an industry-ready workforce within the walls of campuses. What sets Gryphon apart is our focus on practical and application based customization of our training programmes. We begin by engaging directly with industry leaders to understand their unique challenges, skill requirements, and future goals. These insights form the foundation of our curriculum, ensuring it is tailored to meet specific industrial demands, from technical expertise to behavioral skills, we design every training module with precision and outcome based purpose.",
    profilePic: "/About/cf.avif",
  };

  return (
    <div
      className="flex flex-col items-center mx-auto bg-gradient-to-r from-blue-100 to-blue-200 relative"
      style={{
        backgroundImage: `url('/About/lead.avif')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <WaveElement />
      <h2
        className="text-center mt-4 mb-8 text-3xl lg:text-4xl text-white font-bold z-20"
        data-aos="fade-down"
        data-aos-once="true"
      >
        Meet the Leaders
      </h2>

      {/* Desktop Version */}
      <div className="hidden md:block px-8 md:px-16 w-full">
   {/* Founder Section */}
        <div
          className="flex flex-row mb-12 items-center justify-between p-8 relative z-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative w-1/3 flex justify-center">
            <div className="bg-blue-500 h-16 w-16 absolute -top-6 -left-6 rounded-lg shadow-lg z-0"></div>
            <img
              src={founder.profilePic}
              alt={founder.name}
              className="rounded-lg shadow-xl max-h-60 object-cover relative z-10 border-4 border-white"
              loading="lazy"
            />
            <div className="bg-blue-700 text-white text-center text-lg font-semibold py-1 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20 shadow-lg whitespace-nowrap">
              {founder.designation}
            </div>
          </div>

          <div className="relative w-2/3">
            <div className="absolute inset-0 bg-blue-800 bg-opacity-30 rounded-lg z-0 mt-1 ml-4" />
            <div className="absolute -top-6 -left-6 w-6 h-6 z-10">
              <img src={QuotesSVG} alt="Quotes" className="w-full h-full" />
            </div>
            <p className="text-xs mt-2 ml-6 text-white relative z-20">
              {founder.message}
            </p>
          </div>
        </div>

        {/* ✅ Co-Founder First */}
        <div
          className="flex flex-row-reverse mb-12 items-center justify-between p-8 relative z-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Image */}
          <div className="relative w-1/3 flex justify-center">
            <div className="bg-blue-500 h-16 w-16 absolute -top-6 -left-6 rounded-lg shadow-lg z-0"></div>
            <img
              src={coFounder.profilePic}
              alt={coFounder.name}
              className="rounded-lg shadow-xl max-h-60 object-cover relative z-10 border-4 border-white"
              loading="lazy"
            />
            <div className="bg-blue-700 text-white text-center text-lg font-semibold py-1 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20 shadow-lg whitespace-nowrap">
              {coFounder.designation}
            </div>
          </div>

          {/* Message */}
          <div className="relative w-2/3">
            <div className="absolute inset-0 bg-blue-800 bg-opacity-30 rounded-lg z-0 mt-1 ml-4" />
            <div className="absolute -top-6 -left-6 w-6 h-6 z-10">
              <img src={QuotesSVG} alt="Quotes" className="w-full h-full" />
            </div>
            <p className="text-xs mt-2 ml-6 text-white relative z-20">
              {coFounder.message}
            </p>
          </div>
        </div>

     
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden px-8 w-full">
        {[founder, coFounder ].map((person, index) => (
          <div
            key={index}
            className="flex flex-col mb-12 items-center justify-center relative z-20"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative transition-transform hover:scale-105 duration-300 mb-6">
              <div className="bg-blue-500 h-12 w-12 absolute -top-6 -left-6 rounded-lg shadow-lg z-0"></div>
              <img
                src={person.profilePic}
                alt={person.name}
                className="rounded-lg shadow-xl w-32 h-32 object-cover relative z-10 border-4 border-white mx-auto"
                loading="lazy"
              />
              <div className="bg-blue-700 text-white text-center text-sm font-semibold py-1 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20 shadow-lg whitespace-nowrap">
                {person.designation}
              </div>
            </div>

            <div className="relative w-full">
              <div className="absolute inset-0 bg-blue-800 bg-opacity-30 mt-1 rounded-lg z-0" />
              <div className="absolute top-0 left-0 w-6 h-6 z-10">
                <img src={QuotesSVG} alt="Quotes" className="w-full h-full" />
              </div>
              <p className="text-xs p-2 mt-2 text-white relative z-20">
                {person.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheLeaders;
