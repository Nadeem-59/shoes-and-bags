import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function Faqs() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto mt-16 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-[48px] sm:text-[36px] text-[#333333] font-bold mb-4">
          Questions Look Here
        </h1>

        <p className="text-[16px] font-normal mb-8 text-[#4F4F4F]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-24">
          <div>
            {/* FAQ Card */}
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between items-center">
                What types of shoes and bags do you offer?
                <FaPlus className="cursor-pointer" />
              </h3>
              <p className="mt-4 text-[16px] font-normal text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* FAQ Card */}
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between items-center">
                Do your shoes and bags with a warranty?
                <FaPlus className="cursor-pointer" />
              </h3>
              <p className="mt-4 text-[16px] font-normal text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* FAQ Card */}
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between items-center">
                Can I try a shoes before purchasing?
                <FaPlus className="cursor-pointer" />
              </h3>
              <p className="mt-4 text-[16px] font-normal text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
          </div>

          <div>
            {/* FAQ Card */}
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between items-center">
                How can we get in touch with you?
                <FaPlus className="cursor-pointer" />
              </h3>
              <p className="mt-4 text-[16px] font-normal text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* FAQ Card */}
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg mb-6 text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between items-center">
                What will be delivered? And When?
                <FaPlus className="cursor-pointer" />
              </h3>
              <p className="mt-4 text-[16px] font-normal text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>

            {/* FAQ Card */}
            <div className="bg-[#F7F7F7] p-6 w-full h-auto max-w-full rounded-lg text-left">
              <h3 className="text-[18px] pt-4 font-bold flex justify-between items-center">
                How do I clean and maintain my shoes ?
                <FaPlus className="cursor-pointer" />
              </h3>
              <p className="mt-4 text-[16px] font-normal text-[#4F4F4F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
