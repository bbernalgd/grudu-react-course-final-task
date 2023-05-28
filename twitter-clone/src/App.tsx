import React from "react";
import { Header } from "./components/Header/Header";
import { LogIn, SignUp, Home } from "./pages";

function App() {
  return (
    <>
      <Header />
      <LogIn />
      <SignUp />
      <Home />
    </>
  );
}

export default App;
