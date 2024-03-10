import React from "react";
import { MdOutlineWindow } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";
import Listings from "components/FeaturedProps/Listings";

const FeaturedListings = () => {
  return (
    <div className="max-w-[1340px] min-h-[100vh] mx-auto flex flex-col py-10 px-2 relative z-10 font-archivo">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-5">
        <p className="text-lg mb-5 md:mb-0">
          Stays nearby: <span className="font-bold">Toronto Ontario</span>
        </p>
        <div className="flex bg-white gap-2 rounded-lg p-2">
          <button className=" bg-primary-100 p-2 rounded-lg  text-white">
            <MdOutlineWindow size={25} />
          </button>
          <button>
            <FaRegMap size={25} />
          </button>
        </div>
      </div>
      <div className="Listings-Wrapper w-full h-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Listings />
        <Listings />
        <Listings />
        <Listings />
        <Listings />
        <Listings />
        <Listings />
        <Listings />
      </div>
      <button className="mx-auto border-2 mt-5 py-3 px-10 rounded-lg border-primary-100 text-primary-100">
        Show More
      </button>
    </div>
  );
};

export default FeaturedListings;
