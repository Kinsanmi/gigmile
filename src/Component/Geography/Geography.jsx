import React from 'react';
import './Geography.scss';
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

export const Geography = () => {
  return (
    <div className='activity-list'>
      <div className="act-feed">
        <div className="act-line">
          <div className="act-number">
            <h2>Geographical Distribution</h2>
          </div>
        </div>
        
        <div className="map-img">
          <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1707083226/Group_5339_fjwpiz.png" alt="Map location" />

          <div className="map-location">
            <div className="country">
              <div className="country-list">
                <h1>Countries</h1>
              </div>
              <div className="country-item">
                <h3>Captains</h3>
              </div>
            </div>

            <div className="location">
              <div className="locate-country">
                <div className="cap-list">
                  <p>
                    <div></div>
                  </p>
                  <h2>Nigeria</h2>
                  <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1707083226/v8zyqvb0qn9trldzxqjh.png" alt="Nigeria" />
                </div>
                <div className="score">
                  <h3>60,000</h3>
                  <IoMdArrowDropup className="arrow" />
                  <h4>300</h4>
                </div>
              </div>
              <div className="locate-country">
                <div className="cap-list">
                  <p>
                    <div></div>
                  </p>
                  <h2>Nigeria</h2>
                  <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1707083226/v8zyqvb0qn9trldzxqjh.png" alt="Nigeria" />
                </div>
                <div className="score">
                  <h3>60,000</h3>
                  <IoMdArrowDropup className="arrow" />
                  <h4>300</h4>
                </div>
              </div>
              <div className="locate-country">
                <div className="cap-list">
                  <p>
                    <div></div>
                  </p>
                  <h2>Ghana</h2>
                  <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1707083226/znwzrohgfsxr4e7wg2mu.png" alt="Ghana" />
                </div>
                <div className="score">
                  <h3>60,000</h3>
                  <IoMdArrowDropup className="arrow" />
                  <h4>300</h4>
                </div>
              </div>
              <div className="locate-country">
                <div className="cap-list">
                  <p>
                    <div></div>
                  </p>
                  <h2>Nigeria</h2>
                  <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1707083226/v8zyqvb0qn9trldzxqjh.png" alt="Nigeria" />
                </div>
                <div className="score">
                  <h3>60,000</h3>
                  <IoMdArrowDropdown className="down-arrow" />
                  <h5>300</h5>
                </div>
              </div>
              <div className="locate-country">
                <div className="cap-list">
                  <p>
                    <div></div>
                  </p>
                  <h2>Ghana</h2>
                  <img src="https://res.cloudinary.com/dkngsthge/image/upload/v1707083226/znwzrohgfsxr4e7wg2mu.png" alt="Ghana" />
                </div>
                <div className="score">
                  <h3>60,000</h3>
                  <IoMdArrowDropup className="arrow" />
                  <h4>300</h4>
                </div>
              </div>
            </div>

            {/* Captains */}

          </div>
        </div>
      </div>
    </div>
  )
}
