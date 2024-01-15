import React from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import VisaCardImg from "../../assets/Images/PaymentMethod/VisaCard.png";
import ToggleSymbol from "../../assets/Images/PaymentMethod/Symbols.png";
import MaestroCard from "../../assets/Images/PaymentMethod/maestro.png";
import MasterCard from "../../assets/Images/PaymentMethod/MasterCard.png";
import RuPayCard from "../../assets/Images/PaymentMethod/Rupay.png";
import AmexCard from "../../assets/Images/PaymentMethod/AMEXIcon.png";
import DinerClub from "../../assets/Images/PaymentMethod/DinerClub.png";
import PaytmIcon from "../../assets/Images/PaymentMethod/Paytm.png";
import AirtelIcon from "../../assets/Images/PaymentMethod/Airtel.png";
import AmazonIcon from "../../assets/Images/PaymentMethod/Amazon.png";

const PaymentMethods = ({ closeModal }) => {
  return (
    <div className=" w-[564px] bg-white rounded-md pb-3">
      <div className=" px-6 py-4 flex items-center justify-between">
        <h1 className=" font-medium text-[18px] leading-[26px] text-[#1A181E]">
          Choose payment methods
        </h1>
        <ImCross
          cursor="pointer"
          fontSize="1.5rem"
          color="black"
          onClick={() => closeModal()}
        />
      </div>

      <div className=" h-[598px] px-6 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
        {/* visa card */}
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-4">
            <img src={VisaCardImg} alt="visa-card" />
            <p className=" font-medium text-[16px] leading-6">Visa</p>
          </div>
          <img src={ToggleSymbol} alt="toggle-symbol" />
        </div>

        {/* master card */}
        <div className=" flex items-center justify-between mt-4">
          <div className=" flex items-center gap-4">
            <img src={MasterCard} alt="master-card" />
            <p className=" font-medium text-[16px] leading-6">MasterCard</p>
          </div>
          <img src={ToggleSymbol} alt="toggle-symbol" />
        </div>

        {/* Maestro card */}
        <div className=" flex items-center justify-between mt-4">
          <div className=" flex items-center gap-4">
            <div className=" w-14 h-14 rounded flex items-center justify-center bg-[#F2F2F2]">
              <img src={MaestroCard} alt="Maestro-card" />
            </div>
            <p className=" font-medium text-[16px] leading-6">Maestro</p>
          </div>
          <img src={ToggleSymbol} alt="toggle-symbol" />
        </div>

        {/* Rupay Card */}

        <div className=" flex items-center justify-between mt-4">
          <div className=" flex items-center gap-4">
            <div className=" w-14 h-14 rounded flex items-center justify-center bg-[#F2F2F2]">
              <img src={RuPayCard} alt="Rupay-card" />
            </div>
            <p className=" font-medium text-[16px] leading-6">Rupay</p>
          </div>
          <img src={ToggleSymbol} alt="toggle-symbol" />
        </div>

        {/* AMEX Card */}

        <div className=" flex items-center justify-between mt-4">
          <div className=" flex items-center gap-4">
            <div className=" w-14 h-14 rounded flex items-center justify-center bg-[#F2F2F2]">
              <img src={AmexCard} alt="amex-card" />
            </div>
            <p className=" font-medium text-[16px] leading-6">
              American Express
            </p>
          </div>
          <img src={ToggleSymbol} alt="toggle-symbol" />
        </div>

        {/* Diner Club */}

        <div className=" flex items-center justify-between mt-4">
          <div className=" flex items-center gap-4">
            <img src={DinerClub} alt="diner-club-img" />
            <p className=" font-medium text-[16px] leading-6">Diner Club</p>
          </div>
          <img src={ToggleSymbol} alt="toggle-symbol" />
        </div>

        {/* Paytm */}

        <div className=" flex items-center justify-between mt-4">
          <div className=" flex items-center gap-4">
            <div className=" w-14 h-14 rounded flex items-center justify-center bg-[#F2F2F2]">
              <img src={PaytmIcon} alt="paytm" />
            </div>
            <p className=" font-medium text-[16px] leading-6">Paytm</p>
          </div>
          <img src={ToggleSymbol} alt="toggle-symbol" />
        </div>

        {/* Airtel  */}

        <div className=" flex items-center justify-between mt-4">
          <div className=" flex items-center gap-4">
            <img src={AirtelIcon} alt="Airtel-icon" />
            <p className=" font-medium text-[16px] leading-6">Airtel Money</p>
          </div>
          <img src={ToggleSymbol} alt="toggle-symbol" />
        </div>

        {/* Amazon pay */}

        <div className=" flex items-center justify-between mt-4">
          <div className=" flex items-center gap-4">
            <img src={AmazonIcon} alt="Amazon-icon" />
            <p className=" font-medium text-[16px] leading-6">Amazon Pay</p>
          </div>
          <img src={ToggleSymbol} alt="toggle-symbol" />
        </div>
      </div>

      <div className=" pt-3 border-t border-[#E6E6E6] flex items-center justify-center">
        <div className=" flex flex-col gap-2">
          <button className=" px-6 py-1 w-[143px] h-10 rounded bg-[#146EB4] text-[#FFFFFF]">
            Finish Setup
          </button>
          <Link
            to="#"
            className=" font-medium text-[16px] leading-6 text-[#4D4D4D] underline"
          >
            Edit Cashfree details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
