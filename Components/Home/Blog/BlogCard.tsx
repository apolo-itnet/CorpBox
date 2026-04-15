import Image from "next/image";
import React from "react";
import { BiCalendar } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa6";
import { FiArrowDownRight } from "react-icons/fi";

type Props = {
  image: string;
  title: string;
};

const BlogCard = ({ image, title }: Props) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      {/* Blog Image */}
      <Image src={image} alt={title} width={500} height={300} />
      {/* Blog Title */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          {/* Category */}
          <div className="flex items-center space-x-3">
            <FaRegFolderOpen className="text-red-600 w-6 h-6" />
            <p className="text-gray-600 font-semibold text-sm">Category</p>
          </div>
          {/* Date */}
          <div className="flex items-center space-x-3">
            <BiCalendar className="text-red-600 w-6 h-6" />
            <p className="text-gray-600 font-semibold text-sm">
              April 15, 2023
            </p>
          </div>
        </div>
        {/* Blog Title */}
        <h1 className="text-lg font-bold mt-4 text-gray-900 hover:text-orange-500 transition-all duration-300 cursor-pointer">
          {title}
        </h1>
        {/* Read More Button */}
        <button className="relative inline-block mt-8 cursor-pointer group">
          {/* Button Text */}
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[2px] uppercase text-gray-800">
            Read More
            {/* Arrow Icon */}
            <FiArrowDownRight className="text-orange-500 text-xl transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          {/* Underline */}
          <span className="block w-full h-px group-hover:w-0 transition-all duration-300 bg-orange-500 mt-2"></span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
