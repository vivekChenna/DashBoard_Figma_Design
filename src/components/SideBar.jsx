import React from "react";
import NishyanIcon from "../assets/Images/OrdersPage/NishyanIcon.png";
import ChevronDownImg from "../assets/Images/OrdersPage/chevron_down.png";
import NavbarIcon from "../assets/Images/OrdersPage/Navbar_Icon.png";
import OrdersIcon from "../assets/Images/OrdersPage/Orders_Icon.png";
import ProductsIcon from "../assets/Images/OrdersPage/Products_Icon.png";
import DeliveryIcon from "../assets/Images/OrdersPage/Delivery_Icon.png";
import MarketingIcon from "../assets/Images/OrdersPage/Marketing_Icon.png";
import PaymentsIcon from "../assets/Images/OrdersPage/Payments_Icon.png";
import PluginIcon from "../assets/Images/OrdersPage/Plugin_Icon.png";
import DiscountsIcon from "../assets/Images/OrdersPage/Discounts_Icon.png";
import ToolsIcon from "../assets/Images/OrdersPage/Tools_Icon.png";
import AppearanceIcon from "../assets/Images/OrdersPage/Appearance_Icon.png";
import UserIcon from "../assets/Images/OrdersPage/UserIcon.png";
import WalletIcon from "../assets/Images/OrdersPage/walletIcon.png";
import { useContext } from "react";
import Context from "../context/context.js";
import { Link } from "react-router-dom";

const SideBar = () => {
  // flex flex-col justify-between

  const { isSideBarOpen, setIsSideBarOpen } = useContext(Context);

  return (
    <div
      className={
        isSideBarOpen
          ? ` h-screen sticky top-0 block lg:block w-[224px] bg-[#1E2640] py-4 px-[10px]`
          : `hidden md:block sticky top-0 w-[224px] bg-[#1E2640] py-4 px-[10px] h-screen`
      }
    >
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

        <Link to="/" onClick={() => setIsSideBarOpen(false)}>
          <button className=" px-4 py-2 flex gap-3 flex-1 items-center mt-[24px] hover:bg-[#FFFFFF1A] rounded w-full">
            <div className=" w-[20px] h-[20px]">
              <img src={NavbarIcon} alt="navbar-icon" />
            </div>
            <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80 hover:opacity-100">
              Home
            </p>
          </button>
        </Link>

        <Link to="/orders" onClick={() => setIsSideBarOpen(false)}>
          <button className=" px-4 py-2 flex gap-3 flex-1 items-center mt-2 hover:bg-[#FFFFFF1A] rounded w-full">
            <div className=" w-[20px] h-[20px]">
              <img src={OrdersIcon} alt="Orders-icon" />
            </div>
            <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80 hover:opacity-100">
              Orders
            </p>
          </button>
        </Link>

        <button className=" px-4 py-2 flex gap-3 flex-1 items-center mt-2 hover:bg-[#FFFFFF1A] rounded">
          <div className=" w-[20px] h-[20px]">
            <img src={ProductsIcon} alt="products-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80 hover:opacity-100">
            Products
          </p>
        </button>

        <button className=" px-4 py-2 flex gap-3 flex-1 items-center mt-2 hover:bg-[#FFFFFF1A] rounded">
          <div className=" w-[20px] h-[20px]">
            <img src={DeliveryIcon} alt="delivery-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80 hover:opacity-100">
            Delivery
          </p>
        </button>

        <button className=" px-4 py-2 flex gap-3 flex-1 items-center mt-2 hover:bg-[#FFFFFF1A] rounded">
          <div className=" w-[20px] h-[20px]">
            <img src={MarketingIcon} alt="marketing-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80 hover:opacity-100">
            Marketing
          </p>
        </button>

        <Link to="/payments" onClick={() => setIsSideBarOpen(false)}>
          <button className=" px-4 py-2 flex gap-3 flex-1 items-center mt-2 hover:bg-[#FFFFFF1A] rounded w-full">
            <div className=" w-[20px] h-[20px]">
              <img src={PaymentsIcon} alt="payments-icon" />
            </div>
            <p className="text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80 hover:opacity-100">
              Payments
            </p>
          </button>
        </Link>

        <button className=" px-4 py-2 flex gap-3 flex-1 items-center mt-2 hover:bg-[#FFFFFF1A] rounded">
          <div className=" w-[20px] h-[20px]">
            <img src={ToolsIcon} alt="tools-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80 hover:opacity-100">
            Tools
          </p>
        </button>

        <button className=" px-4 py-2 flex gap-3 flex-1 items-center mt-2 hover:bg-[#FFFFFF1A] rounded">
          <div className=" w-[20px] h-[20px]">
            <img src={DiscountsIcon} alt="discounts-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80 hover:opacity-100">
            Discounts
          </p>
        </button>

        <button className=" px-4 py-2 flex gap-3 flex-1 items-center mt-2 hover:bg-[#FFFFFF1A] rounded">
          <div className=" w-[20px] h-[20px]">
            <img src={UserIcon} alt="user-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80 hover:opacity-100">
            Audience
          </p>
        </button>

        <button className=" px-4 py-2 flex gap-3 flex-1 items-center mt-2 hover:bg-[#FFFFFF1A] rounded">
          <div className=" w-[20px] h-[20px]">
            <img src={AppearanceIcon} alt="appearance-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80 hover:opacity-100">
            Appearance
          </p>
        </button>

        <button className=" px-4 py-2 flex gap-3 flex-1 items-center mt-2 hover:bg-[#FFFFFF1A] rounded">
          <div className=" w-[20px] h-[20px]">
            <img src={PluginIcon} alt="plugins-icon" />
          </div>
          <p className=" text-[14px] not-italic font-Inter font-medium leading-5 text-[#FFF] opacity-80 hover:opacity-100">
            Plugins
          </p>
        </button>
      </div>

      <div className=" my-auto md:mt-[150px] px-3 py-[6px] mx-2 bg-[#353C53] flex gap-3 rounded">
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
