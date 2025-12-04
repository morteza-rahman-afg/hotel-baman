const commentsUser = [
  {
    id: 1,
    name: "کاربر عادی",
    image: "/user.png",
    history: new Date().toLocaleDateString("fa-IR"),
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
    AdminNswer: {
      name: "مدیریت",
      image: "/logo-dark.png",
      history: new Date().toLocaleDateString("fa-IR"),
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
    },
  },
  {
    id: 2,
    name: "کاربر عادی",
    image: "/user.png",
    history: new Date().toLocaleDateString("fa-IR"),
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
    AdminNswer: {
      name: "مدیریت",
      image: "/logo-dark.png",
      history: new Date().toLocaleDateString("fa-IR"),
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
    },
  },
];
function Comments() {
  return (
    <div className=" mt-12 flex flex-col items-start">
      <h2 className=" font-DanaDemiBold text-2xl font-bold text-orange-500">
        نمایش 4 بازخورد
      </h2>

      {commentsUser.map((comment) => (
        <div className=" w-full flex flex-col items-start gap-y-6 text-slate-600 mt-8 relative z-0">
          <div className=" w-[95%] flex flex-col items-start gap-y-2 font-DanaMedium border-[2px] border-slate-300 rounded-2xl p-4 shadow-lg -translate-x-6  z-10 relative bg-white">
            <div className=" flex items-center gap-x-3">
              <img
                src={comment.image}
                alt={comment.name}
                className=" w-20 h-20"
              />
              <div className=" flex flex-col items-start gap-y-1">
                <h4>{comment.name}</h4>
                <span>{comment.history}</span>
              </div>
            </div>
            <p>{comment.text}</p>
          </div>

          <div className=" w-[85%] flex flex-col items-start gap-y-2 font-DanaMedium border-[2px] border-slate-300 rounded-2xl p-4 shadow-lg -translate-x-[70px]  z-10 relative bg-white">
            <div className=" flex items-center gap-x-3">
              <img
                src={comment.AdminNswer.image}
                alt={comment.AdminNswer.name}
                className=" w-20 h-20"
              />
              <div className=" flex flex-col items-start gap-y-1">
                <h4>{comment.AdminNswer.name}</h4>
                <span>{comment.AdminNswer.history}</span>
              </div>
            </div>
            <p>{comment.AdminNswer.text}</p>
          </div>

          <span className="w-[40%] h-32 border-t-[2px] border-b-[2px] border-r-[2px] border-slate-300 rounded-2xl absolute top-[110px] -z-10"></span>
        </div>
      ))}
    </div>
  );
}

export default Comments;
