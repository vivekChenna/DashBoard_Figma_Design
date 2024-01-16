import React from "react";
import NavBarIcon from "../../assets/Images/HomePageImages/Navbar.png";
import DeliveryIcon from "../../assets/Images/HomePageImages/Delivery.png";
import { Link } from "react-router-dom";

const PendingSection = () => {
  return (
    <div className="md:w-[368px] rounded-lg">
      <div className=" flex items-center justify-between">
        <p className=" font-Inter font-medium text-[20px] leading-7 text-[#1A181E]">
          Orders
        </p>
        <Link className=" underline text-[#808080] font-medium text-[18px] leading-[26px]">
          View all
        </Link>
      </div>
      <div className="bg-white mt-6 p-5 flex flex-col gap-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg">
        <div className=" w-8 h-8">
          <img src={NavBarIcon} alt="navbar-icon" />
        </div>
        <p className=" font-Inter font-medium text-[16px] leading-6">
          13 pending orders worth ₹2,999
        </p>
      </div>

      <div className="bg-white mt-6 p-5 flex flex-col gap-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg">
        <div className=" w-8 h-8">
          <img src={DeliveryIcon} alt="delivery-icon" />
        </div>
        <p className=" font-Inter font-medium text-[16px] leading-6">
          8 orders to ship
        </p>
      </div>
    </div>
  );
};

export default PendingSection;
