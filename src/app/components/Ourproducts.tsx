import React from 'react';
import Image from 'next/image';
import { CiShoppingCart } from "react-icons/ci";


const OurProducts = () => {
  const products2 = [
    { id: 1, title: "Shoes and sandles ", price: "$70", isNew: true, image: "/images/bothy.jpg" },
    { id: 2, title: "Shoes and sandles", price: "$60", oldPrice: "$70", isSale: true, image: "/images/silver.webp" },
    { id: 3, title: "Shoes and sandles", price: "$50", image: "/images/joggers.jpg" },
    { id: 4, title: "Shoes and sandles", price: "$50", image: "/images/nyc.webp" },
    { id: 5, title: "Bags", price: "$40", isNew: true, image: "/images/water.webp" }, 
    { id: 6, title: "Bags", price: "$30", oldPrice: "$40", isSale: true, image: "/images/schoolbag.jpg" },
    { id: 7, title: "Bags", price: "$40", image: "/images/dark pink.jpg" },
    { id: 8, title: "Bags", price: "$40", image: "/images/colorbags.webp" },
  ];

  return (
    <div>
      {/* Product Section */}
      <section className="py-8 px-4">
        <h2 className="text-center text-2xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products2.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-sm px-2 py-1 rounded">
                    New
                  </span>
                )}
                {product.isSale && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                    Sale
                  </span>
                )}
              </div>
              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-gray-800 font-semibold text-lg">{product.title}</h3>
                <div className="flex items-center mt-2">
                  <p className="text-gray-800 font-bold">{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-sm text-gray-500 line-through ml-2">{product.oldPrice}</p>
                  )}
                </div>
              </div>
              {/* Add to Cart Button */}
              <div className="px-4 pb-4 flex justify-end">
                <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition">
                      <CiShoppingCart size={40} color='white'/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
