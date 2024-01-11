import React from "react";

const SingleOrder = () => {
  return (
    <div className=" flex flex-col">
      <div className=" px-3 py-[14px] flex gap-10">
        <div className=" w-[246px] flex flex-col items-start gap-[-1px] flex-1">
          <p className=" font-Inter text-[14px] not-italic font-medium leading-5 text-[#146EB4]">
            #281209
          </p>
        </div>

        <div className="w-[246px] flex flex-col items-start gap-[-1px] flex-1">
          <p className=" font-Inter text-[14px] not-italic font-normal leading-5 text-[#1A181E]">
            7 July, 2023
          </p>
        </div>

        <div className=" w-[246px] flex flex-col items-end flex-1 gap-[-1px]">
          <p className="font-Inter text-[14px] not-italic font-medium leading-[20px] text-[#1A181E]">
            ₹1,278.23
          </p>
        </div>

        <div className=" w-[246px] flex flex-col items-end flex-1 gap-[-1px]">
          <p className="font-Inter text-[14px] not-italic font-medium leading-[20px] text-[#1A181E]">
            ₹22
          </p>
        </div>
      </div>

      <hr className=" border border-[#E6E6E6]" />
    </div>
  );
};

export default SingleOrder;
