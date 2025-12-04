import { HiClock, HiOutlineWifi } from "react-icons/hi";
import { LiaUtensilsSolid } from "react-icons/lia";
import Btn from "../ui/Btn";
import { useState } from "react";
import { FaBroom, FaTv } from "react-icons/fa";
import { FaElevator } from "react-icons/fa6";
const items = [
  { text: "رستوران", icon: <LiaUtensilsSolid className=" w-5 h-5" /> },
  { text: "اینترنت در لابی", icon: <HiOutlineWifi className=" w-5 h-5" /> },
  { text: "پذیرش 24 ساعته", icon: <HiClock className=" w-5 h-5" /> },
  { text: "خدمات خانه داری", icon: <FaBroom className=" w-5 h-5" /> },
  { text: "تلویزیون", icon: <FaTv className=" w-5 h-5" /> },
  { text: "آسانسور", icon: <FaElevator className=" w-5 h-5" /> },
];
function HospitalityFacilities() {
  const [show, setShow] = useState(false);
  return (
    <div className=" mt-12 flex flex-col items-start gap-y-3 ">
      <h2 className=" font-DanaDemiBold text-2xl font-bold text-orange-500">
        امکانات مهمان پذیر جهان
      </h2>
      <div
        className={`child:flex  child:items-center  child:gap-x-2 flex flex-col items-start gap-y-5 transition-[max-height]  duration-300 overflow-hidden ${
          show ? "max-h-72" : "max-h-20"
        }`}
      >
        {items.map((item) => (
          <p className=" font-DanaMedium child:text-stone-600">
            {item.icon}
            <span>{item.text}</span>
          </p>
        ))}
      </div>
      <Btn handleShow={setShow}>{show ? "بستن" : "مشاهده همه"}</Btn>
    </div>
  );
}

export default HospitalityFacilities;
