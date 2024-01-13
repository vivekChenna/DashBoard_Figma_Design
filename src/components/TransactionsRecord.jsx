import React, { useEffect, useState } from "react";
import BoldSearch from "../assets/Search.png";
import SortImg from "../assets/Images/sort.png";
import DownloadImg from "../assets/Images/download.png";
import AllOrders from "./AllOrders";
import NextPageSection from "./NextPageSection";
import { UserData } from "../constants/constant";

const TransactionsRecord = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = UserData.slice(startIndex, endIndex);
  const [userData, setUserData] = useState(currentData);

  useEffect(() => {
    const HandleUserData = () => {
      setUserData(UserData.slice(startIndex, endIndex));
    };
    HandleUserData();
  }, [currentPage]);

  const HandleInputChange = (e) => {
    setInputSearch(e.target.value);
  };

  const HandleNextChange = () => {
    setCurrentPage(currentPage + 1);
  };

  const HandlePreviousChange = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="mt-[20px] px-3 pt-3 pb-6 bg-white rounded-lg relative  shadow-[0px 2px 6px 0px rgba(26, 24, 30, 0.04)]">
      {/*search by order id div  */}

      <div className=" w-60 px-4 py-[10px] flex gap-2 flex-1 items-center border border-[#D9D9D9] rounded-md">
        <img src={BoldSearch} alt="search-img" />
        <input
          type="text"
          placeholder="search by order ID..."
          className="font-Inter text-[14px] not-italic font-normal leading-5 text-[#999] outline-none"
          value={inputSearch}
          onChange={HandleInputChange}
        />
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

      <AllOrders
        inputSearch={inputSearch}
        userData={userData}
        setUserData={setUserData}
        startIndex={startIndex}
        endIndex={endIndex}
      />
      <NextPageSection
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        HandleNextChange={HandleNextChange}
        HandlePreviousChange={HandlePreviousChange}
        endIndex={endIndex}
        dataLength={UserData.length}
      />
    </div>
  );
};

export default TransactionsRecord;
