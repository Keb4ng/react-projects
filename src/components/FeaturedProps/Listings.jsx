import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import listing from "../../media/listing image.png";
import { IoIosStar } from "react-icons/io";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Listings = () => {
  const [heart, setHeart] = useState(false);
  const heartClick = () => {
    setHeart(!heart);
  };
  return (
    <>
      <div className="max-w-[400px] mx-auto md:mx-0">
        <div className="relative overflow-hidden group">
          <img
            className="w-full h-auto object-cover relative rounded-t-xl"
            src={listing}
            alt=""
          />
          <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 translate-y-[-100%] group-hover:translate-y-0 bg-black/60 duration-300">
            <Link to="/Listings">
              <button className="border-2 text-white border-white py-3 px-5 rounded-lg">
                View
              </button>
            </Link>
          </div>
          <button
            onClick={heartClick}
            className="p-3 bg-white rounded-full absolute top-5 right-5 z-10">
            {heart ? (
              <FaHeart className="text-red-400 duration-300" size={20} />
            ) : (
              <FaRegHeart size={20} />
            )}
          </button>
        </div>
        <div className="Details w-full h-auto px-3 py-4 bg-white rounded-b-xl ">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="font-bold">Brightwoods Cabin</p>
              <p className=" text-gray-400">Bridlepath, Ontario, Canada</p>
            </div>
            <p className="flex items-center gap-2 font-bold">
              4.9
              <span className=" text-yellow-400">
                <IoIosStar size={20} />
              </span>
            </p>
          </div>
          <div className="Price flex justify-between items-center pt-3">
            <p className="font-bold">
              $658 <span className="text-gray-400 font-light">/night</span>
            </p>
            <p className="flex items-center gap-2 text-primary-100">
              <span className="border-2 p-[2px] rounded-md border-primary-100">
                <FaArrowTrendDown />
              </span>
              Price Chart
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listings;
