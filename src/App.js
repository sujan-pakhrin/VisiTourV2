import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
<<<<<<< HEAD
import Login from "./pages/LogIn";
=======
>>>>>>> e4e6a4f8e5daf3583702de1ef3ceca1a8b330b27
import Layout from "./pages/Layout";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path= "home" index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
<<<<<<< HEAD
          <Route path="signin" element={<Login />} />
=======
>>>>>>> e4e6a4f8e5daf3583702de1ef3ceca1a8b330b27
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App