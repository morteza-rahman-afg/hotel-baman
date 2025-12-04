import { HiOutlineStar, HiStar } from "react-icons/hi";
import ProgressReizebel from "./ProgressReizebel";
import { useState } from "react";

function Reviews() {
  return (
    <div className=" w-full mt-12 flex flex-col items-center gap-y-2">
      <h2 className=" w-full text-right font-DanaDemiBold text-2xl font-bold text-orange-500">
        بررسی ها
      </h2>
      <div className=" w-36 h-36 border border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-y-1">
        <span className=" font-DanaDemiBold text-orange-500 font-bold text-4xl">
          4.0
        </span>
        <div className=" flex items-center">
          <HiStar className=" text-orange-500" />
          <HiStar className=" text-orange-500" />
          <HiStar className=" text-orange-500" />
          <HiOutlineStar className=" text-orange-500" />
          <HiOutlineStar className=" text-orange-500" />
        </div>
        <span className=" font-DanaMedium text-sm text-slate-500">
          بر اساس 4 بازخورد
        </span>
      </div>
      <ProgressReizebel value={20} starSolid={2} starOutline={3} />
      <ProgressReizebel value={80} starSolid={4} starOutline={1} />
      <ProgressReizebel value={35} starSolid={3} starOutline={2} />
      <ProgressReizebel value={48} starSolid={4} starOutline={1} />
      <ProgressReizebel value={70} starSolid={4} starOutline={1} />
      <div className=" flex items-center justify-between w-full font-DanaMedium">
        <div className=" flex items-center justify-center gap-x-1">
          <StartRaiting />
        </div>
        <button className=" transition-all duration-500 hover:bg-teal-800 hover:text-white text-emerald-800 font-DanaMedium w-48 h-11 rounded-2xl border-[2px] border-teal-800">
          ثبت امتبار
        </button>
      </div>
    </div>
  );
}

export default Reviews;

function StartRaiting({ maxRating = 5, message = [] }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function hndleRating(rating) {
    setRating(rating);
  }
  return (
    <div className=" flex">
      <div className=" flex items-center gap-x-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Start
            key={i}
            onRating={() => hndleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
      <span className=" bg-orange-500 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl">
        {message.length === maxRating
          ? message[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || "0"}
      </span>
    </div>
  );
}

function Start({ onRating, full, onHoverIn, onHoverOut }) {
  return (
    <div
      role="button"
      onClick={onRating}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <HiStar className=" text-orange-500 w-7 h-7 hover:scale-150 transition-all duration-300" />
      ) : (
        <HiOutlineStar className=" text-orange-500 w-7 h-7" />
      )}
    </div>
  );
}
