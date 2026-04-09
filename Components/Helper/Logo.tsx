import React from "react";
import { BiSolidBusiness } from "react-icons/bi";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center space-x-2 cursor-pointer group group-hover:text-white">
        <div className="w-10 h-10 bg-stone-100  rounded-full flex items-center justify-center flex-col relative group-hover:bg-orange-500 transition duration-300">
          <BiSolidBusiness className="w-6 h-6 text-orange-500 group-hover:text-white transition duration-300"/>
        </div>
        <h1 className="text-xl hidden sm:block md:text-2xl text-orange-500 font-bold group-hover:text-white transition duration-300">
          CorpBox
        </h1>
      </div>
    </div>
  );
};

export default Logo;
