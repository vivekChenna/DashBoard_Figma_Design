import { useState } from "react";
import { PiToggleLeftFill } from "react-icons/pi";
import { PiToggleRightFill } from "react-icons/pi";

const ManualPaymentMethod = () => {
  const [toggleManualSwitch, setToggleManualSwitch] = useState(false);
  return (
    <div className=" md:mx-0 mx-4 mt-6 md:p-4 p-2 bg-white md:w-[760px] h-[114px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded">
      <div className="flex items-center justify-between">
        <p>Manual payment methods</p>
        {toggleManualSwitch ? (
          <PiToggleRightFill
            fontSize="2.5rem"
            cursor="pointer"
            color="#D9D9D9"
            onClick={() => setToggleManualSwitch(!toggleManualSwitch)}
          />
        ) : (
          <PiToggleLeftFill
            fontSize="2.5rem"
            cursor="pointer"
            color="#D9D9D9"
            onClick={() => setToggleManualSwitch(!toggleManualSwitch)}
          />
        )}
      </div>
      <p className=" text-[14px] font-Inter font-normal leading-5 text-[#808080] w-[90%]">
        Payments that are made outside online store.Allows you to accept
        cash,check or other custom forms of payment.
      </p>
    </div>
  );
};

export default ManualPaymentMethod;
