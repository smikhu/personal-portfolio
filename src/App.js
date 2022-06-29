import React, { useState, useEffect } from 'react'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import Navbar from './components/Navbar';

const App = () => {
  // const [selectedTheme, setSelectedTheme] = useState(soul)

  return (
    <div>

      {/* <ThemeProvider theme={selectedTheme}> */}

        <GlobalStyles />

        <Navbar />

      {/* </ThemeProvider> */}

    </div>
  );
}

export default App;
