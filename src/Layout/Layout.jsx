import React from "react";
import { useState } from "react";
import { Sidebar } from "../Component/Sidebar/Sidebar";
import { Navbar } from "../Component/Navbar/Navbar";
import "./Layout.scss";
import { Routers } from "../Routers/Routers";

export const Layout = () => {
  const [sideBar, setSideBar] = useState(false);

  const sideBarNav = () => {
    setSideBar(!sideBar);
    document.body.classList.toggle("sidebar-open", !sideBar);
  };
  return (
    <div className="home">
      <Sidebar sideBar={sideBar} sideBarNav={sideBarNav} />
      <div className="navbar">
        <Navbar sideBar={sideBar} sideBarNav={sideBarNav} />
        <Routers />
      </div>
    </div>
  );
};
