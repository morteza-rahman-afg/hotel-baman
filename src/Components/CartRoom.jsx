import { BiBed, BiShower } from "react-icons/bi";
import { HiOutlineWifi } from "react-icons/hi";
import { LiaRulerVerticalSolid } from "react-icons/lia";

function CartRoom({ imgUrl, nameRoom, feature, price, off }) {
  return (
    <div className=" w-full h-auto bg-slate-100 rounded-2xl py-5 flex items-center flex-col gap-y-4">
      <div className="w-[280px] h-[400px] p-2 bg-white rounded-2xl">
        <img
          src={imgUrl}
          alt={nameRoom}
          className=" object-cover rounded-2xl w-full h-full"
        />
      </div>
      <h3 className=" font-DanaDemiBold text-2xl">{nameRoom}</h3>
      <p className=" bg-white py-1 px-3 rounded-2xl">
        <span className="  font-DanaMedium text-sm text-slate-600">
          {feature}
        </span>
      </p>
      <div className=" flex items-center gap-x-6 child:flex child:items-center child:gap-x-2 child:font-DanaMedium child:text-sm  child:bg-white child:text-slate-600 child:py-1 child:px-3 child:rounded-2xl">
        <p>
          <HiOutlineWifi />
          <span>وایفای رایگان</span>
        </p>
        <p>
          <BiBed />
          <span>2 تخت یک نفره</span>
        </p>
      </div>
      <div className=" flex items-center gap-x-6 child:flex child:items-center child:gap-x-2 child:font-DanaMedium child:text-sm  child:bg-white child:text-slate-600 child:py-1 child:px-3 child:rounded-2xl">
        <p>
          <LiaRulerVerticalSolid />
          <span>15m</span>
        </p>
        <p>
          <BiShower />
          <span>لوازم بهداشتی رایگان</span>
        </p>
      </div>
      <p className=" bg-white w-[90%] h-[10px] rounded-2xl flex items-center justify-center">
        <span className=" w-[95%] h-[1px] bg-slate-200 inline-block"></span>
      </p>
      <div className="w-[90%] h-[50px] child:font-DanaMedium bg-white rounded-2xl flex items-center justify-between p-1 shadow-xl">
        <p className="line-through text-slate-600 ">
          {price.toLocaleString("fa-IR")}
        </p>
        <p className=" flex items-center gap-x-1">
          <span className=" text-orange-500">{(off / 100) * price}</span>
          <span className=" text-slate-600">تومان</span>
        </p>
        <button className="h-full w-32 bg-black text-white rounded-2xl">
          051-1834
        </button>
      </div>
    </div>
  );
}

export default CartRoom;
