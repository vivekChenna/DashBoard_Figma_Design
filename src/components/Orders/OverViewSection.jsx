import React from "react";
import ArrowImg from "../../assets/Images/OrdersPage/arrow.png";

const OverViewSection = ({ name, btnText }) => {
  return (
    <div className=" h-[36px] flex justify-between items-center">
      <p className=" font-Inter text-[20px] not-italic font-medium leading-7 text-[#1A181E]">
        {name}
      </p>

      <button className=" w-[137px] flex-shrink-0 rounded py-[6px] border border-[#D9D9D9] flex items-center bg-white">
        <p className=" leading-6 font-normal not-italic font-Inter text-[16px] text-[#4D4D4D] ml-[14px] mr-[7px]">
          {btnText}
        </p>
        <img src={ArrowImg} alt="arrow-img" className=" w-4 h-4 my-[10px]" />
      </button>
    </div>
  );
};

export default OverViewSection;
