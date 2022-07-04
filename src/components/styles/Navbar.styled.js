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
  transition: all 1s;
  @media only screen and (max-width: 950px) {
    padding: 0;
    padding-top: 5px;
  }

  img {
    width: 50px;
    height: 50px;
    @media only screen and (max-width: 950px) {
      width: 35px;
      height: 35px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    font-weight: bolder;
  }

  ul li {
    margin-left: 50px;
    cursor: pointer;
    @media only screen and (max-width: 950px) {
      margin: 10px;
      font-size: 12px;
    }
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
    @media only screen and (max-width: 950px) {
      height: 20px;
      width: 20px;
    }
  }
`;
