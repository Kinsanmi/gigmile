import React from "react";
import "./Newrequest.scss";
import { Repayment } from "../Repayment/Repayment";
import { newValue } from "./Request";

export const NewRequest = () => {
  return (
    <div className="active">
      <div className="act-feed">
        <div className="act-line">
          <div className="act-number">
            <h2>New service requests</h2>
            <p>7</p>
          </div>
        </div>
        <table className="repayment">
          <thead>
            <tr className="cap-names">
              <th>Captain</th>
              <th>Service Type</th>
              <th>Total Request Value</th>
            </tr>
          </thead>
          {newValue.map((items) => {
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
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>

      <Repayment />
    </div>
  );
};
