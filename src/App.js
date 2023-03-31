import React from 'react'
import "./App.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup/SignUp";
import Staff from "./AdminDashboard/Staff";
import Package from "./AdminDashboard/Package";
import Agency from "./AdminDashboard/Agency";
import Admin from "./AdminDashboard/AdminPanel";
import Login from "./pages/Login/Login";
import Admin1 from './pages/admin/adminhome/Admin';
import Adduser from './pages/admin/newuser/Adduser';
import User from './pages/admin/userdetails/Userdetails';
import Staff1 from './pages/admin/staffdetails/Staffdetails';
import Addstaff from './pages/admin/newstaff/Newstaff';
import Addagency from './pages/admin/newagency/Newagency';
import Agency1 from './pages/admin/agencydetails/Agencydetails';
import Addpackage from './pages/admin/newpackage/Newpackage';
import Package1 from './pages/admin/packagedetails/Packagedetails';
import Book from './pages/book/Book';
import Booking from './pages/book/Booking';
import PackageDesc from './pages/package/Packagedesc'
import Myprofile from './pages/user/myprofile'

import Layout from "./pages/Navbar/Layout";

const App = () => {

  return (
    <BrowserRouter>
      {/* <Layout /> */}
      <Routes>

        <Route path="/" index element={<Home />} />
        <Route path="home" index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="booking" element={<Book />} />
        <Route path="booking1" element={<Booking />} />
        <Route path="login" element={<Login />} />

        <Route path="agency" element={<Agency />} />
        <Route path="admin" element={<Admin />} />
        <Route path="staff" element={<Staff />} />
        <Route path="package" element={<Package />} />
        <Route path="packagedesc" element={<PackageDesc />} />

        <Route path="myprofile" element={<Myprofile />} />

        <Route path="/admin1">
          <Route index element={<Admin1 />} />
          <Route path="users">
            <Route path="" index element={<User />} />
            <Route path="new" element={<Adduser />} />
          </Route>
          <Route path="staff1">
            <Route index element={<Staff1 />} />
            <Route path="new" element={<Addstaff />} />
          </Route>
          <Route path="agency1">
            <Route index element={<Agency1 />} />
            <Route path="new" element={<Addagency />} />
          </Route>
          <Route path="package1">
            <Route index element={<Package1 />} />
            <Route path="new" element={<Addpackage />} />
          </Route>
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
};
export default App