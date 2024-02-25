import React from "react";
import { useState } from "react";
import './sidebar.scss';
import { GoHome } from "react-icons/go";
import {
  IoPeopleOutline,
  IoDocumentTextOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";
import { AiOutlinePieChart, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import { LuGanttChartSquare } from "react-icons/lu";

import gig from "./image/Icon.png";

export const Sidebar = ({ sideBar }) => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  const pageChange = (path) => {
    setCurrentPage(path);
  };

  return (
    <div className={`sidebar ${sideBar ? "open" : ""}`}>
      <div className="logo">
        <div className="logo-img">
          <img src={gig} alt="" />
          <h3>Gigmile</h3>
        </div>

        {/* Login detail */}
        <div className="login-profile">
          <img
            src="https://media.istockphoto.com/id/1323990939/photo/a-studio-portrait-of-a-young-millennial-woman.webp?b=1&s=170667a&w=0&k=20&c=YcKfu01ftZLhv9DnHK2ARHSBxqOB1XgtCHbrAVzKkmg="
            alt="Profile image"
          />
          <div className="name">
            <h2>Michael Essien</h2>
            <p>Administrator</p>
          </div>
        </div>

        {/* Dashboard menu */}
        <div className="dashboard">
          <ul>
            <li className={currentPage === "/dashboard" ? "active" : ""}>
              <GoHome className="icon" />
              <a href="/dashboard" onClick={() => pageChange("/dashboard")}>
                Dashboard
              </a>
            </li>
            <li className={currentPage === "/captains" ? "active" : ""}>
              <IoPeopleOutline className="icon" />
              <a href="/captains" onClick={() => pageChange("/captains")}>
                Captains
              </a>
            </li>
            <li className={currentPage === "/service/request" ? "active" : ""}>
              <IoDocumentTextOutline className="icon" />
              <a
                href="/service/request"
                onClick={() => pageChange("/service/request")}
              >
                Service request
              </a>
            </li>
            <li>
              <IoBriefcaseOutline className="icon" />
              <a>Service Partners</a>
            </li>
            <li>
              <AiOutlinePieChart className="icon" />
              <a>Asset Metrics</a>
            </li>
            <li>
              <LuGanttChartSquare className="icon" />
              <a href="">Repayment</a>
            </li>
            <li>
              <AiOutlineSetting className="icon" />
              <a href="">Setting</a>
            </li>
            <li className="log-out">
              <MdOutlineLogout className="icon" />
              <a href="">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
