import {
  HiOutlineDotsHorizontal,
  HiOutlineHome,
  HiOutlinePhone,
} from "react-icons/hi";
import { HiBuildingOffice } from "react-icons/hi2";

function NavBottom() {
  return (
    <div className="w-full h-[70px] bg-bgPrimary shadow-normal fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 child:flex child:flex-col child:items-center child:text-stone-700 child:font-DanaMedium">
      <div className=" child:hover:text-orange-500 child:transition-all child:duration-500 child:cursor-pointer">
        <HiOutlineDotsHorizontal className=" w-8 h-8" />
        <h5>بیشتر</h5>
      </div>
      <div className=" child:hover:text-orange-500 child:transition-all child:duration-500 child:cursor-pointer">
        <HiOutlinePhone className=" w-8 h-8" />
        <h5>051-1834</h5>
      </div>
      <div className=" child:hover:text-orange-500 child:transition-all child:duration-500 child:cursor-pointer">
        <HiBuildingOffice className=" w-8 h-8" />
        <h5>رزرو هتل</h5>
      </div>
      <div className=" child:hover:text-orange-500 child:transition-all child:duration-500 child:cursor-pointer">
        <HiOutlineHome className=" w-8 h-8" />
        <h5>خانه</h5>
      </div>
    </div>
  );
}

export default NavBottom;
