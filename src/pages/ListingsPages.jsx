import React from "react";
import listings from "../media/listingsIMG.png";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaArrowTrendDown } from "react-icons/fa6";
import { TbBoxPadding } from "react-icons/tb";
import { TbUserCheck } from "react-icons/tb";
import { LuCalendarX2 } from "react-icons/lu";

const ListingsPages = () => {
  return (
    <div className="max-w-[1340px] mx-auto mt-10 md:mt-[130px] px-2 font-archivo">
      <div className="Image-Wrapper grid md:grid-cols-1 lg:grid-cols-3 md:gap-y-5 gap-y-0 gap-0 lg:gap-8">
        <div className="col-span-2 w-auto">
          <div>
            <img className="w-full h-auto" src={listings} alt="" />
          </div>
        </div>
        <div className="Details w-full h-auto bg-white rounded-lg p-7">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="text-[29px] font-bold">Brightwoods Cabin</p>
              <p className="text-[16px]">Bridlepath, Ontario, Canada</p>
            </div>
            <button className="p-3 bg-white rounded-full border-2 border-gray-200">
              <FaRegHeart />
            </button>
          </div>
          <div className="flex">
            <p className="flex items-center gap-2 font-bold">
              4.9
              <span className=" text-yellow-400">
                <IoIosStar size={20} />
              </span>
            </p>
            <p className=" text-primary-100 underline font-bold">200 Reviews</p>
          </div>
          <p className="text-[16px] pt-4 pb-7">
            Welcome to our cozy cabin retreat nestled in the heart of
            Bridlepath, Ontario! Surrounded by lush landscapes and tranquil
            trails, this charming getaway offers the perfect blend of rustic
            elegance and modern comfort.
          </p>
          <div className="flex flex-row flex-wrap justify-between items-center">
            <p className="text-[36px] font-bold">
              $658<span className="text-[18px] font-light">/night</span>
            </p>
            <p className="flex items-center gap-2 text-primary-100">
              <span className="border-2 p-[2px] rounded-md border-primary-100">
                <FaArrowTrendDown />
              </span>
              Best time to Book
            </p>
          </div>
          <button className="bg-primary-100 text-white w-full h-[58px] rounded-lg my-3">
            Book this home
          </button>
          <div>
            <p className="text-gray-400 mb-2">Hosted by:</p>
            <div className="flex flex-row gap-3 items-center pt-5 border-t-2 border-gray-200">
              <div className="w-[45px] h-[45px]">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src="https://media.licdn.com/dms/image/C5603AQHUcILiG4XAyA/profile-displayphoto-shrink_800_800/0/1622123004561?e=2147483647&v=beta&t=nKcX6uieb3B_cQzHeXpAFDuOoXIJaUrikpaN1gd6Fz4"
                  alt=""
                />
              </div>
              <div className="flex flex-col ">
                <p>Jon Trinidad</p>
                <p className="text-gray-400">Joined in may 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-Section w-full h-auto flex flex-col my-6 border-b-2 border-gray-200 pb-5">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:gap-8 w-full">
          <div className=" col-span-2">
            <h1>About this home</h1>
            <p>
              Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
              heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the
              tranquility of nature's embrace, is designed to provide the
              ultimate relaxing getaway. Living Space: This charming cabin
              boasts a spacious living area adorned with rustic decor and modern
              amenities. Enjoy the warmth of the wood-burning fireplace, relax
              on the plush sofas, and make yourself at home with our
              entertainment center featuring a flat-screen TV, WiFi, and more.
            </p>
          </div>
          <div className="parent flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <div className="bg-primary-100/20 p-3 rounded-lg text-primary-100">
                <TbBoxPadding size={25} />
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Dedicated workspace</p>
                <p className="text-gray-400">
                  A private room equipped with WiFi
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="bg-primary-100/20 p-3 rounded-lg text-primary-100">
                <TbUserCheck size={25} />
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Self check-in</p>
                <p className="text-gray-400">Check in with just your phone</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="bg-primary-100/20 p-3 rounded-lg text-primary-100">
                <LuCalendarX2 size={25} />
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Free cancellation</p>
                <p className="text-gray-400">Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="amenities grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:gap-8 mb-5">
        <div className="col-span-2 text-center lg:text-left">
          <h1 className="text-[24px] font-bold mb-3">Amenities</h1>
          <ul className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <li>Lakeside</li>
            <li>Free parking</li>
            <li>Fire Extinguisher</li>
            <li>Kitchen</li>
            <li>Outdoor shower</li>
            <li>Freezer</li>
            <li>Security cameras on property</li>
            <li>Wifi</li>
            <li>Hot water</li>
            <li>Shampoo</li>
            <li>Coffee Maker</li>
            <li>Glass Stove</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div>
            <h1 className="text-[24px] font-bold">Amenities</h1>
            <p>The Birdle path</p>
          </div>
          <div className="map w-[300px] h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="https://www.google.com/maps/d/thumbnail?mid=1PIla3Ou73xmmQnelZXHvyk-NptM&hl=en"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsPages;
