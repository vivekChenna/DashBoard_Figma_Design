import React from "react";
import TransactionsHeader from "./TransactionsHeader";
import TransactionsRecord from './TransactionsRecord';

const AllTransactions = () => {
  return (
    <div className=" pt-8">
      <TransactionsHeader />
      <TransactionsRecord/>
    </div>
  );
};

export default AllTransactions;
