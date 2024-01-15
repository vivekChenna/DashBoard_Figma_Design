import React from "react";
import TotalBox from "./TotalBox";

const OrdersAndAmount = () => {
  return (
    <div className=" mt-6 flex gap-5">
      <TotalBox name="Online orders" total="231" />
      <TotalBox name="Amount received" total="₹23,92,312.19" />
    </div>
  );
};

export default OrdersAndAmount;
