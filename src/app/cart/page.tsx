import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h2 className="text-[22px] font-medium pl-3 mb-6">Bag</h2>

          {/* Item 1 */}
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-orange-200 rounded">
                <Image
                  src="/images/fir.avif"
                  alt="shoes and sandles collection"
                  width={96}
                  height={96}
                  className="object-cover rounded"
                />
              </div>
              <div>
                <h3 className="text-[16px] font-normal text-[#272343] mb-3">
                 Shoes and Sandles Collection
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  Tender Tootsies /peach
                  
                </p>
                <div className="flex space-x-12">
                  <p className="text-[15px] font-normal text-[#757575]">
                    Size: Medium 
                  </p>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Quantity: 1
                  </p>
                </div>
                <div className="flex gap-3 mt-3">
                  <CiHeart />
                  <RiDeleteBin6Line />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <p className="text-[16px] font-normal text-[#111111]">MRP:</p>
              <p className="text-[16px] font-normal text-[#111111]">$80</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-gray-300 rounded">
                <Image
                  src="/images/marron.jpg"
                  alt="bags"
                  width={96}
                  height={96}
                  className="object-cover rounded"
                />
              </div>
              <div>
                <h3 className="text-[16px] font-normal text-[#272343] mb-3">
                   Bags
                </h3>
                <p className="text-[15px] font-normal text-[#757575] mb-1">
                Louis Vuitton/Maroon
                </p>
                <div className="flex space-x-12">
                  <p className="text-[15px] font-normal text-[#757575]">
                    Size: L
                  </p>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Quantity: 1
                  </p>
                </div>
                <div className="flex gap-3 mt-3">
                  <CiHeart />
                  <RiDeleteBin6Line />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <p className="text-[16px] font-normal text-[#111111]">MRP:</p>
              <p className="text-[16px] font-normal text-[#111111]">$99</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg font-semibold">$179.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg">Estimated Delivery & Handling</p>
              <p className="text-lg font-semibold text-green-500">Free</p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-6">
              <p className="text-xl font-bold">Total</p>
              <p className="text-xl font-bold">$179.00</p>
            </div>
            <button className="w-[334.67px] h-[60px] rounded-[30px] text-white bg-[#029FAE]">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
