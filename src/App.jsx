/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Collections from "./components/Collections";
import CartPage from "./components/CartPage";
import FashinoRegister from "./components/FashinoRegister";
import FashinoProfile from "./components/fashinoProfile";
import FashinoLogin from "./components/FashinoLogin";

function App() {
  return (
    <>
      {/* myRoutes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/fashinocart" element={<CartPage />} />
        <Route path="/fashinologin" element={<FashinoLogin />} />
        <Route path="/fashinoregister" element={<FashinoRegister />} />
        <Route path="/fashinoprofile" element={<FashinoProfile />} />
      </Routes>
    </>
  );
}

export default App;
