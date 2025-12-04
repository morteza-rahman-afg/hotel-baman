import { HiOutlineLocationMarker, HiOutlineStar } from "react-icons/hi";

function MehmanPazirJahan() {
  return (
    <div className=" flex flex-col items-start gap-y-5">
      <div className=" flex flex-col items-start gap-y-2">
        <h2 className=" font-DanaDemiBold text-2xl font-bold">
          مهمان پذیر جهان مشهد
        </h2>
        <div className=" flex items-center gap-x-4">
          <div className=" flex items-center justify-center  gap-x-1 font-DanaMedium">
            <p>هتل یک ستاره</p>
            <HiOutlineStar className=" text-yellow-400 w-6 h-6" />
          </div>
          <div className="flex items-center gap-x-4">
            <p className=" font-DanaMedium">(4 بازخورد)</p>
            <p className=" flex items-center justify-center gap-x-2 bg-orange-500 text-white w-16 h-7 rounded-xl font-DanaMedium leading-[28px]">
              <span>4.0</span>
              <HiOutlineStar className=" w-5 h-5" />
            </p>
          </div>
        </div>
        <p className=" font-DanaMedium flex items-center gap-x-1">
          <span>خیابان امام رضا نبش امام رضا 14</span>
          <HiOutlineLocationMarker />
        </p>
      </div>
      <div className=" w-full h-28 bg-orange-500 rounded-3xl flex flex-col items-center justify-between py-4 px-20 text-white font-DanaMedium">
        <span className=" text-xl">شروع از تاریخ</span>
        <div className=" w-full flex items-center justify-between child:text-xl">
          <span className=" line-through text-black decoration-red-600 decoration-2">
            1,200,000 تومان
          </span>
          <span>1,098,000 تومان</span>
        </div>
      </div>
      <div className=" w-full">
        <video
          controls
          className=" w-full h-[300px] shadow-2xl rounded-2xl"
          poster="./public/1178.jpg"
        >
          <source src="./public/v.mp4" type="video/mp4" />
        </video>
      </div>
      <div className=" w-full relative">
        <img
          src="./public/13736.jpg"
          alt="13736"
          className=" w-full h-[450px] object-cover rounded-3xl"
        />
        <button className=" absolute -bottom-[18px] left-5 bg-orange-500 text-white w-44 h-12 rounded-xl font-DanaMedium border border-orange-300">
          مشاهده همه تصاویر
        </button>
      </div>
    </div>
  );
}

export default MehmanPazirJahan;
