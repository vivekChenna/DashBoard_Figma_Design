import React from "react";
import AlertImg from "../../assets/Images/HomePageImages/Alert.png";
import OverViewSection from "../Orders/OverViewSection";
import ChartSection from "./ChartSection";
import FooterSection from "./FooterSection";

const HomePage = () => {
  return (
    <div className=" px-8 pt-8 flex flex-col">
      {/* header component */}

      <div className=" md:px-3 md:py-1 md:mx-0 mx-2 py-2 px-3 bg-[#E50B201A] md:h-[54px] flex md:flex-row md:gap-0 gap-2 flex-col items-center justify-between border border-red-400  rounded-md">
        <div className=" flex items-center gap-[10px] ">
          <img src={AlertImg} alt="alert-img" />
          <div>
            <p className=" font-Inter text-[14px] not-italic font-medium leading-5 text-[#1A181E]">
              Dukaan Pay is no longer operational!
            </p>
            <p className=" font-Inter text-[13px] not-italic font-medium leading-4 text-[#4D4D4D]">
              To continue receiving online payments from your customers, please
              set up a new payment provider.
            </p>
          </div>
        </div>
        <button className=" px-3 py-[6px] bg-red-600 text-[#FFFFFF] rounded">
          Set up new payment provider
        </button>
      </div>

      <div className=" mt-8">
        <OverViewSection name="OverView" btnText="Lifetime" />
        <ChartSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default HomePage;
