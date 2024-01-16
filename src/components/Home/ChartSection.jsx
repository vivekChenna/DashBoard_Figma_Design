import React from "react";
import ShareStore from "./ShareStore";
import LineChart from "./LineChart";

const ChartSection = () => {
  return (
    <div className=" mt-6 flex flex-col gap-5 mx-5 md:mx-0 md:gap-0 md:flex md:flex-row md:justify-between flex-wrap">
      <ShareStore />
      <LineChart />
      <LineChart />
    </div>
  );
};

export default ChartSection;
