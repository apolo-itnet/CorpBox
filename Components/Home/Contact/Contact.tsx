import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] lg:w*-[80%] items-center mx-auto mt-16">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-gray-500 rounded-xl p-6">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            className="border  border-gray-200 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white"
          />
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-200 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white placeholder:border-gray-200 text-white"
          />
          {/* Message Input */}
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-200 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white placeholder:border-gray-200 text-white"
          />
          {/* Message Input */}
          <textarea
            placeholder="Message"
            className="border border-gray-200 w-full px-6 py-3 rounded-lg mb-6 placeholder:text-white placeholder:border-gray-200 text-white"
            rows={4}
          />
          {/* Submit Button */}
          <button className="w-full bg-orange-300 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full cursor-pointer transition duration-300 uppercase">
            Send Message
          </button>
        </div>
        {/* Contact Card */}
        <div className="lg:col-span-1">
          {/* Contact Number */}
          <div className=" p-6 mt-4 mb-4 bg-gray-500 flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center flex-col">
              <FaArrowRight className="text-white" />
            </div>
            <div>
              <h1 className="text-white text-md font-semibold">Call Now</h1>
              <h2 className="text-white font-bold text-lg">+880 1823 456789</h2>
            </div>
          </div>
          {/* Email */}
          <div className=" p-6 mt-4 mb-4 bg-gray-500 flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center flex-col">
              <FaArrowRight className="text-white" />
            </div>
            <div>
              <h1 className="text-white text-md font-semibold">Email</h1>
              <h2 className="text-white font-bold text-lg">example@email.com</h2>
            </div>
          </div>
          {/* Address */}
          <div className=" p-6 mt-4 mb-4 bg-gray-500 flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center flex-col">
              <FaArrowRight className="text-white" />
            </div>
            <div>
              <h1 className="text-white text-md font-semibold">Address</h1>
              <h2 className="text-white font-bold text-lg">123 Main Street, City, Country</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
