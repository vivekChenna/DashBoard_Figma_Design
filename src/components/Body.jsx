import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useContext } from "react";
import Context from "../context/context.js";
import ResponsiveSideBar from "./ResponsiveSideBar.jsx";

const Body = () => {
  const { isSideBarOpen } = useContext(Context);

  return (
    <div className="flex bg-[#FAFAFA] overflow-hidden md:overflow-visible">
      <SideBar />
      <MainContainer />
      {isSideBarOpen ? <ResponsiveSideBar /> : null}
    </div>
  );
};

export default Body;
