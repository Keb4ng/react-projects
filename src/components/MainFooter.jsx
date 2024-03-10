import React from "react";

const MainFooter = () => {
  return (
    <div>
      <div className="w-full h-auto bg-gray-200 font-archivo">
        <div className="max-w-[1340px] mx-auto h-auto grid grid-cols-1 md:grid-cols-3 py-10 px-2">
          <ul className="flex flex-col text-[16px] items-center md:items-start my-5 md:my-auto ">
            <li className="text-[20px] font-bold">Support</li>
            <li className="py-1">Help Center</li>
            <li className="py-1 text-[16px]">AirCover</li>
            <li className="py-1 text-[16px]">Combating Discrimination</li>
            <li className="py-1 text-[16px]">
              Supporting people with disabilities
            </li>
            <li className="py-1 text-[16px]">Cancellation Options</li>
            <li className="py-1 text-[16px]">Report neighborhood concern</li>
          </ul>

          <ul className="flex flex-col text-[16px] items-center md:items-start my-5 md:my-auto ">
            <li className="text-[20px] font-bold">Hosting</li>
            <li className="py-1">Local Home</li>
            <li className="py-1 text-[16px]">Cover for hosts</li>
            <li className="py-1 text-[16px]">Hosting resources</li>
            <li className="py-1 text-[16px]">Community forum</li>
            <li className="py-1 text-[16px]">Hosting responsibly</li>
          </ul>

          <ul className="flex flex-col text-[16px] items-center md:items-start my-5 md:my-auto ">
            <li className="text-[20px] font-bold">Localhost</li>
            <li className="py-1">Newsroom</li>
            <li className="py-1 text-[16px]">New features</li>
            <li className="py-1 text-[16px]">Careers</li>
            <li className="py-1 text-[16px]">Investres</li>
            <li className="py-1 text-[16px]">Gift cards</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 max-w-[1340px] mx-auto w-full h-auto flex justify-center items-center md:justify-between py-2 px-2 text-[14px] flex-col md:flex-row">
        <p>© 2023 Localhost, Inc. All Rights Reserved</p>
        <ul className="flex flex-col items-center md:flex-row gap-3 mt-3 md:mt-0">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default MainFooter;
