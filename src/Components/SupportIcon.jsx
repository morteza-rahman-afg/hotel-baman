import { HiOutlineAnnotation } from "react-icons/hi";

function SupportIcon() {
  return (
    <div className=" fixed bottom-20 right-4 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center z-50">
      <HiOutlineAnnotation className="w-10 h-10 text-white" />
    </div>
  );
}

export default SupportIcon;
