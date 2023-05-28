import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { LogIn, SignUp, Home } from "./pages";

const App = () => {
  return ( 
    <>
    <Header />
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </>
  );
};

export default App;
