import { useState } from "react";
import Btn from "../ui/Btn";

function AboutGuestHouse() {
  const [show, setShow] = useState(false);
  return (
    <div className=" mt-12 flex flex-col items-start gap-y-3">
      <h2 className=" font-DanaDemiBold text-2xl font-bold text-orange-500">
        درباره مهمان پذیر جهان
      </h2>
      <div
        className={` flex flex-col items-start gap-y-5 transition-[max-height]  duration-300 overflow-hidden ${
          show ? "max-h-72" : "max-h-16"
        }`}
      >
        <p>
          <span className=" font-DanaDemiBold font-bold text-[18px] ml-2">
            مهمانپذیر جهان مشهد:
          </span>
          <span className=" font-DanaMedium text-sm text-stone-600">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
          </span>
        </p>
        <p>
          <span className=" font-DanaDemiBold font-bold text-[18px] ml-2">
            مهمانپذیر جهان مشهد:
          </span>
          <span className=" font-DanaMedium text-sm text-slate-600">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
          </span>
        </p>
      </div>
      <Btn handleShow={setShow}>{show ? "بستن" : "نمایش بیشتر"}</Btn>
    </div>
  );
}

export default AboutGuestHouse;
