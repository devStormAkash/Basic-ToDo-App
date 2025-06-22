import { RxCross2 } from "react-icons/rx";
import { IoSettings } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { BsFillBagFill } from "react-icons/bs";
import { BsBagXFill } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";

const FloatingSideBar = ({ isVisible, toggleDisplay }) => {
  return (
    <div
      className={`fixed z-50 inset-0 text-lg flex flex-col justify-start items-start gap-14 transition-all duration-500 ease-in-out bg-emerald-50 left-0 ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div
        className="px-5 py-3 flex justify-end w-full text-4xl"
        onClick={toggleDisplay}
      >
        <RxCross2 />
      </div>
      <h2 className="text-5xl font-semibold pl-5">To-Do</h2>
      <div className="mx-3">
        <ul className="flex flex-col gap-1 text-2xl  w-full">
          <li className="pl-5 py-2 flex  items-center gap-2.5 w-full active:font-semibold active:bg-sky-200">
            <div className="text-lime-700">
              <IoSettings />
            </div>
            <span>My Day</span>
          </li>
          <li className="pl-5 py-2 pr-2 flex  items-center gap-2.5  active:font-semibold active:bg-sky-200">
            <div className="text-lime-700">
              <IoStar />
            </div>
            <span>Important</span>
          </li>
          <li className="pl-5 py-2 pr-2 flex  items-center gap-2.5  active:font-semibold active:bg-sky-200">
            <div className="text-lime-700">
              <BsFillBagFill />
            </div>
            <span>Tasks</span>
          </li>
          <li className="pl-5 py-2 pr-2 flex  items-center gap-2.5  active:font-semibold active:bg-sky-200">
            <div className="text-lime-700">
              <BsFillBagCheckFill />
            </div>
            <span>Completed Tasks</span>
          </li>
          <li className="pl-5 py-2 pr-2 flex  items-center gap-2.5  active:font-semibold active:bg-sky-200">
            <div className="text-lime-700">
              <BsBagXFill />
            </div>
            <span>Uncompleted Tasks</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingSideBar;
