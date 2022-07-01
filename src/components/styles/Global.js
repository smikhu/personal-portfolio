import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
}

h1 {
    color: #FF8B00;
}

p {
    font-size: 20px;
}

button {
    height: 35px;
    width: 100px;
    font-size: 20px;
    color: #FF8B00;
    border: 2px solid #FF8B00;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #FF8B00;
        color: white;
        transition: all .2s;
    }
}

.description {
    width: 800px;
    text-align: center;
    font-size: 20px;
  }
`;
