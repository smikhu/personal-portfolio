import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <div>
      <GlobalStyles />

      <Navbar />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
};

export default App;
