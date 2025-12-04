import CartRoom from "./CartRoom";

function AvailableRoomForHospitality() {
  return (
    <div className=" mt-12 flex flex-col items-center gap-y-6">
      <h2 className=" font-DanaDemiBold text-2xl font-bold text-orange-500">
        درباره مهمان پذیر جهان
      </h2>
      <CartRoom
        imgUrl={"/13733.jpg"}
        nameRoom={"هتل"}
        feature={"اقامت همراه با صبحانه ناهار شام(منوی انتخابی)"}
        price={1200000}
        off={15}
      />
      <CartRoom
        imgUrl={"/13734.jpg"}
        nameRoom={"اتاق چهار تخته فولبرد با ظرفیت چهار نفر"}
        feature={"اقامت همراه با صبحانه ناهار شام(منوی انتخابی)"}
        price={4500000}
        off={25}
      />
    </div>
  );
}

export default AvailableRoomForHospitality;
