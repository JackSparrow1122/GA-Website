import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";
import PropTypes from 'prop-types';
import RahulBagale from '../../assets/RahulBagale.avif'
// import PratapPawar from '../../assets/Pratap Pawar.avif' 
import SuvarnaRao from '../../assets/Suvarnanidhi Rao.avif'
import SushantKumar from '../../assets/Sushant Kumar.avif'
import SunainaDatta from '../../assets/Sunaina Dutta.avif'
import ShipraPandit from '../../assets/Shipra Pandit.avif'
import AanchalTondon from '../../assets/Aanchal Tandon.avif'
import UrvishPandey from '../../assets/Urvish Pandey.avif'
import SupreetKakroo from '../../assets/Supreet Kakroo.avif'
import SanjayDCosta from '../../assets/Sanjay D Costa.avif'
import AvinashTalreja from '../../assets/Avinash Talreja.avif'
import RamHonap from '../../assets/Ram Honap.avif'
import PiyushNaik from '../../assets/Piyush Naik.avif'
import AnupamaPillai from '../../assets/Anupama Pillai.avif'
import ShirishBavdekar from '../../assets/Shirish Bavdekar.avif'
import DiweshSahay from '../../assets/Diwesh Sahay.avif'
import ManroopSingh from '../../assets/Manroop Singh.avif'
import HarshRaghubanshi from '../../assets/Harsh Raghubanshi.avif'
 
 
 
