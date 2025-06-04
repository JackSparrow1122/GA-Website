import React from 'react';

const testimonials = [
  {
    review: "We recruited 145 fresh engineers batch 2022-23 with the support of Gryphon and got reliable source of talent for our company. Team Gryphon is doing a fabulous job.",
    name: "Mr. Rahul Bagale",
    rating: "★★★★★",
    companyLogo: "Logos/1.jpg",
    companyName: "Vice President Human Resources Ultra Corpotech Pvt. Ltd.",
  },
  {
    review: "Their commitment to nurturing and grooming exceptional talent is truly commendable. The graduates we've recruited from Gryphon Academy have consistently proven to be skilled, adaptable, and well-prepared for the demands of the industry.",
    name: "Cdr. Pratap Pawar",
    rating: "★★★★★",
    companyLogo: "Logos/4.jpg",
    companyName: "Director HR & IT Gs lab",
  },
  {
    review: "The talent pool Gryphon offers is a testament to their dedication in producing industry-ready graduates. We thank Gryphon Academy for consistently providing us with such outstanding talent.",
    name: "Mr. Suvarnanidhi Rao",
    rating: "★★★★★",
    companyLogo: "Logos/23.jpg",
    companyName: "Campus Lead - Indian Sub Continent Philips India",
  },
  {
    review: "Gryphon Academy trained students are well-prepared for the demands of the engineering industry, with a strong foundation in both technical and professional skills.",
    name: "Mr. Sushant Kumar",
    rating: "★★★★★",
    companyLogo: "Logos/40.jpg",
    companyName: "Talent Acquisition Manager, Brillio",
  },
  {
    review: "Our experience with Gryphon Academy has been nothing short of exceptional. I appreciate the effort they put into producing graduates. They have made our recruitment process smoother and more effective.",
    name: "Dr. Sunaina Dutta",
    rating: "★★★★★",
    companyLogo: "Logos/5.jpg",
    companyName: "Head HR, Hettich India",
  },
  {
    review: "We've had the opportunity to undergo Gryphon Academy's training process, extending its reach to candidates from various regions. Gryphon's high-quality training program has undeniably enhanced student skills.",
    name: "Mr. Shipra Pandit",
    rating: "★★★★★",
    companyLogo: "Logos/12.jpg",
    companyName: "Director - HR, Juspay",
  },
    {
    review: "Gryphon Academy’s ability to unite academi and industry on such a scale underscores their dedication to creating opportunities for growth and collaboration, beneting both students and recruiters alike. ",
    name: "Ms. Aanchal Tandon",
    rating: "★★★★★",
    companyLogo: "Logos/14.jpg",
    companyName: " Manager HR HCLTech",
  },
     {
    review: "Highly impressed with Gryphon Academy's training modules to create industry ready force. All the best.",
    name: "Mr. Urvish Pandey",
    rating: "★★★★★",
    companyLogo: "Logos/22.jpg",
    companyName: "Manager HR",
  },
  {
    review: "The dedication and commitment displayed by Team Gryphon is unwavering. The talent they prepare is ready for the industry",
    name: "Mr. Supreet Kakroo ",
    rating: "★★★★★",
    companyLogo: "Logos/sas.png",
    companyName: "Human Resources Specialist SaS",
  },
  {
    review: " Partnering with Gryphon Academy has been game-changing. The candidates we’ve hired are not just well-trained but also industry-ready from day one. Their understanding of business dynamics and technical expertise reects their commitment to excellence.",
    name: "Mr. Sanjay D Costa",
    rating: "★★★★★",
    companyLogo: "Logos/princ.png",
    companyName: "Human Resources Specialist SaS",
  },
  {
    review: "The Synergy Sphere 2024 event showcased Gryphon Academy’s dedication to bridging academia and industry. Bringing together over 100 HR leaders on one platform was a masterstroke that facilitated meaningful collaborations and highlighted Gryphon's role as a talent powerhouse.",
    name: "Mr. Ram Honap",
    rating: "★★★★★",
    companyLogo: "Logos/5.avif",
    companyName: "National Head HR Coca Cola",
  },
   {
    review: "The training modules at Gryphon Academy are tailored to meet the evolving needs of the industry. This foresight and adaptability are why their students excel across diverse domains, making them a valuable addition to any organization.",
    name: "Mr. Avinash Talreja",
    rating: "★★★★★",
    companyLogo: "Logos/555.avif",
    companyName: "Deputy General Manager Human Resource | Schneider ",
  },
  {
    review: "We’ve consistently recruited top talent from Gryphon. They train students as per the industry needs & requirements transforming them into polished & professional candidates who come with a deep understanding of industry demands",
    name: " Mr. Piyush Naik",
    rating: "★★★★★",
    companyLogo: "Logos/omnicom.png",
    companyName: "Associate Director - Talent Insights, Sourcing & Early Careers OmniCom Global Solutions",
  },
   {
    review: "The hiring experience with Gryphon Academy has been seamless and rewarding. Their knack for nderstanding our specic talent needs and delivering candidates who are a perfect t is unparalleled in the industry",
    name: "Ms. Anupama Pillai",
    rating: "★★★★★",
    companyLogo: "Logos/hclsof.png",
    companyName: "Global TA & Country HR Head HCLSoftware",
  },
  {
    review: "Synergy Sphere 2024 was a testament to Gryphon Academy’s innovative approach to connecting academia with corporate needs. The platform not only facilitated networking but also strengthened our trust in Gryphon as a reliable source of exceptional talent.",
    name: "Mr. Shirish Bavdekar",
    rating: "★★★★★",
    companyLogo: "Logos/11.jpg",
    companyName: "Global Talent Sourcing Leader Dassault Systemes ",
  },
  {
    review: "Gryphon's focus on reskilling and adapting to industry trends ensures their candidates are future-ready. Their comprehensive training programs consistently produce standout professionals who bring value to the organizations out there",
    name: "Mr. Diwesh Sahay",
    rating: "★★★★★",
    companyLogo: "Logos/511.png",
    companyName: "General Manager Human Resources RR Parkon",
  },
  {
    review: "The candidates we’ve recruited from Gryphon Academy bring a rare blend of technical prociency and soft skills. Their readiness to adapt and excel in dynamic environments is a reection of the robust training they receive at through the Industry Readiness Programme.",
    name: "Mr. Manroop Singh",
    rating: "★★★★★",
    companyLogo: "Logos/37.avif",
    companyName: "Head TA Operations & University Relations Xperi inc",
  },
   {
    review: "Gryphon Academy has been a reliable source of top-tier talent for every organization. The graduates they provide not only excel in their technical abilities but also possess strong soft skills for the corporate world.",
    name: "Mr. Harsh Raghubanshi",
    rating: "★★★★★",
    companyLogo: "Logos/35.jpg",
    companyName: "Assistant Manager, Grasim Industries",
  },
  
];

const Testimonials = () => {
  return (
    <section className="bg-[#01224F] py-4 w-full overflow-hidden">
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <h2 className="text-3xl md:text-4xl text-[#FFC80E] text-center font-bold mb-10">Recruiter's Testimonials</h2>

      <div className="relative overflow-hidden w-full">
        <div
          className="flex w-max animate-slide gap-6"
          style={{
            animation: 'slide 60s linear infinite',
          }}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="w-[300px] flex-shrink-0 bg-[#1e3a8a] rounded-xl p-6 flex flex-col justify-between text-white shadow-lg h-[380px]"
            >
              <p className="text-sm italic">"{item.review}"</p>

              <div className=" text-center">
                <p className="text-yellow-400 text-lg mb-2">{item.rating}</p>
                <p className="font-bold text-base">{item.name}</p>
                <p className="text-sm">{item.companyName}</p>
                <div className="mt-2 flex justify-center">
                  <img src={item.companyLogo} alt={item.companyName} className="h-[50px] object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
