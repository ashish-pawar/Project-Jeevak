import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/forgot" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
