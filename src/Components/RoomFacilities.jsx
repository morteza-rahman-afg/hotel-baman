import { BiShower } from "react-icons/bi";
import Btn from "../ui/Btn";
import { GrHost } from "react-icons/gr";
import { FaBowlFood } from "react-icons/fa6";
import { IoBrowsersSharp } from "react-icons/io5";
import { useState } from "react";

function RoomFacilities() {
  const [show, setShow] = useState(false);
  return (
    <div className=" mt-12 flex flex-col items-start gap-y-3">
      <h2 className=" font-DanaDemiBold text-2xl font-bold text-orange-500">
        امکانات اتاق های مهمانپذیر جهان
      </h2>

      <div
        className={`child:flex  child:items-start  child:gap-x-2 flex flex-col items-start gap-y-5 transition-[max-height]  duration-300 overflow-hidden ${
          show ? "max-h-40" : "max-h-20"
        } `}
      >
        <p className=" child:font-DanaMedium child:text-stone-600">
          <BiShower className=" w-5 h-5" />
          <span>حمام</span>
        </p>
        <p className=" child:font-DanaMedium child:text-stone-600">
          <GrHost className=" w-5 h-5" />
          <span>یخچال</span>
        </p>
        <p className=" child:font-DanaMedium child:text-stone-600">
          <FaBowlFood className=" w-5 h-5" />
          <span>امکانات پخت و پز</span>
        </p>
        <p className=" child:font-DanaMedium child:text-stone-600">
          <IoBrowsersSharp className=" w-5 h-5" />
          <span>آینه</span>
        </p>
      </div>

      <Btn handleShow={setShow}>{show ? "بستن" : "مشاهده همه"}</Btn>
    </div>
  );
}

export default RoomFacilities;
