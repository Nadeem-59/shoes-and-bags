import React from 'react';
import Image from 'next/image';

const TopCategories = () => {
  return (
    <div className="p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* mens branded shoes */}
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="relative" style={{ width: '424px', height: '424px' }}>
            <Image
              src="/images/classic.jpg"
              alt="classicshoes"
              fill
              className="object-cover rounded-lg"
              style={{ width: '100%', height: '100%' }} 
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h3 className="font-bold text-lg">Mens Shoes</h3>
            <p>3,584 Products</p>
          </div>
        </div>

        {/* handicraft bags */}
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="relative" style={{ width: '424px', height: '424px' }}>
            <Image
              src="/images/craft.jpg"
              alt="Handycraft Bags"
              fill
              className="object-cover rounded-lg"
              style={{ width: '100%', height: '100%' }} 
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h3 className="font-bold text-lg">Handycraft Bags</h3>
            <p>200 Products</p>
          </div>
        </div>

        {/* women section*/}
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="relative" style={{ width: '424px', height: '424px' }}>
            <Image
              src="/images/heel.jpg"
              alt="women section"
              fill
              className="object-contain rounded-lg"
              style={{ width: '100%', height: '100%' }} 
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
            <h3 className="font-bold text-lg">womens collection</h3>
            <p>1500 Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