// Testimonials Data
const testimonials = [
  {
    message:
      "We recruited 145 fresh engineers batch 2022-23 with the support of Gryphon and got reliable source of talent for our company. Team Gryphon is doing a fabulous job.",
    name: "Mr. Rahul Bagale",
    title:"Group HR Head",
    institution: "Force Motors Ltd.",
    profilePic: RahulBagale,
  },
  // {
  //   message:
  //     "Their commitment to nurturing and grooming exceptional talent is truly commendable. The graduates we've recruited from Gryphon Academy have consistently proven to be skilled, adaptable, and well-prepared for the demands of the industry.",
  //   name: "Cdr. Pratap Pawar",
  //   title: "Director HR & IT ",
  //   institution: "Gs lab",
  //   profilePic: PratapPawar,
  // },
  {
    message:
      "The talent pool Gryphon offers is a testament to their dedication in producing industry-ready graduates. We thank Gryphon Academy for consistently providing us with such outstanding talent. ",
    name: "Mr. Suvarnanidhi Rao",
    title: "Campus Lead - Indian Sub Continent ",
    institution: "Philips India",
    profilePic: SuvarnaRao,
  },
  {
    message:
      "Gryphon Academy trained students are well-prepared for the demands of the engineering industry, with a strong foundation in both technical and professional skills.",
    name: "Mr. Sushant Kumar",
    title: "Talent Acquisition Manager",
    institution: "Brillio",
    profilePic: SushantKumar,
  },
  {
    message:
      "Our experience with Gryphon Academy has been nothing short of exceptional. I appreciate the effort they put into producing graducates. They have made our recruitment process smoother and more effective.",
    name: "Dr. Sunaina Dutta",
    title: "Head HR",
    institution: "Hettich India",
    profilePic: SunainaDatta,
  },
  {
    message:
      "We've had the opputunity to undergo Gryphon Academy's training process, extending its reach to candidates from various regions. Gryphon's high-quality training program has undeniably enhanced student skills.",
    name: "Mr. Shipra Pandit",
    title: "Director - HR",
    institution: "Juspay",
    profilePic: ShipraPandit,
  },
  {
    message:
      "Gryphon Academy’s ability to unite academia and industry on such a scale underscores their dedication to creating opportunities for growth and collaboration, beneting both students and recruiters alike. ",
    name: "Ms. Aanchal Tandon",
    title: "Manager HR",
    institution: "HCLTech",
    profilePic: AanchalTondon,
  },
  {
    message:
      "Highly impressed with Gryphon Academy's training modules to create industry ready force. All the best",
    name: "Mr. Urvish Pandey",
    title: "India Head - University Recruitment & Early Talent Engagement",
    institution: "Mastercard",
    profilePic: UrvishPandey,
  },
  {
    message:
      "The dedication and commitment displayed by Team Gryphon is unwavering. The talent they prepare is ready for the industry.",
    name: "Mr. Supreet Kakroo",
    title: "Human Resources Specialist",
    institution: "SaS",
    profilePic: SupreetKakroo,
  },
  {
    message:
      "Partnering with Gryphon Academy has been game-changing. The candidates we’ve hired are not just well-trained but also industry-ready from day one. Their understanding of business dynamics and technical expertise reects their commitment to excellence. ",
    name: "Mr. Sanjay D Costa",
    title: "Talent Acquisition Leader - Campus Recruiting ",
    institution: "Principal Global",
    profilePic: SanjayDCosta,
  },
  {
    message:
      "The training modules at Gryphon Academy are tailored to meet the evolving needs of the industry. This foresight and adaptability are why their students excel across diverse domains, making them a valuable addition to any organization. ",
    name: " Mr. Avinash Talreja ",
    title: "Deputy General Manager Human Resource",
    institution: "Schneider ",
    profilePic: AvinashTalreja,
  },
  {
    message:
      "The Synergy Sphere 2024 event showcasedGryphon Academy’s dedication to bridging academia and industry. Bringing together over 100 HR leaders on one platform was a masterstroke that facilitated meaningful collaborations and highlighted Gryphon's role as a talent powerhouse.",
    name: "Mr. Ram Honap ",
    title: "National Head HR",
    institution: "Coca Cola ",
    profilePic: RamHonap,
  },
  {
    message:
      "We’ve consistently recruited top talent from Gryphon. They train students as per the industry needs & requirements transforming them into polished & professional candidates who come with a deep understanding of industry demands. ",
    name: "Mr. Piyush Naik",
    title: " Associate Director - Talent Insights,Sourcing & Early Careers",
    institution: "OmniCom Global Solutions",
    profilePic: PiyushNaik,
  },
  {
    message:
      "The hiring experience with Gryphon Academy has been seamless and rewarding. Their knack for understanding our specic talent needs and delivering candidates who are a perfect t is unparalleled in the industry. ",
    name: "Ms. Anupama Pillai",
    title: "Global TA & Country HR Head",
    institution: "HCLSoftware",
    profilePic: AnupamaPillai,
  },
  {
    message:
      "Synergy Sphere 2024 was a testament to Gryphon Academy’s innovative approach to connecting academia with corporate needs. The platform not only facilitated networking but also strengthened our trust in Gryphon as a reliable source of exceptional talent.",
    name: " Mr. Shirish Bavdekar",
    title: "Global Talent Sourcing Leader",
    institution: "Dassault Systemes",
    profilePic: ShirishBavdekar,
  },
  {
    message:
      "Gryphon's focus on reskilling and adapting to industry trends ensures their candidates are future-ready. Their comprehensive training programs consistently produce standout professionals who bring value to the organizations out there. ",
    name: " Mr. Diwesh Sahay",
    title: "General Manager Human Resources",
    institution: "RR Parkon ",
    profilePic: DiweshSahay,
  },
  {
    message:
      "The candidates we’ve recruited from Gryphon Academy bring a rare blend of technical prociency and soft skills. Their readiness to adapt and excel in dynamic environments is a reection of the robust training they receive at through the Industry Readiness Programme.",
    name: "Mr. Manroop Singh",
    title: "Head TA Operations & University Relations",
    institution: " Xperi inc",
    profilePic: ManroopSingh,
  },
  {
    message:
      "Gryphon Academy has been a reliable source of top-tier talent for every organization. The graduates they provide not only excel in their technical abilities but also possess strong soft skills for the corporate world.",
    name: "Mr. Harsh Raghubanshi ",
    title: "Assistant Manager, ",
    institution: "Grasim Industries",
    profilePic: HarshRaghubanshi,
  },
 
];
 
