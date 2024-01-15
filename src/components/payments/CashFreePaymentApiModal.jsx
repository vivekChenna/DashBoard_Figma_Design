import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import InfoImg from "../../assets/Images/CashFreeModal/Info.png";
import { Link } from "react-router-dom";
import PaymentMethods from "./PaymentMethods";

const CashFreePaymentApiModal = ({ closeModal }) => {
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);

  const HandleSubmitClick = (e) => {
    e.preventDefault();
    setIsOpenPaymentModal(true);
  };

  const closePaymentMethodsModal = () => {
    setIsOpenPaymentModal(false);
    closeModal();
  };

  return (
    <div className=" fixed inset-0 bg-[#1A181E] bg-opacity-65 flex items-center justify-center">
      {isOpenPaymentModal ? (
        <PaymentMethods closeModal={closePaymentMethodsModal} />
      ) : (
        <div className=" w-[564px] h-[442px] bg-white rounded-md p-6">
          <div className=" flex items-center justify-between">
            <h1 className=" font-medium text-[18px] leading-[26px]">
              Set up Cashfree Payments
            </h1>
            <ImCross
              fontSize="1.5rem"
              color="black"
              cursor="pointer"
              onClick={() => closeModal()}
            />
          </div>
          <p className=" text-[14px] leading-5 font-normal text-[#4D4D4D]">
            Please enter your Cashfree API Keys. You can find your API Keys on
          </p>
          <Link
            to="#"
            className=" text-[#146EB4] underline text-[14px] leading-5 font-medium"
          >
            Cashfree API Key DashBoard
          </Link>

          <div className=" mt-4 flex items-center justify-center px-4 py-2 gap-2 bg-[#ececf4] rounded">
            <img src={InfoImg} alt="info-img" />
            <p className=" font-Inter text-[14px] not-italic font-normal leading-5 text-[#4D4D4D]">
              Don't have an Cashfree account?{" "}
              <Link
                to="#"
                className=" text-[14px] text-[#444444] font-Inter not-italic font-medium leading-5 underline"
              >
                Create now
              </Link>
            </p>
          </div>

          {/* api form */}

          <form className=" flex flex-col mt-6" onSubmit={HandleSubmitClick}>
            <label htmlFor="apiId">
              API ID<sup className=" text-red-800">*</sup>
            </label>
            <input
              id="apiId"
              name="apiId"
              type="text"
              placeholder="Enter merchant id"
              required
              className=" px-3 py-2 border border-[#D9D9D9] mt-2 rounded text-[#999999] outline-none"
            />
            <label htmlFor="key" className=" mt-5">
              Secrey Key<sup className=" text-red-800">*</sup>
            </label>
            <input
              id="key"
              name="key"
              type="text"
              placeholder="Enter public key"
              required
              className="px-3 py-2 border border-[#D9D9D9] mt-2 rounded text-[#999999] outline-none"
            />
            <button className=" px-6 py-2 bg-[#146EB4] opacity-40 w-max rounded text-white mt-8 self-center">
              Continue
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CashFreePaymentApiModal;
