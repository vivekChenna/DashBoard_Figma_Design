import React from "react";
import Header from "./Header";
import Container from "./Container";

const MainContainer = () => {
  return (
    <div className="flex flex-col h-[1482px] bg-[#FAFAFA] mb-8">
      <Header />
      <Container />
    </div>
  );
};

export default MainContainer;