const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card bg-white text-black p-4 rounded-lg shadow-lg mb-4 lg:mb-6 w-full">
    <p className="testimonial-message mb-2 italic">“{testimonial.message}”</p>
    <div className="flex items-center mt-4">
      <img
        src={testimonial.profilePic}
        alt={`Profile of ${testimonial.name}`}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 className="font-bold text-lg">{testimonial.name}</h3>
        <p className="text-sm">{testimonial.title}</p>
        <p className="text-sm">{testimonial.institution}</p>
      </div>
    </div>
  </div>
);
 
// Prop Types validation for TestimonialCard
TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    message: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
  }).isRequired,
};
 
 
// Testimonials Component
const Testimonials = () => {
  return (
    <div className="w-full lg:w-1/2 p-4 hidden sm:block">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Recruiter&apos;s Testimonials
      </h2>
      <div className="relative overflow-hidden sm:h-[60vh] xs:h-[60vh] md:h-[60vh] lg:h-[90vh]">
        <div className="flex flex-col animate-slide">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`dup-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};
 
// Contact Form Component
const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
 
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
    source: "College Form", // Permanent value for the source
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // New state to track form submission
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
 
    // Append the source value to formData
    formData.append("source", formState.source);
 
    if (isSubmitting || isFormSubmitted) return; // Prevent submission if already submitted
 
    setIsSubmitting(true);
 
    fetch(
      "https://script.google.com/macros/s/AKfycbzD2p4mf2qIUGsFQn0kyIfd9RelTaFbzJXaWAzp7TQ03Bd9IELeBA4y4Nl-dv_KbSznlg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          toast.success("Form successfully submitted!", {
            position: window.innerWidth <= 768 ? "bottom-center" : "top-center",
            autoClose: 2000,
            className: window.innerWidth <= 768 ? "text-sm" : "",
          });
 
          setFormState({
            name: "",
            email: "",
            phone: "",
            category: "",
            message: "",
            source: "College Form", // Reset source to default
          });
          e.target.reset();
 
          setIsFormSubmitted(true); // Mark the form as submitted
        } else {
          toast.error(`Error: ${data.message}`, {
            position: window.innerWidth <= 768 ? "bottom-center" : "top-center",
            autoClose: 2000,
            className: window.innerWidth <= 768 ? "text-sm" : "",
          });
        }
      })
      .catch(() => {
        toast.error("Error submitting form. Please try again.", {
          position: window.innerWidth <= 768 ? "bottom-center" : "top-center",
          autoClose: 2000,
          className: window.innerWidth <= 768 ? "text-sm" : "",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
 
  const fadeInStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-20px)",
    transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
  };
 
  return (
    <>
      <ToastContainer />
      <style>
        {`
          @keyframes slide {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-slide {
            animation: slide 40s linear infinite;
          }
  .animate-slide:hover {
          animation-play-state: paused;
        }
 
          .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            border: 0;
            clip: rect(0 0 0 0);
            clip-path: inset(50%);
            overflow: hidden;
          }
          .testimonial-slider-container {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            width: 100%;
          }
          .testimonial-card {
            width: 100%;
            flex-shrink: 0;
          }
          .testimonial-message {
            white-space: normal;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
        `}
      </style>
 
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 roboto-regular">
        <div className="flex flex-col lg:flex-row gap-8">
          <Testimonials />
          <div ref={ref} className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-full p-4 lg:p-6 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-lg text-white overflow-auto mt-20">
              <div className="w-full lg:h-auto flex flex-col lg:flex-row justify-between items-center mb-4 relative p-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-white mb-4 lg:mb-0 lg:mr-4 flex-1">
                  <span className="text-[#FFC80E]">Elevate </span> Your Team:
                  Learn More About Gryphon&apos;s{" "}
                  <span className="text-[#FFC80E]">
                    Corporate Training Programs
                  </span>{" "}
                  Today!
                  <br />
                </h1>
 
                <img
                  src="LandingImage/contactform.png"
                  alt="Salesperson illustration"
                  className="w-64 md:w-72 lg:w-80 xl:w-96 max-w-full h-auto object-cover rounded-lg flex-1"
                  style={{ minWidth: "150px" }} // Adjust as needed
                />
 
                <img
                  src="LandingImage/union-design-img.svg"
                  alt="Rotating Triangle"
                  className="absolute top-0 w-10 h-10 md:w-12 md:h-12 left-0 md:left-18"
                  style={{
                    margin: "10px",
                    animation: "spin 2s linear infinite",
                  }}
                />
 
                <img
                  src="LandingImage/union-design-img.svg"
                  alt="Rotating Triangle Bottom Right"
                  className="absolute bottom-0 right-0 w-10 h-10 md:w-12 md:h-12"
                  style={{
                    margin: "10px",
                    marginRight: "20px",
                    animation: "spin 2s linear infinite",
                  }}
                />
 
                <img
                  src="LandingImage/curve-lines.svg"
                  alt="Waving Design"
                  className="absolute bottom-0 left-0 w-20 h-auto md:w-24 md:bottom-0 md:left-64"
                  style={{
                    marginBottom: "10px",
                    marginLeft: "10px",
                    // Add responsive width adjustments if necessary
                    maxWidth: "100%", // Ensure it scales down to fit smaller screens
                    height: "auto", // Maintain aspect ratio
                  }}
                />
              </div>
 
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <InputField
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                   fadeInStyle={fadeInStyle}
                />
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                   fadeInStyle={fadeInStyle}
                />
                <InputField
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                   fadeInStyle={fadeInStyle}
                />
                <SelectField
                  label="Category"
                  name="category"
                  value={formState.category}
                  onChange={(e) =>
                    setFormState({ ...formState, category: e.target.value })
                  }
                   fadeInStyle={fadeInStyle}
                />
                <TextareaField
                  label="Message"
                  name="message"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                   fadeInStyle={fadeInStyle}
                />
                <button
                  type="submit"
                  className={`bg-yellow-400 text-gray-800 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors w-full ${isSubmitting || isFormSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting || isFormSubmitted} // Disable if submitting or form is already submitted
                >
                  {isSubmitting ? 'Submitting...' : isFormSubmitted ? 'Already Submitted' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// Input, Select, and Textarea Fields
 
const InputField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  fadeInStyle,
}) => (
  <div style={fadeInStyle}>
    <label className="visually-hidden" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded-lg p-1 lg:p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    />
  </div>
);
 
// Prop Types validation
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fadeInStyle: PropTypes.object,
};
 
 
const SelectField = ({ label, name, value, onChange, fadeInStyle }) => (
  <div style={fadeInStyle}>
    <label className="visually-hidden" htmlFor={name}>
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded-lg p-1 lg:p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all bg-white"
      style={{
        backgroundColor: 'white', // Keeps the background white
        color: value === '' ? '#9da0a6' : '#1F2937', // Gray color for placeholder text, black for other options
        padding: '0.5rem', // Optional padding to space the text
        fontSize: '1rem', // Optional font size adjustment
        borderRadius: '0.375rem', // Tailwind's rounded-lg equivalent
      }}
    >
      <option value="" disabled className="text-gray-500">
        Select Category
      </option>
      <option value="college" className="text-black">
        College
      </option>
      <option value="corporate" className="text-black">
        Corporate
      </option>
      <option value="university" className="text-black">
        University
      </option>
    </select>
  </div>
);
 
// Prop Types validation
SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fadeInStyle: PropTypes.object,
};
 
 
 
const TextareaField = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  fadeInStyle,
}) => (
  <div style={fadeInStyle}>
    <label className="visually-hidden" htmlFor={name}>
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      rows="4"
      className="w-full border border-gray-300 rounded-lg p-1 lg:p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    ></textarea>
  </div>
);
 
// Prop Types validation
TextareaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fadeInStyle: PropTypes.object,
};
 
 
export default ContactForm;