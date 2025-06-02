import React from "react";
import {
  FaAndroid, FaLaptopCode, FaUserTie, FaToolbox, FaNetworkWired,
  FaBolt, FaMicrochip, FaCode, FaBriefcase, FaCogs, FaDatabase,
  FaRobot, FaServer, FaProjectDiagram, FaShoppingCart,
  FaClipboardCheck, FaChartLine, FaChartBar, FaUsers,
  FaShippingFast, FaHandshake, FaBalanceScale, FaFileInvoiceDollar,
  FaBullhorn, FaBookOpen, FaSearch
} from "react-icons/fa";

// ====== DATA ====== //

const engineeringProfiles = [
  { name: "Associate Android Developer", icon: <FaAndroid /> },
  { name: "Associate Software Developer", icon: <FaLaptopCode /> },
  { name: "Associate Technical Consultant", icon: <FaUserTie /> },
  { name: "BIM Engineer", icon: <FaToolbox /> },
  { name: "Cyber Security Engineer", icon: <FaNetworkWired /> },
  { name: "Electrical Design Engineer", icon: <FaBolt /> },
  { name: "Electronics Hardware Engineer", icon: <FaMicrochip /> },
  { name: "Embedded Firmware Developer", icon: <FaCode /> },
  { name: "Graduate Engineer Trainee", icon: <FaBriefcase /> },
  { name: "GET - Product Design and Development", icon: <FaCogs /> },
  { name: "GET - Engine Dataset Management", icon: <FaDatabase /> },
  { name: "Full Stack Developer", icon: <FaLaptopCode /> },
  { name: "Jr. Robotics Engineer", icon: <FaRobot /> },
  { name: "MES Support Engineer", icon: <FaServer /> },
  { name: "PHP Developer", icon: <FaCode /> },
  { name: "Project Engineer", icon: <FaProjectDiagram /> },
  { name: "Purchase Associate", icon: <FaShoppingCart /> },
  { name: "Quality Management Executive", icon: <FaClipboardCheck /> },
  { name: "Software Engineer", icon: <FaLaptopCode /> },
  { name: "Trainee - Quality Management", icon: <FaChartLine /> },
];

const mbaProfiles = [

  { name: "Area Operations Manager", icon: <FaUsers /> },
  { name: "Associate - HR operations", icon: <FaUserTie /> },
  { name: "Associate Business Analyst", icon: <FaSearch /> },
  { name: "Analyst", icon: <FaChartBar /> },
  { name: "Corporate Relations", icon: <FaHandshake /> },
  { name: "Operations Associate", icon: <FaShippingFast /> },
  { name: "Presales Executive", icon: <FaBullhorn /> },
  { name: "Brand Partnership & Alliances", icon: <FaHandshake /> },
  { name: "Compliance Associate", icon: <FaBalanceScale /> },
  { name: " Recruitment Marketing Executive", icon: <FaBullhorn /> },
  { name: "Finance Executive", icon: <FaFileInvoiceDollar /> },
  { name: "HR (Campus Hiring Team)", icon: <FaUsers /> },
  { name: "HR Operations Associate", icon: <FaUserTie /> },
  { name: "Learning and Development Coordinator", icon: <FaBookOpen /> },
  { name: "Management Trainee - Research Associate", icon: <FaSearch /> },
  { name: "Management Trainee - Project Management", icon: <FaProjectDiagram /> },
  { name: "Management Trainee - Product Management", icon: <FaProjectDiagram /> },
  { name: "MT - Business Process Re-Engineering", icon: <FaCogs /> },
  { name: "Project Accounting Admin", icon: <FaFileInvoiceDollar /> },
  { name: "Trainee - Logistics and Supply Chain Management", icon: <FaShippingFast /> },
];

// ====== COMPONENTS ====== //

const ProfileItem = ({ icon, name, isMBA = false }) => {
  return (
    <div
      className={`flex items-center gap-6 p-4 rounded-lg shadow-sm transition duration-300
        ${isMBA
          ? "bg-[#1E3A8A] hover:bg-white/5 flex-row-reverse text-right"
          : "bg-white/5 hover:bg-[#1E3A8A] text-left"}`
      }
    >
      {/* Outer Circle */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-dotted border-[#FFB800] shrink-0">
        {/* Inner Circle */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E293B] text-[#FFB800] text-xl">
          {React.cloneElement(icon, { size: 20 })}
        </div>
      </div>

      {/* Text */}
      <div className="text-white font-medium text-lg">
        {name}
      </div>
    </div>
  );
};


  const Heading = ({ children }) => (
  <div className="mb-4 text-center">
    <h2 className="text-xl md:text-3xl font-extrabold text-white uppercase inline-block relative">
      {children}
      <span className="block h-1 w-16 bg-gradient-to-r from-[#FFC80E] to-[#FFB800] mt-2 mx-auto rounded"></span>
    </h2>
  </div>
);


// ====== MAIN COMPONENT ====== //

const PlacementProfiles = () => {
  return (
    <div className="min-h-screen py-4 px-4 sm:px-6 md:px-16">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFC80E] to-[#FFB800] mb-10">
        Profiles We Train For
      </h1>

      {/* Engineering Section */}
      <section className="mb-12">
        <Heading>Engineering</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {engineeringProfiles.map((profile, idx) => (
            <ProfileItem key={idx} icon={profile.icon} name={profile.name} />
          ))}
        </div>
      </section>

      {/* MBA Section */}
      <section>
        <Heading>MBA</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {mbaProfiles.map((profile, idx) => (
            <ProfileItem key={idx} icon={profile.icon} name={profile.name} isMBA />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlacementProfiles;
