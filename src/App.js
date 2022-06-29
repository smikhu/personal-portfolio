import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <GlobalStyles />

      <Navbar />

      <About />
    </div>
  );
};

export default App;
