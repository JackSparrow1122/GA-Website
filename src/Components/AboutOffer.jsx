import React, { useEffect, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 📦 College Offer Icons
import trainingIcon from '/About/training-program.png';
import adaptIcon from '/About/adaptability.png';
import guestIcon from '/About/lecture.png';
import empanelIcon from '/About/recruitment.png';
import jobIcon from '/About/job-opportunities.png';
import lastMileIcon from '/About/project.png';

// 📦 Corporate Offer Icons
import corporateIcon1 from '/About/reading-group.png';
import corporateIcon2 from '/About/hr-a.png';
import corporateIcon3 from '/About/trophy-a.png';
import corporateIcon4 from '/About/leadership.png';
import corporateIcon5 from '/About/owner.png';
import corporateIcon6 from '../assets/inclusive.avif';

const OfferCard = React.memo(({ icon, description }) => (
  <div
    className="flex flex-col items-center text-center space-y-3 bg-[#022e61] rounded-xl p-4 shadow-lg border border-white w-full max-w-[200px] h-[180px] hover:scale-105 transition duration-300"
  >
    <img src={icon} alt="icon" className="w-16 h-16" loading="lazy" />
    <p className="text-gray-100 text-sm md:text-base">{description}</p>
  </div>
));

const Section = React.memo(({ title, items }) => (
  <div className="mb-12" data-aos="fade-up">
    <h2 className="text-[#FFC80E] text-2xl md:text-3xl font-bold text-center mb-8">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
      {items.map((item, i) => (
        <OfferCard key={i} icon={item.icon} description={item.description} />
      ))}
    </div>
  </div>
));

function CollegeCorporateOffers() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const collegeOffers = useMemo(() => [
    { icon: trainingIcon, description: 'Training Need Analysis and Competence Mapping' },
    { icon: adaptIcon, description: 'Customized Industry Ready Programmes' },
    { icon: guestIcon, description: 'Industry Guest Lectures' },
    { icon: empanelIcon, description: 'Empanelment with Industry: 450+ recruiters' },
    { icon: jobIcon, description: 'Job opportunities for Final Year Students' },
    { icon: lastMileIcon, description: 'Last mile programmes' },
  ], []);

  const corporateOffers = useMemo(() => [
    { icon: corporateIcon1, description: 'Provide a Pool of trained students' },
    { icon: corporateIcon2, description: 'Curated HR Summits' },
    { icon: corporateIcon3, description: 'HR Excellence Awards' },
    { icon: corporateIcon4, description: 'Talent from PAN India colleges' },
    { icon: corporateIcon5, description: 'Corporate Trainings' },
    { icon: corporateIcon6, description: 'Brand Positioning across Academia' },
  ], []);

  return (
    <div className="bg-[#01224F] py-10 px-4 md:px-8 lg:px-20">
      <Section title="College Offers" items={collegeOffers} />
      <Section title="Corporate Offers" items={corporateOffers} />
    </div>
  );
}

export default CollegeCorporateOffers;
