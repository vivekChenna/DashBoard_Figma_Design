import React from "react";

import OrdersAndAmount from "./OrdersAndAmount";
import OverViewSection from "./OverViewSection";
import AllTransactions from "./AllTransactions";

const Container = () => {
  return (
    <div className=" px-8 pt-8">
      <OverViewSection />
      <OrdersAndAmount />
      <AllTransactions />
    </div>
  );
};

export default Container;
