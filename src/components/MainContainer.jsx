import React from "react";
import Header from "./Header";
import Container from "./Orders/Container";
import { Routes, Route } from "react-router-dom";
import PaymentContainer from "../components/payments/PaymentContainer";
import HomePage from "./Home/HomePage";

const MainContainer = () => {
  return (
    <div className=" w-full sticky top-0 flex flex-col bg-[#FAFAFA] mb-8">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<Container />} />
        <Route path="/payments" element={<PaymentContainer />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
