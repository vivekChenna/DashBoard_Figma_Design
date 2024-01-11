import React from "react";

const TotalBox = ({ name, total }) => {
  return (
    <div className=" p-5 w-[566px] h-[118px] bg-white shadow-[0px 2px 6px 0px rgba(26, 24, 30, 0.04)] rounded-lg flex flex-col gap-4">
      <p className=" font-normal font-Inter leading-6 text-[16px]">{name}</p>
      <p className=" text-[32px] leading-[38px] not-italic font-medium font-Inter text-[#1A181E]">
        {total}
      </p>
    </div>
  );
};

export default TotalBox;
