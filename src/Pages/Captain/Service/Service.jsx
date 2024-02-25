import React from "react";
import Chart from "react-apexcharts";
import "./Service.scss";

export const Service = () => {
  const series = [44, 55, 41, 17];

  const options = {
    labels: ["Repair Advance", "Fuel Advance", "Salary Advance"],
    plotOptions: {
      pie: {
        customScale: 1.07,
        dataLabels: {},
        donut: {
          size: "82%",
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: "22px",
              fontWeight: 600,
              color: "rgba(252, 252, 252, 0.87)",
              offsetY: -5,
              formatter: (value) => {
                return value;
              },
            },

            value: {
              show: true,
              fontSize: "22px",
              fontWeight: 400,
              color: "rgba(252, 252, 252, 0.87)",
              offsetY: 5,
              formatter: (value) => {
                return value;
              },
            },

            total: {
              show: true,
              showAlways: true,
              label: "Total Value",
              fontSize: "12px",
              fontWeight: 600,
              color: "rgba(252, 252, 252, 0.87)",
            },
          },
        },
      },
    },

    dataLabels: {
      enabled: false,
      formatter: (value) => {
        return `$ ${value}`;
      },
    },

    colors: ["#FB6654", "#3285FF", "#1DB385", "#F9883A"],
    fill: {
      pattern: {
        style: "verticalLines",
        width: 6,
        height: 6,
        strokeWeight: 0,
      },
    },
    stroke: {
      show: false,
    },
    legend: {
      show: false,
      labels: {
        colors: "#FFF",
      },
    },
  };

  return (
    <div className="serve">
      <div className="break">
        <div className="breakdown">
          <h3>Service request breakdown </h3>
        </div>
        <p>Total working capital requests so far</p>
      </div>

      <div className="chart-bar">
        <Chart
          options={options}
          series={series}
          type="donut"
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};
