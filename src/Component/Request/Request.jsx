import React from "react";
import "./Request.scss";
import { MdPeople } from "react-icons/md";
import { PiNotepadFill } from "react-icons/pi";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { NewRequest } from "../New Request/NewRequest";

export const Request = () => {
  return (
    <div className="mobile">
      <div className="request-list">
        <div className="list-icon">
          <MdPeople className="note" />
          <div className="list-details">
            <h3>128</h3>
            <p>Captains</p>
          </div>
        </div>
        <div className="list-icon">
          <PiNotepadFill className="note" />
          <div className="list-details">
            <h3>3,201</h3>
            <p>service requests</p>
          </div>
        </div>
        <div className="list-icon">
          <BsFillClipboardCheckFill className="note" />
          <div className="list-details">
            <h3>32,200</h3>
            <p>gigmile assets</p>
          </div>
        </div>
        <div className="list-icon">
          <MdPeople className="note" />
          <div className="list-details">
            <h3>90</h3>
            <p>service partners</p>
          </div>
        </div>
      </div>

      {/* <Chart /> */}

      {/* New Request */}
      <NewRequest />
    </div>
  );
};
