import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { HiOutlineTrophy } from "react-icons/hi2";
import { MdOutlineVerified, MdOutlineSupportAgent } from "react-icons/md";

const Contactus = () => {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto mt-24 px-4 sm:px-6">
        {/* Heading */}
        <h1 className="font-semibold text-4xl text-center sm:text-3xl">
          Get In Touch With Us
        </h1>

        {/* Description */}
        <p className="text-[16px] text-[#9F9F9F] font-normal text-center mt-[30px] sm:w-full sm:text-sm">
          For more information about our product & services, please feel free
          to drop us an email. Our staff will always be there to help you out.
          Do not hesitate!
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[60px]">
          {/* Left Section: Contact Info */}
          <div className="flex flex-col space-y-8 px-6 sm:px-10">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-black h-[28px] mt-1" />
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-medium">Address</h2>
                <p className="text-black font-normal text-[14px] sm:text-[16px]">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <FaPhone className="text-black h-[28px] mt-1" />
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-medium">Phone</h2>
                <p className="text-black font-normal text-[14px] sm:text-[16px]">
                  Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start space-x-4">
              <GoClockFill className="text-black h-[28px] mt-1" />
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-medium">Working Time</h2>
                <p className="text-black font-normal text-[14px] sm:text-[16px]">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="bg-white p-8 w-full max-w-[635px]">
            <form action="#" method="POST">
              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-[16px] sm:text-[18px] font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Abc"
                  className="w-full max-w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4 mt-8">
                <label
                  htmlFor="email"
                  className="text-[16px] sm:text-[18px] font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Abc@def.com"
                  className="w-full max-w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mb-4 mt-8">
                <label
                  htmlFor="subject"
                  className="text-[16px] sm:text-[18px] font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="This is optional"
                  className="w-full max-w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                />
              </div>

              {/* Message */}
              <div className="mb-8 mt-8">
                <label
                  htmlFor="message"
                  className="text-[16px] sm:text-[18px] font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi! I d like to ask about..."
                  className="w-full max-w-[528.75px] h-[120px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                  rows={4}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full max-w-[237px] h-[55px] bg-[#029FAE] rounded-[5px] text-white py-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#F4F4F4] flex flex-wrap items-center justify-between px-8 py-6 mb-[100px]">
          <div className="flex items-center space-x-4 mb-6 sm:mb-0">
            <HiOutlineTrophy className="w-[53px] h-[60px]" />
            <div>
              <h2 className="font-semibold text-[20px] sm:text-[25px]">
                High Quality
              </h2>
              <p className="font-medium text-[16px] sm:text-[20px] text-[#898989]">
                Crafted from top materials
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6 sm:mb-0">
            <MdOutlineVerified className="w-[60px] h-[60px] text-black" />
            <div>
              <h2 className="font-semibold text-[20px] sm:text-[25px]">
                Warranty Protection
              </h2>
              <p className="font-medium text-[16px] sm:text-[20px] text-[#898989]">
                Over 1 years
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <MdOutlineSupportAgent className="w-[53px] h-[60px] text-black" />
            <div>
              <h2 className="font-semibold text-[20px] sm:text-[25px]">
                24/7 Support
              </h2>
              <p className="font-medium text-[16px] sm:text-[20px] text-[#898989]">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contactus;
