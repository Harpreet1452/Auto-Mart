import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./signUp/SignUp";
import LogIn from "./logIn/LogIn";
import Layout from "../Main/Layout";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/vehicles" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default Home;
