import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { gsap } from "gsap";
 
import {
  FaComments,
  FaHeadphones,
  FaPenFancy,
  FaCheckDouble,
  FaUserTie,
  FaQuestionCircle,
  FaUsers,
  FaBrain,
  FaPhoneAlt,
  FaBalanceScale,
  FaCalculator,
  FaRulerCombined,
  FaRunning,
  FaProjectDiagram,
  FaChartBar,
  FaGamepad,
  FaPuzzlePiece,
  FaChartPie,
  FaLightbulb,
} from "react-icons/fa";
 
const courses = {
  softSkills: [
    { src: "Training Page/irpi/SS 3.avif", alt: "Interview Skills", title: "Group Discussion and Personal Interview" },
    { src: "Training Page/irpi/SS 2.avif", alt: "Effective Communication Skills", title: "Effective Communication (Business Communication)" },
    { src: "Training Page/irpi/SS 1.avif", alt: "Productivity Tools", title: "Productivity Tools <br />(Presentation, Time Management)" },
    { src: "Training Page/irpi/SS 5.avif", alt: "Verbal & Non Verbal Communication", title: "Verbal & Non Verbal Communication" },
    { src: "Training Page/irpi/SS 6.avif", alt: "Confidence Building and Public speaking", title: "Confidence Building and Public speaking" },
    { src: "Training Page/irpi/SS 4.avif", alt: "Presentation Skills", title: "Personality Development and Presentation Skills" },
  ],
  aptitude: [
    { src: "Training Page/irpi/SS 4.avif", alt: "Problem Solving", title: "Problem Solving" },
    { src: "Training Page/irpi/Aptitude 4.avif", alt: "Critical Design Thinking", title: "Critical Design Thinking" },
    { src: "Training Page/irpi/Aptitude 1.avif", alt: "Blood Relations", title: "Blood Relations" },
    { src: "Training Page/irpi/Aptitude 3.avif", alt: "Syllogism", title: "Syllogism" },
    { src: "Training Page/irpi/Aptitude 5.avif", alt: "Coding Decoding", title: "Coding Decoding" },
    { src: "Training Page/irpi/Aptitude 2.avif", alt: "Data Interpretation", title: "Data Interpretation" },
  ],
};
 
const interpersonalPoints = [
 
  "Improving Listening Skills",
  "Effective Writing Skills - Emails & Chats",
  "7Cs of Professional Communication",
  "Managerial Communication Skills",
  "Questioning Skills to Clarify Doubts and Assumptions",
  "Emotional Intelligence in Communication",
  "Telephone Communication Skills Seven Aspects",
  "Conflict Management in Teams",
];
 
const aptitudePoints = [
  "Algebra and Number Theory",
  "Arithmetic and Mensuration",
  "Work, Time and Distance",
  "Permutations and Combinations",
  "Modern Math & Financial Mathematics",
  "Gamification",
  "Logical Reasoning and Puzzles",
  "Data Analysis and Probability",
 
];
 
 
 
