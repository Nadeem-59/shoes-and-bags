import React from 'react';
import Image from 'next/image';
import Featuredproduct from '../components/Featuredproduct';
import Topcategories from '../components/Topcategories';
import Explore from '../components/Explore';
import Ourproducts from '../components/Ourproducts';

const Homepage = () => {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="w-full max-w-[1220px] h-auto min-h-[550px] bg-purple-300 mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side Content */}
          <div className="md:pl-7 max-w-md text-left space-y-4">
            <p className="text-sm text-black-600 uppercase tracking-wide">
              Welcome to Stylish Shoes and Bags
            </p>
            <h1 className="text-4xl font-bold text-purple-900 leading-snug">
              Best  Collection For Your Shoes and Bags.
            </h1>
            <button className="mt-6 px-8 py-3 bg-pink-500 text-white font-medium rounded-md shadow-md hover:bg-pink-600 transition-all">
              Shop Now <span className="ml-2">→</span>
            </button>
          </div>

          {/* Right Side Image */}
          <div className="mt-8 md:mt-0">
            <Image
              src="/images/hot.avif"
              alt="shoesbag"
              priority
              width={400}
              height={500}
              className="object-cover"
            />
          </div>
        </section>

        {/* Company Logos */}
        <section className="flex justify-center sm:gap-5 gap-20 mt-[50px]">
          <div>
            <Image
              src="/images/zapier.png"
              alt="zapier"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/images/pipedrive.png"
              alt="pipedrive"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/images/cibBank.png"
              alt="cibbank"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/images/z.png"
              alt="z"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/images/pandadoc.png"
              alt="pandadoc"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/images/burntToast.png"
              alt="burnttoast"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          <div >
            <Image
              src="/images/moz.png"
              alt="moz"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
        </section>

        <Featuredproduct />
        <Topcategories />
        <Explore/>
        <Ourproducts/>
      </main>
    </div>
  );
};

export default Homepage;
