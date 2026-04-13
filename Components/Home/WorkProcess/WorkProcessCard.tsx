import React from "react";

type WorkProcessCardProps = {
  number: string;
  title: string;
  isExtraClass?: boolean;
};

const WorkProcessCard = ({
  number,
  title,
  isExtraClass,
}: WorkProcessCardProps) => {
  return (
    <div
      className={`flex items-center gap-3 ${isExtraClass ? "lg:border-r-2 lg:border-gray-300" : ""}`}
    >
      <div className="text-4xl md:text-6xl lg:text-7xl font-bold mr-5 leading-none text-amber-600">
        {number}
      </div>
      <div>
        <h1 className="text-[#252525] font-semibold text-xl">{title}</h1>
        <p className="lg:w-[90%] mt-3 leading-8 font-medium text-gray-500 ">ished fact that a reader will be distrol acted bioiiy desig the.ished fact that a reader will be distrol.</p>
      </div>
    </div>
  );
};

export default WorkProcessCard;
