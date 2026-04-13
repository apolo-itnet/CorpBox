import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center flex-col">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Text content */}
        <div>
          {/* Title */}
          <h1 className="text-7xl lg:text-7.5xl font-bold text-white mb-2 leading-tight">
            Crafting your digital story with passion
          </h1>
          {/* Description */}
          <p className="ml-0 md:ml-12 md:mt-10 text-sm md:text-base font-semibold text-white leading-7">
            Payment solutions enable businesses to accept payments Payment
            solutions enable businesses to accept payments from customers
            conveniently securely from customers conveniently and securely.
          </p>
          {/* Call to Action */}
          <button className="ml-0 md:ml-12 md:mt-8 px-8 py-3 border-2 border-orange-500 text-white font-semibold rounded-full hover:bg-white hover:text-stone-800 transition duration-500 cursor-pointer active:scale-50">
            Discover More
          </button>
        </div>
        {/* Image content */}
        <div className="absolute top-0 right-47 hidden lg:block ">
          <Image src="/images/hero.png" alt="Hero Image" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
