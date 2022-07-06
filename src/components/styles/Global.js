import { createGlobalStyle } from "styled-components";
import { device } from "./MediaQueries";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    transition: all 1s;
}

body {
    background-color: ${({ theme }) => theme.colors.background};
}

h1 {
    color: ${({ theme }) => theme.colors.h1Header};
}

h2 {
    color: ${({ theme }) => theme.colors.h2Header};

  @media ${device.phone} {
   font-size: 21px;
  }
}

h3 {
    color: ${({ theme }) => theme.colors.h2Header};
}   
 
p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.pHeader}
}

a {
    all: unset;
    cursor: pointer;
}

button {
    height: 35px;
    width: 100px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.buttonsTextBefore};
    background-color: ${({ theme }) => theme.colors.buttonsBackgroundBefore};
    border: 2px solid ${({ theme }) => theme.colors.buttonsBorder};
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.buttonsHoverBackground};
        color: ${({ theme }) => theme.colors.buttonsTextHover};
        transition: all .2s;
    }

    @media ${device.potrait} {
        height: 30px;
        width: 90px;
        font-size: 19px;
    }

    @media ${device.tablet} {
        height: 30px;
        width: 90px;
        font-size: 19px;
    }

    @media ${device.tabletS} {
        height: 25px;
        width: 75px;
        font-size: 16px;
    }

    @media ${device.phone} {
        height: 25px;
        width: 75px;
        font-size: 16px;
    }
}

.description {
    width: 800px;
    text-align: center;
    font-size: 18px;

    @media ${device.potrait} {
      width: 650px;
    }

    @media ${device.tablet} {
      width: 650px;
    }

    @media ${device.tabletS} {
      width: 400px;
    }

    @media ${device.phone} {
      width: 275px;
      font-size: 16px;
    }
  }
`;
