import React, { useRef } from "react";
import SideBar from "./SideBar";
import { useContext } from "react";
import Context from "../context/context.js";

const ResponsiveSideBar = () => {
  const { setIsSideBarOpen, isSideBarOpen } = useContext(Context);

  const sidebar = useRef();

  const HandleCloseSideBar = (e) => {
    if (sidebar.current === e.target) {
      setIsSideBarOpen(!isSideBarOpen);
    }
  };

  return (
    <div
      ref={sidebar}
      onClick={HandleCloseSideBar}
      className=" fixed inset-0 backdrop-blur-md"
    >
      <SideBar />
    </div>
  );
};

export default ResponsiveSideBar;
