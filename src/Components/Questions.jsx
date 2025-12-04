import { HiChevronUp, HiQuestionMarkCircle } from "react-icons/hi";

const arrQuestions = [
  "ساعات ورود و خروج به چه صورت است؟",
  "گشت شهری رایگان به همه روزها تعلق میگیرد؟",
  "غذا چه ساعتی سرو میشود؟",
  "نرخ کودک چگونه محاسبه میشود؟",
  "قیمت ها نفری است یا شبی؟",
  "منو سینی یعنی چی؟",
  "ناهار روز اول و روز آخر به چه صورت است؟",
];
function Questions() {
  return (
    <div className="mt-12 flex items-start flex-col gap-y-4">
      <h2 className=" font-DanaDemiBold text-2xl font-bold text-orange-500">
        سوالات متداول
      </h2>
      {arrQuestions.map((question) => (
        <div className=" w-full h-16 flex items-center justify-between bg-slate-200 px-4 rounded-2xl font-DanaMedium cursor-pointer">
          <p className=" bg-orange-500 text-white w-11 h-11 flex items-center justify-center rounded-full">
            <HiQuestionMarkCircle className=" w-8 h-8" />
          </p>
          <h6>{question}</h6>
          <HiChevronUp className=" text-slate-600 w-6 h-6" />
        </div>
      ))}
    </div>
  );
}

export default Questions;
