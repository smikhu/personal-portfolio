import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";

import { soul } from "./components/styles/Themes.styled";

const App = () => {
  const [phase, setPhase] = useState(soul);

  useEffect(() => {
    const currentPhase = JSON.parse(localStorage.getItem("current-phase"));
    if (currentPhase) {
      setPhase(currentPhase);
    }
  }, []);

  const HandleThemeChange = (phase) => {
    setPhase(phase);
    localStorage.setItem("current-phase", JSON.stringify(phase));
  };

  return (
    <ThemeProvider theme={phase}>
      <GlobalStyles />

      <Navbar />

      <About HandleThemeChange={HandleThemeChange} />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </ThemeProvider>
  );
};

export default App;
