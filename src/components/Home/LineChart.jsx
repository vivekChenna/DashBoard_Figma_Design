import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.responsive = true;
defaults.maintainAspectRatio = false;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const LineChart = () => {
  return (
    <div className=" w-[368px] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded px-2">
      <Line
        className=""
        data={{
          labels: ["Dec", "April", "Sep", "Dec"],
          datasets: [
            {
              label: "Total Sales",
              data: [25, 35, 32, 75, 39],
              backgroundColor: "#3498DB",
              borderColor: "#3498DB",
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Total Sales",
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
