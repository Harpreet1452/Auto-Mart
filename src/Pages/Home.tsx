import { Route, Routes } from "react-router-dom";
import React from "react";
import SignUp from "./signUp/SignUp";
import LogIn from "./logIn/LogIn";
import VehicleListing from "../Main/VehicleListing";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/vehicles" element={<VehicleListing />} />{" "}
        {/* Corrected path */}
      </Routes>
    </div>
  );
};

export default Home;
