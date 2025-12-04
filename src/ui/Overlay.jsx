function Overlay({ setShow, show }) {
  return (
    <div
      onClick={() => setShow(false)}
      className={`${
        show ? "inline-block" : "hidden"
      } bg-black/60 fixed top-0 right-0 left-0 bottom-0 z-[45]`}
    ></div>
  );
}

export default Overlay;
