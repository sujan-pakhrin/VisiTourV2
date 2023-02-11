import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

import Staff from "./AdminDashboard/Staff";
import Package from "./AdminDashboard/Package";
import Agency from "./AdminDashboard/Agency";
import Admin from "./AdminDashboard/AdminPanel";

import Login from "./pages/LogIn";

import Layout from "./pages/Layout";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path= "home" index element={<Home />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="staff" element={<Staff />} />
          <Route path="package" element={<Package />} />
          <Route path="signin" element={<Login />} />
          <Route path="agency" element={<Agency />} />
          <Route path="admin" element={<Admin />} />
          <Route path="signin" element={<Login />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App