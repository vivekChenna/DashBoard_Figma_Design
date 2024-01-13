import React from "react";

const SingleOrder = ({ _id, balance, name, company }) => {
  return (
    <div className=" flex flex-col">
      <div className=" px-3 py-[14px] flex gap-10">
        <div className=" w-[246px] flex flex-col items-start gap-[-1px] flex-1">
          <p className=" font-Inter text-[14px] not-italic font-medium leading-5 text-[#146EB4]">
            {_id}
          </p>
        </div>

        <div className="w-[246px] flex flex-col items-start gap-[-1px] flex-1">
          <p className=" font-Inter text-[14px] not-italic font-normal leading-5 text-[#1A181E]">
            {name}
          </p>
        </div>

        <div className=" w-[246px] flex flex-col items-end flex-1 gap-[-1px]">
          <p className="font-Inter text-[14px] not-italic font-medium leading-[20px] text-[#1A181E]">
            {balance}
          </p>
        </div>

        <div className=" w-[246px] flex flex-col items-end flex-1 gap-[-1px]">
          <p className="font-Inter text-[14px] not-italic font-medium leading-[20px] text-[#1A181E]">
            {company}
          </p>
        </div>
      </div>

      <hr className=" border border-[#E6E6E6]" />
    </div>
  );
};

export default SingleOrder;
