import React from "react";
import HelpImg from "../assets/Images/Help.png";
import SearchImg from "../assets/Images/search.png";
import MenuImg from "../assets/Images/Menu.png";
import GroupImg from "../assets/Images/Group.png";

const Header = () => {
  return (
    <div className=" w-[1216px] px-[32px] py-[12px] flex items-center gap-4 h-[64px] bg-[#FFF] border-[#D9D9D9] border-b">
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

      <div className=" w-[400px] h-[40px] py-[9px] px-4 flex items-center gap-2 bg-[#F2F2F2] rounded-md">
        {/* search div */}
        <img src={SearchImg} alt="search-img" />
        <div className=" w-[213px] font-normal text-[15px] leading-[22px] text-[#808080] font-Inter">
          Search features,tutorials, etc.
        </div>
      </div>

      <div className=" w-[360px] flex items-start justify-end gap-2">
        {/* message div  */}

        <div className=" w-[92px] h-[40px] gap-3 flex items-start">
          <div className=" w-[40px] h-[40px] p-[10px] rounded-full bg-[#E6E6E6]">
            <img src={GroupImg} alt="group-img" />
          </div>
          <img src={MenuImg} alt="menu-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
