import React, { useState } from "react";
import RazorPayImg from "../../assets/Images/PaymentMethod/RazorPay.png";
import cashFreeImg from "../../assets/Images/PaymentMethod/CashFree.png";
import PhonePeImg from "../../assets/Images/PaymentMethod/Phonepe.png";
import PaytmImg from "../../assets/Images/PaymentMethod/Paytm.png";
import CODImg from "../../assets/Images/PaymentMethod/COD.png";
import { PiToggleLeftFill } from "react-icons/pi";
import { PiToggleRightFill } from "react-icons/pi";
import CashFreePaymentApiModal from "./CashFreePaymentApiModal";

const PaymentTypeSection = () => {
  const [toggleCODSwitch, setToggleCODSwitch] = useState(false);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);

  const closeCashFreeModal = () => {
    setShowApiKeyModal(false);
  };

  return (
    <div className=" mt-6">
      {showApiKeyModal ? (
        <CashFreePaymentApiModal closeModal={closeCashFreeModal} />
      ) : null}

      <div className=" flex items-center gap-6 justify-between">
        <div className=" flex items-center gap-4">
          <img src={RazorPayImg} alt="RazorPay-icon" />
          <p className=" font-medium text-[16px] leading-6 text-[#1A181E] ">
            Razorpay
          </p>
        </div>
        <button className=" px-4 py-1 text-[#146EB4] border border-[#146EB4] rounded">
          Set up
        </button>
      </div>

      <div className=" flex items-center gap-6 justify-between mt-4">
        <div className=" flex items-center gap-4">
          <img src={cashFreeImg} alt="cashFree-icon" />
          <p className=" font-medium text-[16px] leading-6 text-[#1A181E] ">
            Cashfree Payments
          </p>
        </div>

        <button
          className=" px-4 py-1 text-[#146EB4] border border-[#146EB4] rounded"
          onClick={() => setShowApiKeyModal(true)}
        >
          Set up
        </button>
      </div>

      <div className=" flex items-center gap-6 justify-between mt-4">
        <div className=" flex items-center gap-4">
          <img src={PhonePeImg} alt="phonePe-icon" />
          <p className=" font-medium text-[16px] leading-6 text-[#1A181E] ">
            PhonePe Payment Gateway
          </p>
        </div>

        <button className=" px-4 py-1 text-[#146EB4] border border-[#146EB4] rounded">
          Set up
        </button>
      </div>

      <div className=" flex items-center gap-6 justify-between mt-4">
        <div className=" flex items-center gap-4">
          <div className=" w-16 h-16 border border-[#E6E6E6] flex items-center justify-center rounded">
            <img src={PaytmImg} alt="paytm-icon" />
          </div>
          <p className=" font-medium text-[16px] leading-6 text-[#1A181E] ">
            Paytm Payment Gateway
          </p>
        </div>

        <button className=" px-4 py-1 text-[#146EB4] border border-[#146EB4] rounded">
          Set up
        </button>
      </div>

      <div className=" flex items-center gap-6 justify-between mt-4">
        <div className=" flex items-center gap-4">
          <div className=" flex items-center gap-4">
            <img src={CODImg} alt="COD-icon" />
            <div>
              <p className=" font-medium text-[16px] leading-6 text-[#1A181E] ">
                Cash on delivery
              </p>
              <p className=" text-[#4D4D4D] leading-5 text-[14px] font-normal font-Inter">
                Receive payments in cash upon delivery
              </p>
            </div>
          </div>
        </div>

        {toggleCODSwitch ? (
          <PiToggleRightFill
            fontSize="2.5rem"
            cursor="pointer"
            color="#D9D9D9"
            onClick={() => setToggleCODSwitch(!toggleCODSwitch)}
          />
        ) : (
          <PiToggleLeftFill
            fontSize="2.5rem"
            cursor="pointer"
            color="#D9D9D9"
            onClick={() => setToggleCODSwitch(!toggleCODSwitch)}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentTypeSection;
