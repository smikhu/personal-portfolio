import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  padding: 25px 25px;
  background-color: orangered;
  border: 2px solid black;
  color: white;
  text-transform: uppercase;
  font-size: 20px;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    font-weight: bolder;
  }

  ul li {
    cursor: pointer;
  }
`;
