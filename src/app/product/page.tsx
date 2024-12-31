import React from 'react';
import Image from 'next/image';

const Productpage = () => {
  const products = [
    { id: 1, label: 'New', title: 'Shoes and Sandles', price: '$20', image: '/images/peach.avif' },
    { id: 2, label: 'Sales', title: 'Shoes and Sandles', price: '$20', oldPrice: '$30', image: '/images/variety.jpeg' },
    { id: 3, title: 'Shoes and Sandles', price: '$20', image: '/images/browny.jpg' },
    { id: 4, title: 'Shoes and Sandles', price: '$20', image: '/images/color.jpg' },
    { id: 5, label: 'New', title: 'Shoes and Sandles', price: '$20', image: '/images/tail.jpg' },
    { id: 6, label: 'Sales', title: 'Shoes and Sandles', price: '$20', oldPrice: '$30', image: '/images/sandle.webp' },
    { id: 7, title: 'Shoes and Sandles', price: '$20', image: '/images/sneakers.webp' },
    { id: 8, title: 'Bags', price: '$20', image: '/images/purbag.jpg' },
    { id: 9, label: 'New', title: 'Bags', price: '$20', image: '/images/dark.jpg' },
    { id: 10, label: 'Sales', title: 'Bags', price: '$20', oldPrice: '$30', image: '/images/decent.jpeg' },
    { id: 11, title: 'Shoes and Sandles', price: '$20', image: '/images/nike.avif' },
    { id: 12, title: 'Shoes and Sandles', price: '$20', image: '/images/black.jpg' },
  ];

  return (
    <section id="product">
      <h1 className="text-[#272343] font-sans text-[32px] mt-10 ml-11 font-semibold">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ml-11 mr-11 mt-12 mb-20">
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
                width={400}
                height={256}
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
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                  🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="w-full h-auto bg-[#F0F2F3]">
        <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-6">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-[50px] mt-4">
            Or Subscribe to the Newsletter
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-start mt-6 md:mt-12">
              <span className="text-[#8F9499] text-sm md:text-[16px] font-semibold mb-2 ml-3">
                Email address...
              </span>
              <div className="w-full md:w-[643px] h-[2px] bg-black"></div>
            </div>
            <div className="flex flex-col items-center mt-6 md:mt-12">
              <span className="text-sm md:text-[16px] font-normal mb-2">
                SUBMIT
              </span>
              <div className="w-[91px] h-[2px] bg-black"></div>
            </div>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-center">
            Follow Products and Discounts on Instagram
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-12">
            {[
              '/images/mensshoes.jpg',
              '/images/redddddd.avif',
              '/images/two.jpg',
              '/images/product4.jpg',
              '/images/peachbag.jpg',
              '/images/furr.jpg',
            ].map((src, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`Instagram product ${index + 1}`}
                  width={186}
                  height={186}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productpage;
