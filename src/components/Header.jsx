import React from "react";
import HelpImg from "../assets/Images/OrdersPage/Help.png";
import SearchImg from "../assets/Images/OrdersPage/search.png";
import MenuImg from "../assets/Images/OrdersPage/Menu.png";
import GroupImg from "../assets/Images/OrdersPage/Group.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import Context from "../context/context.js";
import { useLocation } from "react-router-dom";
import ReportIssueImg from "../assets/Images/PaymentsHeader/ReportIssue.png";
import DownloadImg from "../assets/Images/PaymentsHeader/Download.png";
import HamburgerImg from "../assets/Images/PaymentsHeader/Hamburger.png";

const Header = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(Context);
  const location = useLocation();
  return (
    <div className=" sticky top-0 px-3 md:px-[32px] py-[12px] flex items-center justify-between h-[64px] bg-[#FFF] border-[#D9D9D9] border-b">
      <div className=" md:hidden px-2 cursor-pointer">
        <GiHamburgerMenu
          fontSize="1.3rem"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        />
      </div>

      {location.pathname === "/" ? (
        <h1 className=" font-Inter font-medium text-[20px] leading-7 text-[#1A181E] w-[300px]">
          Home
        </h1>
      ) : (
        <div className=" w-[360px] flex gap-4 items-center">
          {/*payment div */}
          <p className=" text-[15px] font-normal leading-[22px] not-italic text-[#1A181E] font-Inter">
            Payments
          </p>

          <div className=" flex gap-[6px] items-center">
            <div className=" w-[14px] h-[14px]">
              <img src={HelpImg} alt="help-img" />
            </div>
            <p className=" leading-4 text-[12px] font-normal text-[#4D4D4D] font-Inter">
              How it Works
            </p>
          </div>
        </div>
      )}

      <div className=" w-[400px] h-[40px] py-[9px] px-4 flex items-center gap-2 bg-[#F2F2F2] rounded-md">
        {/* search div */}
        <img src={SearchImg} alt="search-img" />
        <input
          type="text"
          placeholder="Search features,tutorials, etc."
          className=" w-[92%] bg-[#F2F2F2] outline-none font-normal text-[15px] leading-[22px] text-[#808080] font-Inter"
        />
      </div>

      {location.pathname === "/payments" || location.pathname === "/" ? (
        <div className=" w-[360px] h-[50px] flex justify-end">
          <div className=" flex items-center gap-3">
            <div className="flex items-center gap-[6px]">
              <img src={ReportIssueImg} alt="report-issue-img" />
              <p className=" font-Inter font-medium text-[13px] leading-4">
                Need help?
              </p>
            </div>
            <button className=" w-[40px] h-[40px] rounded-full bg-[#E6E6E6] flex items-center justify-center">
              <img src={DownloadImg} alt="download-img" />
            </button>
            <button className=" w-[40px] h-[40px] rounded-full bg-[#E6E6E6] flex items-center justify-center">
              <img src={HamburgerImg} alt="hamburger-img" />
            </button>
          </div>
        </div>
      ) : (
        <div className=" w-[360px] flex items-start justify-end gap-2">
          {/* message div  */}

          <div className=" w-[92px] h-[40px] gap-3 flex items-start">
            <div className=" w-[40px] h-[40px] p-[10px] rounded-full bg-[#E6E6E6]">
              <img src={GroupImg} alt="group-img" />
            </div>
            <img src={MenuImg} alt="menu-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
