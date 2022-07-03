import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";

import {
  soul,
  reality,
  space,
  power,
  time,
  mind,
} from "./components/styles/Themes.styled";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(soul);

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  return (
    <ThemeProvider theme={selectedTheme}>
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
