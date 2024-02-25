import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import './total.scss';

export const Total = () => {
  return (
    <div className="default">
      <div className="default-value">
        <div className="fuel">
          <div className="fuel-img">
            <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1707176504/Frame_26822_rfmyox.png" alt="" />
          </div>
          <h2>Gigmile captain</h2>
        </div>
        <h2>total gigmile captains so far</h2>
      </div>

      <div className="overall">
        <div className="paid">
          <h5>Overall:</h5>
          <h1>2,643,546,890</h1>

          <div className="paid-amount">
            <p>
              <IoMdArrowDropup className="arrow" />
              3,000 <span>Increase this week</span>
            </p>
          </div>

          <a className="more-detail" href="">View more details</a>
        </div>
      </div>
    </div>
  );
};
