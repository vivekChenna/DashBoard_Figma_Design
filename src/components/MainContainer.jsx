import React from "react";
import Header from "./Header";
import Container from "./Container";

const MainContainer = () => {
  return (
    <div className="flex flex-col bg-[#FAFAFA]">
      <Header />
      <Container />
    </div>
  );
};

export default MainContainer;
