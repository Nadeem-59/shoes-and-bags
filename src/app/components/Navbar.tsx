import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";


const Navbar = () => {
  return (
    <div>
      <main>
        {/* <!-- top bar --> */}
        <div className="w-full flex flex-col sm:flex-row bg-[#272343]  items-center justify-between h-[55px] sm:h-[50px] text-gray-200">
          <div className="text-sm flex">
            <FaCheck />  Shoes  and Bags delivery charges OFF 30%
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="#" className="hover:underline">
              Eng
            </Link>
            <Link href="/faq" className="hover:underline">
              FAQs
            </Link>
            <div className="flex items-center space-x-1">
              <CiCircleAlert size={16} />
              <span className="hover:underline">Need Help</span>
            </div>
          </div>
        </div>

        {/* <!-- middle bar --> */}
        <div className="bg-red-300 md:px-56 shadow-md border-b border-gray-400 px-4 py-3">
          <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <div className="flex items-center space-x-2 size-10">
              <Image
                src="/images/shoes.png"
                alt="shoes logo"
                height={40}
                width={40}
              ></Image>
              <Image
                src="/images/bag.png"
                alt="shoes logo"
                height={40}
                width={40}
              ></Image>
              <span className="text-xl font-bold text-blue-500">Softy Items</span>
            </div>

            {/* cart */}
            <Link
              href="/cart"
              className="relative flex items-center h-[44px] w-[70px] sm:w-[100px] md:w-[120px] rounded-lg gap-1 bg-white shadow-md hover:shadow-lg"
            >
              <BsCartDash
                size={30}
                className="text-gray-700 sm:text-gray-500"
                style={{ paddingLeft: "10px" }}
              />
              <span className="hidden sm:block text-gray-700 md:text-base text-sm">
                Cart
              </span>
              <span className="absolute top-3 right-3 bg-yellow-600 text-white text-xs sm:text-[10px] md:text-xs rounded-full px-2">
                4
              </span>
            </Link>
          </div>
        </div>

      {/* <!-- Section 3: Menu and Contact --> */}
<div className="bg-white px-4 py-3">
  <div className="container mx-auto flex flex-wrap justify-between items-center">
    {/* Links */}
    <div className="flex flex-wrap justify-start space-x-4 font-thin text-gray-700">
      <Link href="/" className="hover:text-teal-600">
        Home
      </Link>
      <Link href="/product" className="hover:text-teal-600">
        Product
      </Link>
      <Link href="/contact" className="hover:text-teal-600">
        Contact
      </Link>
      <Link href="/about" className="hover:text-teal-600">
        About
      </Link>
    </div>
    {/* Contact */}
    <div className="text-blue-700 text-sm mt-4 md:mt-0">
      Contact: (808) 555-0111
    </div>
  </div>
</div>


      </main>
    </div>
  );
};

export default Navbar;
