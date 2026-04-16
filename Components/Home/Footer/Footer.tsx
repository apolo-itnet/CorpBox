import Logo from "@/Components/Helper/Logo";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st Column */}
        <div>
          <Logo />
          <p className="mt-6 text-sm text-gray-300 leading-6 font-semibold">
            Conditions Terms of Use Ours feturesin Services ew Guests LisitThe
            Team List Guests LisitThe Team List
          </p>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mt-6">
            {/* Facebook */}
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-orange-500 transition-all duration-300">
              <FaFacebookF className="w-6 h-6 text-white" />
            </div>
            {/* Youtube */}
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-orange-500 transition-all duration-300">
              <FaYoutube className="w-6 h-6 text-white" />
            </div>
            {/* Instagram */}
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-orange-500 transition-all duration-300">
              <FaInstagram className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        {/* 2nd Column */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white">Address</h1>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
