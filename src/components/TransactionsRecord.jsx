import React from "react";
import BoldSearch from "../assets/Search.png";
import SortImg from "../assets/Images/sort.png";
import DownloadImg from "../assets/Images/download.png";
import AllOrders from "./AllOrders";
import NextPageSection from "./NextPageSection";

const TransactionsRecord = () => {
  return (
    <div className="mt-[20px] px-3 pt-3 pb-6 bg-white rounded-lg relative">
      {/*search by order id div  */}

      <div className=" w-60 px-4 py-[10px] flex gap-2 flex-1 items-center border border-[#D9D9D9] rounded-md">
        <div className=" w-[14px] h-[14px]">
          <img src={BoldSearch} alt="search-img" />
        </div>
        <p className=" font-Inter text-[14px] not-italic font-normal leading-5">
          Search by order ID...
        </p>
      </div>

      <div className=" flex gap-3 absolute top-3 right-3">
        <div className=" px-3 py-[6px] flex gap-[6px] items-center border border-[#D9D9D9] rounded">
          <p className=" font-Inter text-[16px] not-italic font-normal leading-6">
            Sort
          </p>
          <div className=" w-[16px] h-[16px]">
            <img src={SortImg} alt="sort-img" />
          </div>
        </div>
        <div className=" p-2 border border-[#D9D9D9] rounded">
          <img src={DownloadImg} alt="download-img" />
        </div>
      </div>

      <AllOrders />
      <NextPageSection />
    </div>
  );
};

export default TransactionsRecord;
