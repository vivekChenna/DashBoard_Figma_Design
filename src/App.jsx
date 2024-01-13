import React, { useState } from "react";
import Body from "./components/Body.jsx";
import Context from "./context/context.js";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

 

  return (
    <Context.Provider
      value={{ isSideBarOpen, setIsSideBarOpen, currentPage, setCurrentPage }}
    >
      <Body />
    </Context.Provider>
  );
}

export default App;
