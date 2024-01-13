import React, { useContext } from "react";
import RightArrowImg from "../assets/Images/right-arrow.png";
import ChevronRight from "../assets/Images/chevron-right.png";
import Context from "../context/context";

const NextPageSection = ({
  currentPage,
  HandleNextChange,
  HandlePreviousChange,
  dataLength,
  endIndex,
}) => {
  const arr = [11, 12, 13, 14, 15, 16, 17, 18];
  return (
    <div className=" flex items-center justify-center">
      <div className=" pt-[24px] w-[610px] flex gap-6 items-center">
        <button
          disabled={currentPage === 1}
          onClick={() => HandlePreviousChange()}
          className=" py-[6px] pl-[6px] pr-3 flex gap-[6px] border border-[#D9D9D9] w-[100px] rounded"
        >
          <img src={RightArrowImg} alt="right-arrow-img" />
          <p className=" font-Inter font-medium leading-5 not-italic text-[14px] text-[#4D4D4D]">
            Previous
          </p>
        </button>

        <div className=" flex gap-1 items-center">
          <div className=" py-[2px] w-7 h-7 flex gap-2 rounded flex-col justify-center items-center">
            <p className=" text-[14px] not-italic font-normal leading-5 font-Inter text-[#4D4D4D]">
              1
            </p>
          </div>

          <div className=" py-[2px] w-7 h-7 flex gap-2 rounded flex-col justify-center items-center">
            <p className=" text-[14px] not-italic font-normal leading-5 font-Inter text-[#4D4D4D]">
              ...
            </p>
          </div>

          <div className=" rounded px-2 py-[6px] w-7 h-7 flex flex-col justify-center items-center gap-[6px] bg-[#146EB4] ">
            <p className=" text-[#FFFFFF] leading-5 font-Inter text-[14px] not-italic font-medium">
              10
            </p>
          </div>

          {arr.map((val, index) => {
            return (
              <div
                key={index}
                className=" py-[2px] w-7 h-7 flex gap-2 rounded flex-col justify-center items-center"
              >
                <p className=" text-[14px] not-italic font-normal leading-5 font-Inter text-[#4D4D4D]">
                  {val}
                </p>
              </div>
            );
          })}
        </div>

        <button
          className=" py-[6px] pl-3 pr-[6px] flex gap-[6px] items-center border border-[#D9D9D9] rounded"
          onClick={() => HandleNextChange()}
          disabled={endIndex >= dataLength}
        >
          <p className=" font-Inter text-[14px] not-italic font-medium leading-5 text-[#4D4D4D] py-[1px]">
            Next
          </p>
          <img src={ChevronRight} alt="right-arrow-img" />
        </button>
      </div>
    </div>
  );
};

export default NextPageSection;
