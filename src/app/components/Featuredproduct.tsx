import React from 'react';
import Image from 'next/image';
import { CiShoppingCart } from "react-icons/ci";


const FeaturedProduct = () => {
  const products = [
    { id: 1, label: 'New', title: 'Boots', price: '$60', image: '/images/grey.jpg' },
    { id: 2, label: 'Sales', title: 'Women Sandles', price: '$60', oldPrice: '$70', image: '/images/sober.jpg' },
    { id: 3, title: 'Bags', price: '$50', image: '/images/pinkoo.jpg' },
    { id: 4, title: 'Baby Baba shoes', price: '$30', image: '/images/child.jpg' },
  ];

  return (
    <div>
      {/* Featured Products */}
      <section>
        <div className="text-[#272343] text-[28px] sm:text-[32px] lg:text-[35px] font-sans font-semibold mt-3 sm:mt-4 lg:mt-6 mx-4 sm:mx-12 lg:mx-10">
          <h1>Featured Products</h1>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                {product.label && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.label}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-gray-700 font-semibold text-lg">{product.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <span className="text-lg font-bold">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm ml-2">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button className="bg-[#029FAE] p-2 rounded-full hover:bg-gray-300">
                  <CiShoppingCart size={40} color='white'/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedProduct;
