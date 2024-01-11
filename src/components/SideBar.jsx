import React from "react";
import NishyanIcon from "../assets/Images/NishyanIcon.png";
import ChevronDownImg from "../assets/Images/chevron_down.png";
import NavbarIcon from "../assets/Images/Navbar_Icon.png";
import OrdersIcon from "../assets/Images/Orders_Icon.png";
import ProductsIcon from "../assets/Images/Products_Icon.png";
import DeliveryIcon from "../assets/Images/Delivery_Icon.png";
import MarketingIcon from "../assets/Images/Marketing_Icon.png";
import PaymentsIcon from "../assets/Images/Payments_Icon.png";
import PluginIcon from "../assets/Images/Plugin_Icon.png";
import DiscountsIcon from "../assets/Images/Discounts_Icon.png";
import ToolsIcon from "../assets/Images/Tools_Icon.png";
import AppearanceIcon from "../assets/Images/Appearance_Icon.png";
import UserIcon from "../assets/Images/UserIcon.png";
import WalletIcon from "../assets/Images/walletIcon.png";

const SideBar = () => {
  return (
    <div className=" w-[224px] bg-[#1E2640] h-[1482px] py-4 px-[10px] flex flex-col justify-between">
      <div className=" flex flex-col">
        <div className=" w-[192px] mx-2 flex gap-3 items-center">
          <div className=" w-[39px] h-[39px]">
            <img src={NishyanIcon} alt="app-icon" className="  bg-no-repeat" />
          </div>

          <div className=" w-[108px] flex flex-col gap-1 justify-center items-start flex-1">
            <p className=" font-Inter text-[15px] font-medium not-italic leading-[22px] text-[#FFF]">
              Nishyan
            </p>
            <p className=" font-Inter text-[13px] not-italic font-normal leading-4 underline opacity-80 text-[#FFF]">
              Visit store
            </p>
          </div>

          <div className=" w-[20px] h-[20px]">
            <img src={ChevronDownImg} alt="down-arrow-img" />
          </div>
        </div>

        <div className=" px-4 py-2 flex gap-3 flex-1 items-center mt-[24px]">
          <div className=" w-[20px] h-[20px]">
            <img src={NavbarIcon} alt="navbar-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80">
            Home
          </p>
        </div>

        <div className=" px-4 py-2 flex gap-3 flex-1 items-center mt-1">
          <div className=" w-[20px] h-[20px]">
            <img src={OrdersIcon} alt="Orders-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80">
            Orders
          </p>
        </div>

        <div className=" px-4 py-2 flex gap-3 flex-1 items-center mt-1">
          <div className=" w-[20px] h-[20px]">
            <img src={ProductsIcon} alt="products-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80">
            Products
          </p>
        </div>

        <div className=" px-4 py-2 flex gap-3 flex-1 items-center mt-1">
          <div className=" w-[20px] h-[20px]">
            <img src={DeliveryIcon} alt="delivery-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80">
            Delivery
          </p>
        </div>

        <div className=" px-4 py-2 flex gap-3 flex-1 items-center mt-1">
          <div className=" w-[20px] h-[20px]">
            <img src={MarketingIcon} alt="marketing-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80">
            Marketing
          </p>
        </div>

        <div className=" px-4 py-2 flex gap-3 flex-1 items-center mt-1 bg-[#FFFFFF1A] rounded">
          <div className=" w-[20px] h-[20px]">
            <img src={PaymentsIcon} alt="payments-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF]">
            Payments
          </p>
        </div>

        <div className=" px-4 py-2 flex gap-3 flex-1 items-center mt-1">
          <div className=" w-[20px] h-[20px]">
            <img src={ToolsIcon} alt="tools-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80">
            Tools
          </p>
        </div>

        <div className=" px-4 py-2 flex gap-3 flex-1 items-center mt-1">
          <div className=" w-[20px] h-[20px]">
            <img src={DiscountsIcon} alt="discounts-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80">
            Discounts
          </p>
        </div>

        <div className=" px-4 py-2 flex gap-3 flex-1 items-center mt-1">
          <div className=" w-[20px] h-[20px]">
            <img src={UserIcon} alt="user-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80">
            Audience
          </p>
        </div>

        <div className=" px-4 py-2 flex gap-3 flex-1 items-center mt-1">
          <div className=" w-[20px] h-[20px]">
            <img src={AppearanceIcon} alt="appearance-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80">
            Appearance
          </p>
        </div>

        <div className=" px-4 py-2 flex gap-3 flex-1 items-center mt-1">
          <div className=" w-[20px] h-[20px]">
            <img src={PluginIcon} alt="plugins-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80">
            Plugins
          </p>
        </div>
      </div>

      <div className="px-3 py-[6px] mx-2 bg-[#353C53] flex gap-3 rounded">
        <div className=" w-9 h-9 p-[6px] bg-[#FFFFFF1A] rounded">
          <img src={WalletIcon} alt="wallet-icon" />
        </div>

        <div className=" flex flex-col gap-[2px]">
          <p className=" font-Inter text-[13px] not-italic font-normal leading-4 text-[#FFF] opacity-80">
            Available credits
          </p>
          <p className=" font-Inter text-[16px] not-italic font-medium leading-6 text-[#FFF]">
            222.10
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
