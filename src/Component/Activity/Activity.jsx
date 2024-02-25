import React from 'react';
import './Activity.scss';
import { BsBellFill } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";
import { GiNetworkBars } from "react-icons/gi";
import { Geography } from '../Geography/Geography';

export const Activity = () => {

  const date = new Date().toLocaleTimeString();

  return (
    <div className='activity'>
        <div className="act-feed">
            <div className='act-line'>
              <div className="act-number">
                <h2>Activity feed</h2>
                <p>5</p>
              </div>

              <div className="views">
                <h3>View all</h3>
              </div>
            </div>

            <div className="ride">
              <div className="ride-asset">
                <div className="bell">
                  <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1706995124/Group_cw4flo.png" alt="" />
                </div>
                <div className="quest">
                  <h2>Ola requested for Asset Financing</h2>
                  <h5>{date}</h5>
                </div>
              </div>
              <div className="ride-asset">
                <div className="bell">
                  <BsBellFill className="icon" />
                </div>
                <div className="quest">
                  <h2>Michael missed a repayment scheduled for yesterday</h2>
                  <h5>{date}</h5>
                </div>
              </div>
              <div className="ride-asset">
                <div className="bell">
                  <GiNetworkBars className="network" />
                </div>
                <div className="quest">
                  <h2>Michael upgraded from Tier 2 to Tier 3</h2>
                  <h5>{date}</h5>
                </div>
              </div>
              <div className="ride-asset">
                <div className="bell">
                  <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1706995124/smartphone_1_1_ebq8v8.png" alt="" />
                </div>
                <div className="quest">
                  <h2>Ola requested for Asset Financing</h2>
                  <h5>{date}</h5>
                </div>
              </div>
              <div className="ride-asset">
                <div className="bell">
                  <IoMdPeople className="contact" />
                </div>
                <div className="quest">
                  <h2>Michael claimed N10,000 Referral bonus</h2>
                  <h5>{date}</h5>
                </div>
              </div>
              <div className="ride-asset">
                <div className="bell">
                  <GiNetworkBars className="network" />
                </div>
                <div className="quest">
                  <h2>Michael upgraded from Tier 1 to  Tier 2</h2>
                  <h5>{date}</h5>
                </div>
              </div>
              <div className="ride-asset">
                <div className="bell">
                  <GiNetworkBars className="network" />
                </div>
                <div className="quest">
                  <h2>Michael upgraded from Tier 1 to  Tier 2</h2>
                  <h5>{date}</h5>
                </div>
              </div>
            </div>
        </div>

        <Geography />

    </div>
  )
}
