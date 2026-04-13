import Image from "next/image";
import React from "react";
import AboutProgress from "./AboutProgress";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Content */}
        <div className="relative flex justify-center items-center">
          {/* Decorative Circle */}
          <Image
            src={"/images/a3.png"}
            alt="About Image"
            width={500}
            height={500}
            className="animate-spin [animation-duration:20s]"
          />
          {/* Main Image */}
          <Image
            src={"/images/a4.png"}
            alt="About Image"
            width={350}
            height={350}
            className="absolute top-0 left-0 right-0 bottom-0 m-auto rounded-lg"
          />
        </div>
        {/* Text Content */}
        <div>
          {/* subheading */}
          <p className="text-orange-300 font-medium py-4">About Us</p>
          {/* Main Heading */}
          <h1 className="text-6xl font-bold py-4">
            Innovative solutions for digital success
          </h1>
          {/* Description */}
          <p className="text-gray-600 text-lg leading-8 mt-6 ml-10">
            We are a team of passionate professionals dedicated to delivering
            innovative digital solutions that drive success for our clients. Our
            mission is to empower businesses with cutting-edge technology and
            creative strategies to thrive in the digital landscape. With a focus
            on excellence and customer satisfaction, we strive to create
            impactful digital experiences that exceed expectations and foster
            long-term partnerships.
          </p>
          {/* Progress Bars */}
          <AboutProgress/>
        </div>
      </div>
    </div>
  );
};

export default About;
