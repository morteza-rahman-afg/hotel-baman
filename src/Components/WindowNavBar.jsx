import { HiX } from "react-icons/hi";

function WindowNavBar({ setShow, show }) {
  return (
    <div
      className={` z-50 bg-white w-52 fixed top-0 right-0 bottom-0 transition-all duration-500 ${
        show ? "translate-x-0" : "translate-x-52"
      } pr-4`}
    >
      <HiX
        className=" w-8 h-8 absolute left-2 top-2 
      "
        onClick={() => setShow(false)}
      />
      <div className=" mt-11 flex flex-col items-start font-DanaMedium gap-y-4 child:before:content-[''] child:before:w-[10px]  child:before:h-[10px] child:before:bg-orange-500 child:before:block child:before:rounded-2xl child:before:transition-all child:before:duration-300 child:flex child:items-center">
        <a href="#" className="hover:before:w-6 hover:text-orange-500">
          خانه
        </a>
        <a href="#" className="hover:before:w-6 hover:text-orange-500">
          رزرو هتل
        </a>
        <a href="#" className="hover:before:w-6 hover:text-orange-500">
          هتل ها
        </a>
        <a href="#" className="hover:before:w-6 hover:text-orange-500">
          درباره ما
        </a>
        <a href="#" className="hover:before:w-6 hover:text-orange-500">
          ارتباط با ما
        </a>
        <a href="#" className="hover:before:w-6 hover:text-orange-500">
          مجله هتل با من
        </a>
      </div>
    </div>
  );
}

export default WindowNavBar;
