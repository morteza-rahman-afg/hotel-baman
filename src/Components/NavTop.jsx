import { HiMenu, HiPhone } from "react-icons/hi";

function NavTop({ setShow }) {
  return (
    <div className=" bg-bgPrimary border border-b-slate-400 border-solid border-y-2 w-full h-16 fixed top-0 left-0 right-0 flex items-center justify-between px-4 z-40 ">
      <div className=" flex items-center gap-x-1">
        <HiMenu className=" w-8 h-8" onClick={() => setShow(true)} />
        <h1 className=" font-DanaDemiBold text-2xl">هتل با من</h1>
      </div>
      <div className=" child:hover:text-orange-500 child:transition-all child:duration-500 child:cursor-pointer">
        <HiPhone className=" w-8 h-8" />
      </div>
    </div>
  );
}

export default NavTop;
