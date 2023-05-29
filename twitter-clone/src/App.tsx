import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { LogIn, SignUp, Home } from "./pages";

const App = () => {
  return ( 
    <>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/home" element={
      <>
        <Header />
        <Home />
      </>
      } />
      
    </Routes>
    </>
  );
};

export default App;
