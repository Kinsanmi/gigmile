import React from "react";
import "./Repayment.scss";
import AR from "../Sidebar/image/bnb.png";
import { Repay } from "./Repay";

export const Repayment = () => {
  const date = new Date().toLocaleDateString();

  return (
    <div className="active-list">
      <div className="act-feed">
        <div className="act-line">
          <div className="act-number">
            <h2>Upcoming repayments</h2>
            <p>6</p>
          </div>
        </div>

        <table className="repayment">
          <thead>
            <tr className="cap-names">
              <th>Captain</th>
              <th>Service Type</th>
              <th>Next Repayment</th>
              <th>Due Date</th>
            </tr>
          </thead>
          {Repay.map((items) => {
            return (
              <tbody>
                <tr className="table-list">
                  <td>
                    <div className="list-img">
                      <img src={items.image} alt="profile image" />
                      <h2>{items.name}</h2>
                    </div>
                  </td>
                  <td className="services">
                    <h1>{items.service}</h1>
                  </td>
                  <td className="amount">
                    <h2>{items.price}</h2>
                  </td>
                  <td className="date">
                    <h2>{items.date}</h2>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};
