import React from 'react';
import Image from 'next/image';
import { FaTruck, FaCheck } from 'react-icons/fa';
import { IoFileTrayOutline } from 'react-icons/io5';
import { BiSolidLeaf } from 'react-icons/bi';

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center bg-white mt-16 lg:mt-32 px-6 gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 bg-[#007580] p-6 text-white flex flex-col justify-between">
          <h1 className="text-2xl lg:text-4xl font-bold pt-8">About Us - Softy Items</h1>
          <p className="text-lg lg:text-xl mt-4 mb-8">
          Comfort and Care  The condition of our shoes can reflect how much we care about our appearance
           and comfort Well maintained shoes can indicate a detail oriented and organized personality 
          while worn out shoes might suggest a more relaxed or carefree attitude and also give large Collection 
           of Bags also.
          </p>
          <button className="bg-[#2e6a6d] px-6 py-3 text-sm lg:text-base font-medium rounded hover:bg-[#256b6b]">
            View Collection
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/front.jpg"
            alt="bags"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="max-w-screen-xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">What Makes Our Brand Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Features */}
          <div className="bg-[#F9F9F9] p-6 text-center rounded shadow">
            <FaTruck className="text-[#007580] text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#007580]">Next day as standard</h3>
            <p className="text-sm mt-4 text-[#007580]">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 text-center rounded shadow">
            <FaCheck className="text-[#007580] text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#007580]">Made by true artisans</h3>
            <p className="text-sm mt-4 text-[#007580]">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 text-center rounded shadow">
            <IoFileTrayOutline className="text-[#007580] text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#007580]">Unbeatable prices</h3>
            <p className="text-sm mt-4 text-[#007580]">
              For our materials and quality, you won’t find better prices anywhere.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 text-center rounded shadow">
            <BiSolidLeaf className="text-[#007580] text-3xl mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#007580]">Recycled packaging</h3>
            <p className="text-sm mt-4 text-[#007580]">
              We use 100% recycled material to ensure our footprint is more manageable.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="max-w-screen-xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-semibold text-left mb-12">Our Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="text-center">
            <Image
              src="/images/3boot.jpg"
              alt="Product 1"
              width={400}
              height={256}
              className="object-cover w-full h-64 rounded-md"
            />
            <p className="pt-5 text-lg font-medium">The Popular boots </p>
            <p className="pt-2 text-md text-gray-600">$80.00</p>
          </div>
          {/* Product 2 */}
          <div className="text-center">
            <Image
              src="/images/hhghgdyd.jpg"
              alt="Product 2"
              width={400}
              height={256}
              className="object-cover w-full h-64 rounded-md"
            />
            <p className="pt-5 text-lg font-medium">Sandles</p>
            <p className="pt-2 text-md text-gray-600">$80.00</p>
          </div>
          {/* Product 3 */}
          <div className="text-center">
            <Image
              src="/images/schoolbag.jpg"
              alt="Product 3"
              width={400}
              height={256}
              className="object-cover w-full h-64 rounded-md"
            />
            <p className="pt-5 text-lg font-medium">School Bags</p>
            <p className="pt-2 text-md text-gray-600">$80.00</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
