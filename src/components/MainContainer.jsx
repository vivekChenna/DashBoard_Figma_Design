import React from "react";
import Header from "./Header";
import Container from "./Container";

const MainContainer = () => {
  return (
    <div className=" w-full sticky top-0 flex flex-col bg-[#FAFAFA] mb-8">
      <Header />
      <Container />
    </div>
  );
};

export default MainContainer;
