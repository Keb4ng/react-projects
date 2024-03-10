import React, { useState } from "react";
import { SlBell } from "react-icons/sl";
import logo from "../../media/logolocal.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [mobile, setMobile] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const handleMenu = () => {
    setMobile(!mobile);
  };
  return (
    <div className="w-full static md:fixed top-0 left-0 z-20 h-auto py-0 md:py-3 px-0 md:px-3 bg-white border-b-2 border-gray-400/35 font-archivo">
      <div className="max-w-[1340px] mx-auto h-auto hidden md:flex items-center justify-between px-2">
        <Link to="/">
          <div>
            <img src={logo} alt="" />
          </div>
        </Link>
        <div>
          <ul className="gap-6 flex">
            <Link to="/Homepage">
              <li className=" relative before:duration-300 before:absolute before:bottom-[-60%] before:min-w-[max-content] before:bg-primary-100 before:h-[5px] before:content-[''] before:w-full before:translate-y-[0%] hover:before:translate-y-[120%] hover:before:opacity-100 before:opacity-0">
                Home
              </li>
            </Link>
            <li className=" relative before:duration-300 before:absolute before:bottom-[-60%] before:min-w-[max-content] before:bg-primary-100 before:h-[5px] before:content-[''] before:w-full before:translate-y-[0%] hover:before:translate-y-[120%] hover:before:opacity-100 before:opacity-0">
              Stays
            </li>
            <Link to="/Signup">
              <li className=" relative before:duration-300 before:absolute before:bottom-[-60%] before:min-w-[max-content] before:bg-primary-100 before:h-[5px] before:content-[''] before:w-full before:translate-y-[0%] hover:before:translate-y-[120%] hover:before:opacity-100 before:opacity-0">
                Become a host
              </li>
            </Link>
          </ul>
        </div>
        {isLogin && (
          <div>
            <ul className="flex items-center gap-5">
              <li>
                <SlBell />
              </li>
              <li className="w-[40px] h-[40px]">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src="https://media.licdn.com/dms/image/C5603AQHUcILiG4XAyA/profile-displayphoto-shrink_800_800/0/1622123004561?e=2147483647&v=beta&t=nKcX6uieb3B_cQzHeXpAFDuOoXIJaUrikpaN1gd6Fz4"
                  alt=""
                />
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-col fixed bg-white z-50 md:hidden items-center w-full h-auto">
        <div className="grid grid-cols-3 gap-2 justify-between text-center w-full h-[50px] border-b-2 border-gray-200">
          <button
            onClick={handleMenu}
            className="flex justify-center items-center duration-300 hover:text-primary-200">
            <GiHamburgerMenu size={25} />
          </button>
          <button className="flex justify-center items-center border-l-2 border-r-2 border-gray-200 duration-300 hover:text-primary-100">
            <FiPhone size={25} />
          </button>
          <button className="flex justify-center items-center duration-300 hover:text-primary-200">
            <MdOutlineMailOutline size={25} />
          </button>
        </div>
      </div>
      <div className="py-10 flex items-center justify-center md:hidden pt-[90px]">
        <img src={logo} alt="" />
      </div>
      {mobile ? (
        <div className="fixed top-[48px] md:hidden left-0 translate-y-[0] bg-black/45 z-20 duration-500 w-full h-full">
          <div className="max-h-[max-content] w-full relative z-30 bg-white">
            <ul className="text-center">
              <li className="py-5 border-b-2 border-gray-200">Home</li>
              <li className="py-5 border-b-2 border-gray-200">Stays</li>
              <li className="py-5 border-b-2 border-gray-200">Become a host</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="fixed top-[48px]  md:hidden  left-0 translate-y-[-100%] bg-black/45 z-20 duration-500 w-full h-full">
          <div className="max-h-[max-content] w-full relative z-30 bg-white">
            <ul className="text-center">
              <li className="py-5 border-b-2 border-gray-200">Home</li>
              <li className="py-5 border-b-2 border-gray-200">Stays</li>
              <li className="py-5 border-b-2 border-gray-200">Become a host</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainHeader;
