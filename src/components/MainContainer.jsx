import React from "react";
import Header from "./Header";
import Container from "./Container";
import { Routes, Route } from "react-router-dom";
import PaymentContainer from "../components/payments/PaymentContainer";

const MainContainer = () => {
  return (
    <div className=" w-full sticky top-0 flex flex-col bg-[#FAFAFA] mb-8">
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/payments" element={<PaymentContainer />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
