import React from "react";
import InfoImg from "../assets/Images/Info.png";
import TriangleIcon from "../assets/Images/Triangle-Icon.png";
import SingleOrder from "./SingleOrder";

const AllOrders = () => {
  return (
    <div className=" mt-3">
      {/* heading div */}
      <div className=" px-3 py-[10px] flex gap-10 bg-[#F2F2F2] rounded-lg">
        <div className=" w-[246px] flex-1">
          <p className=" font-Inter text-[14px] not-italic font-medium leading-5 text-[#4D4D4D]">
            Order ID
          </p>
        </div>

        <div className=" w-[246px] flex flex-1 items-center gap-1">
          <p className=" font-Inter text-[14px] not-italic font-medium leading-[20px] text-[#4D4D4D]">
            Order Date
          </p>
          <img src={TriangleIcon} alt="drop-down-img" />
        </div>

        <div className=" w-[246px] flex flex-col items-end flex-1 gap-[-1px]">
          <p className="font-Inter text-[14px] not-italic font-medium leading-[20px] text-[#4D4D4D]">
            Order Amount
          </p>
        </div>

        <div className=" w-[246px] flex flex-col items-end flex-1 gap-[-1px]">
          <div className=" flex gap-1 items-center">
            <p className="font-Inter text-[14px] not-italic font-medium leading-[20px] text-[#4D4D4D]">
              Transaction fees
            </p>
            <div className=" w-[14px] h-[14px]">
              <img src={InfoImg} alt="info-img" />
            </div>
          </div>
        </div>
      </div>

      <div>
        {Array(19)
          .fill("")
          .map(() => {
            return <SingleOrder />;
          })}
      </div>
    </div>
  );
};

export default AllOrders;
