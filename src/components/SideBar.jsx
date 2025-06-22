import React from "react";
import { IoSettings } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { BsFillBagFill } from "react-icons/bs";
import { BsBagXFill } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";

const SideBar = () => {
  return (
    <>
      <div className="w-1/4 hidden md:block">
        <div className="w-1/4 py-5  text-lg flex flex-col justify-center items-start gap-14 h-screen fixed bg-emerald-50 left-0">
          <h2 className="text-3xl font-semibold pl-10">To-Do</h2>
          <ul className="flex flex-col gap-1  w-full">
            <li className="pl-10 py-5 pr-2 flex  items-center gap-2.5  hover:font-semibold hover:bg-sky-200">
              <div className="text-lime-700">
                <IoSettings />
              </div>
              <span>My Day</span>
            </li>
            <li className="pl-10 py-5 pr-2 flex  items-center gap-2.5  hover:font-semibold hover:bg-sky-200">
              <div className="text-lime-700">
                <IoStar />
              </div>
              <span>Important</span>
            </li>
            <li className="pl-10 py-5 pr-2 flex  items-center gap-2.5  hover:font-semibold hover:bg-sky-200">
              <div className="text-lime-700">
                <BsFillBagFill />
              </div>
              <span>Tasks</span>
            </li>
            <li className="pl-10 py-5 pr-2 flex  items-center gap-2.5  hover:font-semibold hover:bg-sky-200">
              <div className="text-lime-700">
                <BsFillBagCheckFill />
              </div>
              <span>Completed Tasks</span>
            </li>
            <li className="pl-10 py-5 pr-2 flex  items-center gap-2.5  hover:font-semibold hover:bg-sky-200">
              <div className="text-lime-700">
                <BsBagXFill />
              </div>
              <span>Uncompleted Tasks</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
