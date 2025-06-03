import React from 'react';
import college1 from '/public/placement-bg/Collegelogo1.avif';
import college2 from '/public/placement-bg/College logo 2 1.avif';
import college3 from '/public/placement-bg/College logo 3 1.avif';
import college4 from '/public/placement-bg/College logo 4 1.avif';
import college5 from '/public/Clgimage/5-2.avif';
import college6 from '/public/placement-bg/College logo 7.avif';
import college7 from '/public/Clgimage/iicmrnew.avif';
import college8 from '/public/Clgimage/dietnew.avif';
import college9 from '/public/Clgimage/sce.avif';
import college10 from '/public/Clgimage/pbs.avif';
import college11 from '/public/Clgimage/jjm.avif';
import college12 from '/public/Clgimage/jspm.avif';
import college13 from '/public/Clgimage/13-1.avif';
import college14 from '/public/Clgimage/sppu.avif';
import college15 from '/public/Clgimage/sbp.avif';
import college16 from '/public/Clgimage/16-1.avif';
import college17 from '/public/placement-bg/College logo 5 1.avif';
import college18 from '/public/placement-bg/agnel.avif';
import college19 from '/public/placement-bg/bitm.avif';
import college20 from '/public/placement-bg/bidar.avif';
import college21 from '/public/placement-bg/dkte.avif';
import college22 from '/public/placement-bg/lexicon.avif';
import college23 from '/public/placement-bg/asm.avif';
import college24 from '/public/placement-bg/ifeel.avif';
import college25 from '/public/placement-bg/ies.avif';
import college26 from '/public/placement-bg/isbr.avif';
import college27 from '/public/placement-bg/lexicon.avif';
import college28 from '/public/placement-bg/dnyan.avif';
import college29 from '/public/placement-bg/mgi.avif';
import college30 from '/public/placement-bg/vsit.avif';

const PartneredCollege = () => {
  const colleges = [
    { name: 'college Image', imageUrl: college1 },
    { name: 'college Image', imageUrl: college2 },
    { name: 'college Image', imageUrl: college3 },
    { name: 'college Image', imageUrl: college4 },
    { name: 'college Image', imageUrl: college5 },
    { name: 'college Image', imageUrl: college6 },
    { name: 'college Image', imageUrl: college7 },
    { name: 'college Image', imageUrl: college8 },
    { name: 'college Image', imageUrl: college9 },
    { name: 'college Image', imageUrl: college10 },
    { name: 'college Image', imageUrl: college11 },
    { name: 'college Image', imageUrl: college12 },
    { name: 'college Image', imageUrl: college13 },
    { name: 'college Image', imageUrl: college14 },
    { name: 'college Image', imageUrl: college15 },
    { name: 'college Image', imageUrl: college16 },
    { name: 'college Image', imageUrl: college17 },
    { name: 'college Image', imageUrl: college18 },
    { name: 'college Image', imageUrl: college19 },
    { name: 'college Image', imageUrl: college20 },
    { name: 'college Image', imageUrl: college21 },
    { name: 'college Image', imageUrl: college22 },
    { name: 'college Image', imageUrl: college23 },
    { name: 'college Image', imageUrl: college24 },
    { name: 'college Image', imageUrl: college25 },
    { name: 'college Image', imageUrl: college26 },
    { name: 'college Image', imageUrl: college27 },
    { name: 'college Image', imageUrl: college28 },
    { name: 'college Image', imageUrl: college29 },
    { name: 'college Image', imageUrl: college30 },
  ];

  return (
    <div className="bg-[#01224F] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[#ffc700] text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          Partnered Colleges
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 place-items-center">
          {colleges.map((college, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36"
            >
              <img
                src={college.imageUrl}
                alt={college.name}
                className="h-full object-contain"
              />
            </div>  
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartneredCollege;
