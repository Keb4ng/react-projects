import React from "react";
import hero from "../../media/hero.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillHouseFill } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className="w-full min-h-[300px] relative shadow-2xl font-archivo mt-0 md:mt-[67px]">
      <div className="max-w-[1340px] min-h-[300px] px-5 md:px-2 py-14 md:py-10 h-auto mx-auto flex flex-col gap-3 relative z-10 justify-center ">
        <div className="mb-5">
          <h1 className="text-[44px] font-bold">
            Find a <span className=" text-primary-100">host</span> for every
            journey
          </h1>
          <p className="text-[20px]">
            Discover the best local rental properties that fits your every
            travel needs
          </p>
        </div>
        <div className="bg-white rounded-lg grid grid-cols-2 md:grid-cols-6 gap-3 py-3 px-3 items-center border-2 border-gray-100">
          <div className="border-2 border-gray-400/20 h-[64px] rounded-md flex gap-3 items-center justify-between px-3 text-[14px] col-span-2">
            <input
              className="w-full h-auto py-4 outline-none"
              type="text"
              placeholder="Accomodation"
            />
            <BsFillHouseFill />
          </div>
          <div className="border-2 border-gray-400/20 h-[64px] rounded-md flex gap-3 items-center justify-between px-3 text-[14px]">
            <input
              className="w-full h-auto py-4 outline-none"
              type="text"
              placeholder="Check-in"
            />
            <FaRegCalendar size={25} />
          </div>
          <div className="border-2 border-gray-400/20 h-[64px] rounded-md flex gap-3 items-center justify-between px-3 text-[14px]">
            <input
              className="w-full h-auto py-4 outline-none"
              type="text"
              placeholder="Check-out"
            />
            <FaRegCalendar size={25} />
          </div>
          <div className="border-2 border-gray-400/20 h-[64px] rounded-md flex gap-3 items-center justify-between px-3 text-[14px]">
            <input
              className="w-full h-auto py-4 outline-none"
              type="text"
              placeholder="Guest"
            />
            <GoPerson size={30} />
          </div>
          <button className="text-white bg-primary-100 h-full flex items-center justify-center gap-2 px-3 font-bold rounded-md w-full">
            <span>
              <FaMagnifyingGlass />
            </span>
            Search
          </button>
        </div>
      </div>
      <img
        className="w-full h-full object-cover absolute top-0 left-0"
        src={hero}
        alt="Hero Section Banner"
      />
    </div>
  );
};

export default HeroSection;
