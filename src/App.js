import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";

import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <div>
      <GlobalStyles />

      <Navbar />

      <About />

      <Skills />
    </div>
  );
};

export default App;
