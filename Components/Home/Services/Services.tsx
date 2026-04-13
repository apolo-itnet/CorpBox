import Image from "next/image";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-20 pb-20 relative">
      {/* Side Image Background */}
      <Image
        src={"/images/service_bg.png"}
        alt="Services Background"
        width={300}
        height={300}
        className="absolute right-0"
      />
      <div className="w-[80%] mx-auto">
        <h1 className="text-xl font-bold text-orange-300 py-6">Our Services</h1>
        <p className="text-5xl font-bold text-white leading-snug">
          Crafting your digital <br />
          story with passion
        </p>
        <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          <div>
            <ServiceCard image="/images/s1.png" icon="/images/sicon1.png" />
          </div>
          <div>
            <ServiceCard image="/images/s2.png" icon="/images/sicon2.png" />
          </div>
          <div>
            <ServiceCard image="/images/s3.png" icon="/images/sicon3.png" />
          </div>
          <div>
            <ServiceCard image="/images/s4.png" icon="/images/sicon4.png" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
