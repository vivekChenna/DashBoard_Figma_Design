import React from "react";
import { Link } from "react-router-dom";
import RedirectImg from "../../assets/Images/HomePageImages/Redirect.png";
import whatsAppIcon from "../../assets/Images/HomePageImages/Whatsapp.png";
import TwitterIcon from "../../assets/Images/HomePageImages/Twitter.png";
import FacebookIcon from "../../assets/Images/HomePageImages/Facebook.png";
import RightIcon from "../../assets/Images/HomePageImages/RightArrow.png";

const ShareStore = () => {
  return (
    <div className=" w-[368px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md">
      <div className=" w-[368px] bg-white px-[20px] pt-[20px]">
        <h1 className=" font-Inter font-medium text-[20px] leading-7">
          Share Store link
        </h1>
        <p className=" mt-[6px]">
          Customers can visit the following link and place their orders.
        </p>

        {/* manosuperstore */}
        <Link to="#" className="flex items-center gap-1 mt-3">
          <p className=" text-[#EE741F] font-medium text-[18px] leading-[26px]">
            manosuperstore.com
          </p>
          <img src={RedirectImg} alt="redirect-img" />
        </Link>

        {/* share via */}
        <div className=" py-8 flex items-center gap-4">
          <p className=" font-Inter font-medium text-[16px] leading-6">
            Share via
          </p>
          <Link to="#">
            <img src={whatsAppIcon} alt="whatsapp-icon" />
          </Link>
          <Link to="#">
            <img src={FacebookIcon} alt="facebook-icon" />
          </Link>
          <Link to="#">
            <img src={TwitterIcon} alt="twitter-icon" />
          </Link>
        </div>

        {/* footer div */}
      </div>
      <Link
        to="#"
        className=" px-4 pt-[18px] pb-[17px] text-center font-Inter font-medium text-[16px] leading-6 bg-[#F2F2F2] text-[#1E2640] flex items-center gap-1 justify-center"
      >
        Get your custom domain
        <img src={RightIcon} alt="right-arrow-icon" />
      </Link>
    </div>
  );
};

export default ShareStore;
