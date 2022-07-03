import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
}

h1 {
    color: ${({ theme }) => theme.colors.h1Header};
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
}

.description {
    width: 800px;
    text-align: center;
    font-size: 20px;
  }
`;
