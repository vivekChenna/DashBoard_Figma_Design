import React from "react";
import ArrowImg from "../assets/Images/arrow.png";

const OverViewSection = () => {
  return (
    <div className="w-[1152px] h-[36px] flex justify-between self-stretch items-center">
      <p className=" font-Inter text-[20px] not-italic font-medium leading-7 text-[#1A181E]">
        OverView
      </p>

      <div className=" w-[137px] flex-shrink-0 rounded py-[6px] border border-[#D9D9D9] flex items-center">
        <p className=" leading-6 font-normal not-italic font-Inter text-[16px] text-[#4D4D4D] ml-[14px] mr-[7px]">
          Last Month
        </p>
        <img src={ArrowImg} alt="arrow-img" className=" w-4 h-4 my-[10px]" />
      </div>
    </div>
  );
};

export default OverViewSection;
