import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdRefresh } from "react-icons/io";

function Form() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  const [numRandom, setNumRandom] = useState(Math.floor(Math.random() * 10000));

  const handleClick = () => {
    setNumRandom(Math.floor(Math.random() * 10000));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 p-5 w-full bg-slate-200 rounded-2xl flex flex-col items-start gap-y-5 child:w-full child:rounded-2xl shadow-xl"
    >
      <h2 className=" font-DanaDemiBold text-2xl text-slate-600 mb-1">
        لطفا نظرات، انتقادات و پیشنهادات و امتیازات خود را در مورد اقامت و قبل
        از اقامت با ما در میان بگذارید
      </h2>
      <input
        {...register("name")}
        type="text"
        name="name"
        className=" h-12 placeholder:font-DanaMedium placeholder:text-slate-400 placeholder:text-sm pr-4 border-[2px] focus:border-slate-500 outline-none border-slate-300"
        required
        placeholder="نام و نام خانوادگی"
      />
      <input
        {...register("num")}
        name="num"
        className="h-12 placeholder:font-DanaMedium placeholder:text-slate-400 placeholder:text-sm text-right pr-4 border-[2px] focus:border-slate-500 outline-none border-slate-300"
        type="tel"
        required
        placeholder="همراه"
      />
      <input
        {...register("text")}
        name="text"
        className="h-12 placeholder:font-DanaMedium placeholder:text-slate-400 placeholder:text-sm pr-4 border-[2px] focus:border-slate-500 outline-none border-slate-300"
        type="text"
        required
        placeholder="نظر خورد را وارد کنید."
      />
      <div className=" flex items-center gap-x-3">
        <input
          type="text"
          {...register("code")}
          name="code"
          className="h-11 w-32 border-[2px] focus:border-slate-500 outline-none border-slate-300 rounded-xl placeholder:font-DanaMedium placeholder:text-slate-400 placeholder:text-sm pr-4"
          placeholder="کد امنیتی"
          required
        />
        <span className=" font-DanaMedium text-center leading-[44px] w-24 h-11 bg-black text-red-800 text-xl">
          {numRandom}
        </span>
        <IoMdRefresh
          onClick={handleClick}
          className=" text-slate-600 w-11 h-11"
        />
      </div>
      <button className=" bg-orange-500 w-full h-11 rounded-xl font-DanaDemiBold text-white">
        ثبت نظر، انتقاد، پیشنهاد
      </button>
    </form>
  );
}

export default Form;
