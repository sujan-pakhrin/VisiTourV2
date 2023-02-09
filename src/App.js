import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/LogIn";
import Layout from "./pages/Layout";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path= "home" index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App