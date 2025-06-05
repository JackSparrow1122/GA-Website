import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-[#01224F] text-white flex flex-col md:flex-row items-center justify-between py-10 md:py-16 px-6 md:px-16">
      {/* Left Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#FFC80E]">
          ABOUT US
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white" data-aos="fade-left">
          Bridging the Gap Between Industry and Academia
        </h2>
        <p className="text-base sm:text-lg font-medium leading-relaxed text-[#F0F0F0]" data-aos="fade-up">
          <b>We are India&apos;s premier non-ed-tech training and placement organization,</b> committed to bridging the gap between industry and academia through customized training programmes tailored to industry-centric needs.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center" data-aos="zoom-in">
        <img
          src="/About/heroNew1.avif"
          alt="Vector Graphic"
          className="w-full max-w-md h-auto rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AboutHero;
