import { FaChalkboardTeacher, FaCheckCircle, FaUsers, FaLightbulb } from "react-icons/fa";
 
function WhyGryphonApart() {
  const items = [
    {
      icon: <FaChalkboardTeacher size={30} />,
      text: "Industry\naligned\ntraining",
    },
    {
      icon: <FaCheckCircle size={30} />,
      text: "Proven\nMethodology",
    },
    {
      icon: <FaUsers size={30} />,
      text: "Expert\nInstructors",
    },
    {
      icon: <FaLightbulb size={30} />,
      text: "Hands on\nLearning\nApproach",
    },
  ];
 
  return (
    <div className="py-4 bg-[#1D2B5F] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[#FFC80E] text-2xl sm:text-3xl font-bold text-center mb-8 tracking-wide">
          WHAT SETS GRYPHON ACADEMY'S FDP APART?
        </h2>
 
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:flex-wrap sm:gap-0  items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-44 sm:w-52 h-44 sm:h-52 rounded-full border-2 border-cyan-300 bg-transparent flex flex-col items-center justify-center text-center px-4 transition-transform duration-300 hover:scale-105
              ${index !== 0 ? "sm:-ml-8" : ""}`}
            >
              <div className="mb-4 text-white">{item.icon}</div>
              <p className="whitespace-pre-wrap font-semibold leading-tight text-base sm:text-xl">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default WhyGryphonApart;
 
 