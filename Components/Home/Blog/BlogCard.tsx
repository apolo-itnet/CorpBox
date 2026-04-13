import Image from "next/image";
import React from "react";
import { BiCalendar } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa6";

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
            <p className="text-gray-600 font-semibold text-sm">April 15, 2023</p>
          </div>
        </div>
        <h3 className="text-md font-bold mt-4">{title}</h3>
      </div>
    </div>
  );
};

export default BlogCard;
