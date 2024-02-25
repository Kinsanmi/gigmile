import React from "react";
import "./Captain.scss";
import frame from "../images/Frame 26822.png";
import { IoMdArrowDropup } from "react-icons/io";
import { Graph } from "./Graph/Graph";
import { Service } from "./Service/Service";
import { WorkingCapital } from "./WorkingCaptial/WorkingCapitial";

export const Captain = () => {
  return (
    <div className="cap">
      <div className="active-cap">
        <div className="graph"><Graph /></div>

        <div className="default">
          <div className="default-value">
            <div className="fuel">
              <div className="fuel-img">
                <img src={frame} alt="graph" />
              </div>
              <h2>Total Request value</h2>
            </div>
            <h2>Overall working capital request value</h2>
          </div>

          <div className="overall">
            <h2>
              overall: <span>N 2,643,890.0</span>
            </h2>
            <div className="paid">
              <h5>Total paid back:</h5>
              <h1>N 1,200,210.0</h1>

              <div className="paid-amount">
                <p>
                <IoMdArrowDropup className="arrow" />
                  300,000.00 <span>Increase this week</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="gig-cap"><Service /></div>
      </div>

      <WorkingCapital />
    </div>
  );
};
