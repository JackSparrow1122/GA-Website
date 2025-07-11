import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const images = [
  "/Event/h2.avif",
  "/About/hr1.avif",
  "/About/gal1.avif",
  "/About/gal3.avif",
  "/About/hr.avif",
  "/About/h3.avif",
  "/About/eventlogo.avif", // New image 1 (left side)
  "/About/gal5.avif", // New image 2 (left side)
  "/About/hr3.avif", // New image 3 (right side)
  "/About/gl4.avif", // New image 4 (right side)
];

const ImageGallery = () => {
  const [hasScrolled, setHasScrolled] = useState(false); // Track scroll state
  const imageRefs = useRef([]);

  const handleMouseEnter = (index) => {
    if (imageRefs.current[index]) {
      imageRefs.current[index].style.transform = "scale(1.05)";
      imageRefs.current[index].style.transition = "transform 0.3s ease"; // Adjusted timing for hover
    }
  };

  const handleMouseLeave = (index) => {
    if (imageRefs.current[index]) {
      imageRefs.current[index].style.transform = "scale(1)";
    }
  };

  useEffect(() => {
    // Initialize AOS with 'once: false' by default
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false, // Allow the animation to trigger multiple times initially
      offset: '5%', // Trigger AOS animations as soon as the element is within 5% of the viewport
    });

    // Function to handle scroll event and set scroll state
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true); // Mark that user has scrolled
        AOS.refresh(); // Refresh AOS to make it aware of the scroll position and trigger animations
        // Optionally stop listening for scroll after the first scroll
        window.removeEventListener('scroll', handleScroll); 
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]); // Only run once when the scroll happens

  useEffect(() => {
    // After first scroll, disable AOS trigger from scrolling again
    if (hasScrolled) {
      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true, // Disable AOS re-triggering after the first scroll
        offset: '5%', // Keep the offset value to trigger animations early
      });
    }
  }, [hasScrolled]);

  return (
    <div className="flex flex-col items-center justify-center py-2 bg-white roboto-regular">
      <div className="flex w-full mb-8 items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#01224F]">
          Event <span className="text-4xl md:text-5xl font-semibold text-[#1e3a8a]">Gallery</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row w-full mb-4 px-4">
        {/* Left Side */}
        <div className="flex flex-col w-full md:w-1/2 pr-0 md:pr-4 mb-3 md:mb-0">
          {/* First Row */}
          <div className="flex mb-2 flex-col md:flex-row">
            <div className="gallery-img-wrap w-full md:w-1/2 px-2 mb-2 relative">
              <div
                className="h-64 overflow-hidden rounded-3xl shadow-lg"
                ref={(el) => (imageRefs.current[0] = el)}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={images[0]}
                  alt={`Gallery 1`}
                  className="w-full h-full object-cover"
                  loading="lazy" // Lazy load added here
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-3xl"></div>
              </div>
            </div>
            <div className="gallery-img-wrap w-full md:w-1/2 px-2 mb-2 relative">
              <div
                className="h-48 overflow-hidden rounded-3xl shadow-lg"
                ref={(el) => (imageRefs.current[1] = el)}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src={images[1]}
                  alt={`Gallery 2`}
                  className="w-full h-full object-cover"
                  loading="lazy" // Lazy load added here
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-3xl"></div>
              </div>
            </div>
          </div>
          {/* Second Row */}
          <div className="gallery-img-wrap w-full mb-2 relative">
            <div
              className="h-56 overflow-hidden rounded-3xl shadow-lg"
              ref={(el) => (imageRefs.current[2] = el)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src={images[2]}
                alt={`Gallery 3`}
                className="w-full h-full object-cover"
                loading="lazy" // Lazy load added here
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-3xl"></div>
            </div>
          </div>
          {/* New Images Row */}
          <div className="flex mb-2 flex-col md:flex-row">
            <div className="gallery-img-wrap w-full md:w-1/2 px-2 mb-2 relative">
              <div
                className="h-72 overflow-hidden rounded-3xl shadow-lg"
                ref={(el) => (imageRefs.current[6] = el)}
                onMouseEnter={() => handleMouseEnter(6)}
                onMouseLeave={() => handleMouseLeave(6)}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  src={images[6]}
                  alt={`Gallery 7`}
                  className="w-full h-full object-cover"
                  loading="lazy" // Lazy load added here
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-3xl"></div>
              </div>
            </div>
            <div className="gallery-img-wrap w-full md:w-1/2 px-2 mb-2 relative">
              <div
                className="h-80 overflow-hidden rounded-3xl shadow-lg"
                ref={(el) => (imageRefs.current[7] = el)}
                onMouseEnter={() => handleMouseEnter(7)}
                onMouseLeave={() => handleMouseLeave(7)}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <img
                  src={images[7]}
                  alt={`Gallery 8`}
                  className="w-full h-full object-cover"
                  loading="lazy" // Lazy load added here
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-full md:w-1/2 pl-0 md:pl-4">
          {/* New Images Row Above First Row */}
          <div className="flex mb-2">
            <div className="gallery-img-wrap w-full md:w-1/2 px-2 mb-2 relative">
              <div
                className="h-56 overflow-hidden rounded-3xl shadow-lg"
                ref={(el) => (imageRefs.current[4] = el)}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={() => handleMouseLeave(4)}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <img
                  src={images[4]}
                  alt={`Gallery 5`}
                  className="w-full h-full object-cover"
                  loading="lazy" // Lazy load added here
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-3xl"></div>
              </div>
            </div>
            <div className="gallery-img-wrap w-full md:w-1/2 px-2 mb-2 relative">
              <div
                className="h-64 overflow-hidden rounded-3xl shadow-lg"
                ref={(el) => (imageRefs.current[5] = el)}
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={() => handleMouseLeave(5)}
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <img
                  src={images[5]}
                  alt={`Gallery 6`}
                  className="w-full h-full object-cover"
                  loading="lazy" // Lazy load added here
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-3xl"></div>
              </div>
            </div>
          </div>
          {/* First Row */}
          <div className="gallery-img-wrap w-full mb-2 relative">
            <div
              className="h-72 overflow-hidden rounded-3xl shadow-lg"
              ref={(el) => (imageRefs.current[3] = el)}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <img
                src={images[3]}
                alt={`Gallery 4`}
                className="w-full h-full object-cover"
                loading="lazy" // Lazy load added here
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-3xl"></div>
            </div>
          </div>
          {/* New Images Row Below Second Row */}
          <div className="flex mb-2 flex-col md:flex-row">
            <div className="gallery-img-wrap w-full md:w-1/2 px-2 mb-2 relative">
              <div
                className="h-64 overflow-hidden rounded-3xl shadow-lg"
                ref={(el) => (imageRefs.current[8] = el)}
                onMouseEnter={() => handleMouseEnter(8)}
                onMouseLeave={() => handleMouseLeave(8)}
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <img
                  src={images[8]}
                  alt={`Gallery 9`}
                  className="w-full h-full object-cover"
                  loading="lazy" // Lazy load added here
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-3xl"></div>
              </div>
            </div>
            <div className="gallery-img-wrap w-full md:w-1/2 px-2 mb-2 relative">
              <div
                className="h-56 overflow-hidden rounded-3xl shadow-lg"
                ref={(el) => (imageRefs.current[9] = el)}
                onMouseEnter={() => handleMouseEnter(9)}
                onMouseLeave={() => handleMouseLeave(9)}
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <img
                  src={images[9]}
                  alt={`Gallery 10`}
                  className="w-full h-full object-cover"
                  loading="lazy" // Lazy load added here
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-30 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
