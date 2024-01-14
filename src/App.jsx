import React, { useState } from "react";
import Body from "./components/Body.jsx";
import Context from "./context/context.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <BrowserRouter>
      <Context.Provider
        value={{ isSideBarOpen, setIsSideBarOpen, currentPage, setCurrentPage }}
      >
        <Body />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