const CourseCard = React.forwardRef(({ src, alt, title, widthClass, heightClass, aos, aosDelay }, ref) => (
  <div className={`p-1 ${widthClass} ${heightClass}`} data-aos={aos} data-aos-delay={aosDelay}>
    <div className="bg-[#1e3a8a] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <img src={src} alt={alt} className="max-h-40 w-auto object-contain" />
      </div>
      <div
        ref={ref}
        className="bg-[#1e3a8a] text-white text-center font-extrabold text-lg flex items-center justify-center"
        style={{ minHeight: "60px", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  </div>
));
CourseCard.displayName = "CourseCard";
CourseCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  widthClass: PropTypes.string.isRequired,
  heightClass: PropTypes.string.isRequired,
  aos: PropTypes.string.isRequired,
  aosDelay: PropTypes.string.isRequired,
};
 
const ManyMoreModal = ({ tab, onClose }) => {
  const data = tab === "interpersonal" ? interpersonalPoints : aptitudePoints;
  const modalRef = useRef(null);
 
  const getIcon = (i) => {
    const interpersonalIcons = [
      <FaComments />, <FaHeadphones />, <FaPenFancy />, <FaCheckDouble />, <FaUserTie />,
      <FaQuestionCircle />, <FaUsers />, <FaBrain />, <FaPhoneAlt />, <FaBalanceScale />
    ];
    const aptitudeIcons = [
      <FaCalculator />, <FaRulerCombined />, <FaRunning />, <FaProjectDiagram />, <FaChartBar />,
      <FaChartPie />, <FaGamepad />, <FaPuzzlePiece />, <FaChartPie />, <FaLightbulb />
    ];
    return tab === "interpersonal" ? interpersonalIcons[i] : aptitudeIcons[i];
  };
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        modalRef.current,
        { y: 60, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    }, modalRef);
    return () => ctx.revert();
  }, []);
 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-red-600 text-2xl font-bold transition-transform duration-200 hover:scale-125"
        >
          &times;
        </button>
 
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#ffc700]">
          {tab === "interpersonal" ? "Interpersonal Skills" : "Aptitude"}
        </h3>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.map((title, i) => (
            <div
              key={i}
              className="flex justify-between items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition"
            >
              <div className="flex gap-4 items-center">
                {/* Removed serial number div here */}
                <p className="text-lg font-medium text-gray-800">{title}</p>
              </div>
              <div
                className="text-[#01224F] text-4xl shrink-0 transition-transform duration-300 transform hover:-translate-y-1"
              >
                {getIcon(i)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
const CollegeCourse = () => {
  const softSkillsRefs = useRef([]);
  const aptitudeRefs = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("interpersonal");
 
  const setMaxHeight = (refs) => {
    const heights = refs.map((r) => (r ? r.offsetHeight : 0));
    const max = Math.max(...heights);
    refs.forEach((r) => r && (r.style.height = `${max}px`));
  };
 
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    setMaxHeight(softSkillsRefs.current);
    setMaxHeight(aptitudeRefs.current);
  }, []);
 
  return (
    <section className="bg-[#01224F] py-6 roboto-regular relative">
      <div className="container mx-auto px-4 md:px-16">
        <div className="mb-4 text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ffc700] mb-1 relative inline-block">
            Industry Readiness Programme Includes
            <span className="absolute left-0 right-0 h-[1px] bg-white bottom-0 mx-auto" />
          </p>
        </div>
 
        {/* Interpersonal */}
        <div className="mb-4 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FFC80E] mb-1">Interpersonal Skills</p>
          <div className="flex flex-wrap justify-center lg:justify-start items-start">
            {courses.softSkills.map((c, i) => (
              <CourseCard key={i} ref={(el) => (softSkillsRefs.current[i] = el)} {...c}
                widthClass="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6" heightClass="h-auto"
                aos="fade-up" aosDelay={`${i * 100}`} />
            ))}
            <p
              className="p-1 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/12 text-right text-[#ffc700] font-extrabold text-xs sm:text-sm cursor-pointer hover:underline hover:scale-105 transition-all duration-300 ml-auto"
              onClick={() => { setActiveTab("interpersonal"); setShowModal(true); }}
            >
              + Many More….
            </p>
          </div>
        </div>
 
        {/* Aptitude */}
        <div className="mb-4 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FFC80E] mb-1">Aptitude</p>
          <div className="flex flex-wrap justify-center lg:justify-start items-start">
            {courses.aptitude.map((c, i) => (
              <CourseCard key={i} ref={(el) => (aptitudeRefs.current[i] = el)} {...c}
                widthClass="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6" heightClass="h-auto"
                aos="fade-up" aosDelay={`${i * 100}`} />
            ))}
            <p
              className="p-1 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/12 text-right text-[#ffc700] font-extrabold text-xs sm:text-sm cursor-pointer hover:underline hover:scale-105 transition-all duration-300 ml-auto"
              onClick={() => { setActiveTab("aptitude"); setShowModal(true); }}
            >
              + Many More….
            </p>
          </div>
        </div>
 
        {showModal && <ManyMoreModal tab={activeTab} onClose={() => setShowModal(false)} />}
      </div>
    </section>
  );
};
 
export default CollegeCourse;
 
 