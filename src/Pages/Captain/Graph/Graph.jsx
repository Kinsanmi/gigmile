import React from "react";
import Chart from "react-apexcharts";
import "./Graph.scss";
import { IoMdPeople } from "react-icons/io";

export const Graph = () => {
  const chartData = {
    options: {
      colors: "#1db385",
      chart: {
        id: "basic-bar",
      },

      grid: {
        xais: {
          lines: {
            show: false,
          },
        },

        yaxis: {
          lines: {
            show: false,
          },
        },

        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: "#304758",
          },
        },
      },

      xais: {
        categories: [["Repair Advance"], ["Fuel Advance"], ["Salary Advance"]],
      },

      legend: {
        show: false,
      },
    },

    series: [
      {
        name: "Overall",
        data: [70, "40", 30],
      },
    ],
  };

  return (
    <div className="capital">
      <div className="chart-donut">
        <div className="donut">
          <span>
            <img
              src="https://res.cloudinary.com/dkngsthge/image/upload/v1707176504/Frame_26822_rfmyox.png"
              alt=""
            />
          </span>
          <h3>Working Capital Service Request</h3>
        </div>

        <p>
          Ongoing gigmile working capital service request
          <li>Last 30 days</li>
        </p>
      </div>

      <div className="donut-list">
        <IoMdPeople className="contact" />
        <h2>
          Overall: <span>678,765</span>
        </h2>
      </div>

      <div>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width={450}
          height={200}
        />
      </div>
    </div>
  );
};
