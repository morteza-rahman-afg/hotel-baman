function Btn({ children, handleShow }) {
  return (
    <button
      onClick={() => handleShow((show) => !show)}
      className=" fle items-center justify-center border-[3px] border-t-slate-400 border-l-slate-400 border-b-slate-600 border-r-slate-600 w-40 h-10 rounded-2xl font-DanaMedium transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-300 "
    >
      {children}
    </button>
  );
}

export default Btn;
