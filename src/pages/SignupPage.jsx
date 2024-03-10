import React from "react";
import accountBg from "../media/signup.png";
import { RxPerson } from "react-icons/rx";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="w-full h-screen relative flex justify-center items-center font-archivo">
      <div className="w-[300px] md:w-[450px] h-auto p-5 bg-white relative z-10 flex flex-col gap-3 rounded-lg">
        <form className="border-b-2 border-gray-200 mb-3">
          <h1 className="text-[26px] pb-3 font-bold">Create Account</h1>
          <div className="w-full h-auto flex flex-col gap-3">
            <div className="w-full h-[51px] text-gray-400 flex items-center justify-between rounded-lg border-2 border-gray-200 px-2">
              <input
                className="w-full h-full outline-none"
                type="text"
                placeholder="Email Address"
              />
              <RxPerson size={25} />
            </div>
            <div className="w-full h-[51px] text-gray-400 flex items-center justify-between rounded-lg border-2 border-gray-200 px-2">
              <input
                className="w-full h-full outline-none"
                type="text"
                placeholder="Password"
              />
              <MdLockOutline size={25} />
            </div>
            <div className="w-full h-[51px] text-gray-400 flex items-center justify-between rounded-lg border-2 border-gray-200 px-2">
              <input
                className="w-full h-full outline-none"
                type="text"
                placeholder="Confirm Password"
              />
              <MdLockOutline size={25} />
            </div>
          </div>
          <button className="bg-primary-100 text-white rounded-lg w-[160px] py-3 my-5">
            Sign up
          </button>
        </form>
        <div className="flex flex-col gap-5">
          <h1>Or sign up with</h1>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-200 rounded-lg flex justify-center items-center p-5">
              <img
                className="w-[40px] h-[40px] object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt=""
              />
            </div>
            <div className="bg-gray-200 rounded-lg flex justify-center items-center p-5">
              <img
                className="w-[40px] h-[40px] object-contain"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
                alt=""
              />
            </div>
            <div className="bg-gray-200 rounded-lg flex justify-center items-center p-5">
              <img
                className="w-[40px] h-[40px] object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt=""
              />
            </div>
          </div>
          <p className="text-center">
            I already have an account.{" "}
            <Link to="/">
              <span className="text-primary-100 ">Login</span>
            </Link>
          </p>
        </div>
      </div>
      <img
        className="w-full h-full object-cover absolute top-0 left-0"
        src={accountBg}
        alt=""
      />
    </div>
  );
};

export default SignupPage;
