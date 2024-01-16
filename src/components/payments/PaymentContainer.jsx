import React from "react";
import PaymentTypeSection from "./PaymentTypeSection";
import ManualPaymentMethod from "./ManualPaymentMethod";

const PaymentContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" flex flex-col md:w-[765px] h-full items-center">
        {/* payments container */}
        <div className=" md:w-[760px] h-[502px] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded mt-8 md:p-6 p-3 md:mx-0 mx-4">
          <h1 className=" font-medium text-[16px] leading-6 text-[##1A181E]">
            Payment Providers
          </h1>
          <p className=" text-[#808080]">
            Set up payment providers to accept payments from your customers
          </p>
          <PaymentTypeSection />
        </div>
        <ManualPaymentMethod />
        <button className=" md:mx-0 mx-4 px-6 py-1 bg-[#146EB4] opacity-40 text-[#FFFFFF] rounded self-end mt-8">
          Finish
        </button>
      </div>
    </div>
  );
};

export default PaymentContainer;
