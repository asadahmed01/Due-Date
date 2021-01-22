import React from "react";
import { FaBook, FaClock, FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-5 mb-3">
      <h2 className="md:text-6xl text-2xl font-bold font-sans text-indigo-700 md:py-4">
        Stay on top of your deadlines
      </h2>

      <div className="flex flex-col bg-indigo-100 mt-6 py-8">
        <div>
          <h4 className="md:text-2xl font-sans font-bold text-indigo-500 tracking-widest">
            Track All Your projects In One Place
          </h4>
        </div>

        <div className="self-center md:text-8xl text-6xl py-5 text-indigo-500 hover:scale-150">
          <FaTasks />
        </div>
      </div>

      <div className="flex flex-col py-8">
        <div>
          <h4 className="md:text-2xl font-sans font-bold text-indigo-400 tracking-widest">
            Second By Second Countdown To The Deadline
          </h4>
        </div>

        <div className="self-center md:text-8xl text-6xl py-5 text-indigo-500">
          <FaClock />
        </div>
      </div>

      <div className="flex flex-col bg-gray-100  py-8">
        <div>
          <h4 className="md:text-2xl font-sans font-bold text-indigo-400 tracking-widest">
            Monitor All Your Important Dates From Your Account
          </h4>
        </div>

        <div className="flex self-center md:text-4xl text-2xl py-5 text-indigo-500 md:pt-14">
          <NavLink to="/login">
            <h1 className="pr-5 underline hover:no-underline hover:text-indigo-700 cursor-pointer">
              Signin
            </h1>
          </NavLink>

          <NavLink to="/register">
            <h1 className="underline hover:no-underline hover:text-indigo-700 cursor-pointer">
              Register
            </h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
