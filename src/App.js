// client/src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;