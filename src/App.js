import MainHeader from "components/Homepage/MainHeader";
import MainFooter from "components/MainFooter";
import Homepage from "pages/Homepage";
import ListingsPages from "pages/ListingsPages";
import LoginPage from "pages/LoginPage";
import SignupPage from "pages/SignupPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Listings" element={<ListingsPages />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
