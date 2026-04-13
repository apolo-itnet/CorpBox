'use client'

import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const Project_Images = [
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "/images/p4.jpg",
  "/images/p5.jpg",
  "/images/p6.jpg",
];

const Project = () => {
  return (
    <div className="pt-16 pb-16 bg-black">
      <h2 className="text-orange-500 text-lg text-center font-medium tracking-widest">
        Portfolio
      </h2>
      <h1 className="text-white text-3xl md:text-5xl text-center font-bold mt-6 mb-16">
        Our Latest Work digital <br /> design and reality
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-5/6 mx-auto">
        {Project_Images.map((image, index) => {
          return <div key={index}>
            <Tilt>
              <Image src={image} alt={`Project ${index + 1}`} width={450} height={550} className="w-full h-auto object-cover rounded-md" />
            </Tilt>
          </div>
        })}
      </div>
    </div>
  );
};

export default Project;
