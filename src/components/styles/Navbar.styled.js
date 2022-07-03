import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 18px 18px;
  background-color: ${({ theme }) => theme.colors.navbarBackground};
  border: 2px solid ${({ theme }) => theme.colors.navbarBorder};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.navbarText};
  text-transform: uppercase;
  text-align: center;

  img {
    width: 50px;
    height: 50px;
  }

  ul {
    display: flex;
    list-style: none;
    font-weight: bolder;
  }

  ul li {
    margin-left: 50px;
    cursor: pointer;
  }

  .personal {
    margin-left: auto;
  }

  .stone-img .stone-img-text {
    opacity: 0;
    visibility: hidden;
    transition: all 1s;
  }

  .stone-img:hover .stone-img-text {
    visibility: visible;
    opacity: 1;
  }

  .contact-icons {
    height: 25px;
    width: 25px;
  }
`;
