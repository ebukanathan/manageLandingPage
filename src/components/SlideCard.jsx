import React from "react";

function SlideCard({ name, pic, opinion }) {
  return (
    <div className="w-1/3 mt-20 mb-8 rounded-lg bg-slate-50 relative flex flex-col flex-shrink-0 gap-3 justify-center items-center">
      <div className="w-[75px] h-[75px]  rounded-xl absolute top-[-20%]">
        <img src={pic} alt="" className="w-full h-full" />
      </div>

      <div className="mt-12 font-semibold text-xl">{name}</div>
      <div className="font-sm text-l text-center px-4 pb-6 ">{opinion}</div>
    </div>
  );
}

export default SlideCard;
