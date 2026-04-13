import React from "react";
import WorkProcessCard from "./WorkProcessCard";

const WorkProcess = () => {
  return (
    <div className="pt-24 pb-24 bg-white">
      <h2 className="text-[#b69974] text-lg text-center font-medium tracking-widest">
        Work Process
      </h2>
      <h1 className="text-3xl md:text-5xl mt-6 mb-16
       font-bold text-center">
        Transforming ideas into <br /> digital reality
      </h1>
      {/* Work Process Steps */}
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-14 ">
        <WorkProcessCard
          number="01"
          title="Creative Craze"
          isExtraClass={true}
        />
        <WorkProcessCard number="02" title="Brand Boost" />
        <WorkProcessCard number="03" title="Media Minds" isExtraClass={true} />
        <WorkProcessCard number="04" title="Launch Luminary" />
      </div>
    </div>
  );
};

export default WorkProcess;
