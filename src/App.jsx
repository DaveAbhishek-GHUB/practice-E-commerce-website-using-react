/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Collections from "./components/Collections";
import CartPage from "./components/CartPage";
import Login from "./components/Login";
import FashinoRegister from "./components/FashinoRegister";
import FashinoProfile from "./components/fashinoProfile";

function App() {
  return (
    <>
      {/* myRoutes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<FashinoRegister />} />
        <Route path="/profile" element={<FashinoProfile />} />
      </Routes>
    </>
  );
}

export default App;
