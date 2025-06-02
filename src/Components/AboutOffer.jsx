import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import corporateIcon1 from '/About/reading-group.png';
import corporateIcon2 from '/About/hr-a.png';
import corporateIcon3 from '/About/trophy-a.png';
import corporateIcon4 from '/About/leadership.png';
import corporateIcon5 from '/About/owner.png';
import corporateIcon6 from '../assets/inclusive.avif';
 
function CollegeCorporateOffers() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);
 
  const collegeOffers = [
    {
      icon: <img src="About/training-program.png" alt="Training Icon" className="w-16 h-16" />,
      description: 'Training Need Analysis and Competence Mapping',
    },
    {
      icon: <img src="About/adaptability.png" alt="Customized Program Icon" className="w-16 h-16" />,
      description: 'Customized Industry Ready Programmes',
    },
    {
      icon: <img src="About/lecture.png" alt="Guest Icon" className="w-16 h-16" />,
      description: 'Industry Guest Lectures',
    },
    {
      icon: <img src="About/recruitment.png" alt="Recruiter Icon" className="w-16 h-16" />,
      description: 'Empanelment with Industry: 450+ recruiters',
    },
    {
      icon: <img src="About/job-opportunities.png" alt="Job Icon" className="w-16 h-16" />,
      description: 'Job opportunities for Final Year Students',
    },
    {
      icon: <img src="About/project.png" alt="Last Mile Icon" className="w-16 h-16" />,
      description: 'Last mile programmes',
    },
  ];
 
  const corporateOffers = [
    {
      icon: <img src={corporateIcon1} alt="Trained Students Icon" className="w-16 h-16" />,
      description: 'Provide a Pool of trained students',
    },
    {
      icon: <img src={corporateIcon2} alt="HR Summits Icon" className="w-16 h-16" />,
      description: 'Curated HR Summits',
    },
    {
      icon: <img src={corporateIcon3} alt="HR Awards Icon" className="w-16 h-16" />,
      description: 'HR Excellence Awards',
    },
    {
      icon: <img src={corporateIcon4} alt="PAN India Talent Icon" className="w-16 h-16" />,
      description: 'Talent from PAN India colleges ',
    },
    {
      icon: <img src={corporateIcon5} alt="Corporate Trainings Icon" className="w-16 h-16" />,
      description: 'Corporate Trainings',
    },
    {
      icon: <img src={corporateIcon6} alt="Brand Icon" className="w-16 h-16" />,
      description: 'Brand Positioning across Academia',
    },
  ];
 
  const Section = ({ title, items }) => (
    <div className="mb-12" data-aos="fade-up">
      <h2 className="text-[#FFC80E] text-2xl md:text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center space-y-3 bg-[#022e61] rounded-xl p-4 shadow-lg border border-white w-full max-w-[200px] h-[180px] hover:scale-105 transition duration-300"
          >
            {item.icon}
            <p className="text-gray-100 text-sm md:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
 
  return (
    <div className="bg-[#01224F] py-10 px-4 md:px-8 lg:px-20">
      <Section title="College Offers" items={collegeOffers} />
      <Section title="Corporate Offers" items={corporateOffers} />
    </div>
  );
}
 
export default CollegeCorporateOffers;
 
 