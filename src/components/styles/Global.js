import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
}

h1 {
    color: #ff8b00;
}

p {
    font-size: 18px;
}

a {
    all: unset;
    cursor: pointer;
}

button {
    height: 35px;
    width: 100px;
    font-size: 20px;
    color: #ff8b00;
    background-color: #e5e4e2;
    border: 2px solid #ff8b00;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: orangered;
        color: #e5e4e2;
        transition: all .2s;
    }
}

.description {
    width: 800px;
    text-align: center;
    font-size: 20px;
  }
`;
