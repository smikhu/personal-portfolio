import styled from "styled-components";

export const NavbarContainer = styled.div`
  nav {
    width: 100%;
    padding: 25px 25px;
    background-color: orangered;
    border: 2px solid black;
    color: white;
    text-transform: uppercase;
    font-size: 20px;
  }

  nav ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
  }
  
  nav ul li {
    cursor: pointer;
  }
`;
