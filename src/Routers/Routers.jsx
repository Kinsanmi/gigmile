import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import {Dashboard} from '../Pages/Dashboard';
import { Captain } from "../Pages/Captain/Captain";
import { ServiceRequest } from "../Pages/Service-Request/ServiceRequest";

export const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/captains" element={<Captain />} />
          <Route path="/service/request" element={<ServiceRequest />} />
        </Routes>
      </Router>
    </>
  );
};
