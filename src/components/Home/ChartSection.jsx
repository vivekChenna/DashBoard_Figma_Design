import React from "react";
import ShareStore from "./ShareStore";
import LineChart from "./LineChart";

const ChartSection = () => {
  return (
    <div className=" mt-6 flex justify-between">
      <ShareStore />
      <LineChart />
      <LineChart />
    </div>
  );
};

export default ChartSection;
