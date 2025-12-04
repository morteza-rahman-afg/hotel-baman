import { HiOutlineStar, HiStar } from "react-icons/hi";

function ProgressReizebel({ value, starSolid, starOutline }) {
  return (
    <div className=" w-full flex items-start flex-col gap-y-1">
      <div className=" flex items-center ">
        {starSolid > 0 &&
          Array.from({ length: starSolid }, (i) => (
            <HiStar className=" text-orange-500" key={i} />
          ))}
        {starOutline > 0 &&
          Array.from({ length: starOutline }, (i) => (
            <HiOutlineStar className=" text-orange-500" key={i} />
          ))}
      </div>
      <progress
        value={value}
        max="100"
        className=" h-[5px] w-full bg-slate-200 text-white"
      ></progress>
      <span className=" font-DanaMedium text-slate-500">{value}%</span>
    </div>
  );
}

export default ProgressReizebel;
