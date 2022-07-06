import styled from "styled-components";
import { device } from "./MediaQueries";

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
  

  @media ${device.potrait} {
    padding: 10px 10px;
  }

  @media ${device.tablet} {
    padding: 10px 10px;
  }

  @media ${device.tabletS} {
    padding: 5px 5px;
  }

  @media ${device.phone} {
    padding: 3px;
  }

  img {
    width: 50px;
    height: 50px;

    @media ${device.potrait} {
      width: 40px;
      height: 40px;
    }

    @media ${device.tablet} {
      width: 40px;
      height: 40px;
    }

    @media ${device.tabletS} {
      width: 35px;
      height: 35px;
    }

    @media ${device.phone} {
      width: 25px;
      height: 25px;
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

    @media ${device.potrait} {
      margin-left: 20px;
      font-size: 15px;
    }

    @media ${device.tablet} {
      margin-left: 20px;
      font-size: 15px;
    }

    @media ${device.tabletS} {
      margin-left: 15px;
      font-size: 13px;
    }

    @media ${device.phone} {
      margin-left: 5px;
      font-size: 10px;
    }
  }

  .git {
    margin-left: auto;
  }

  .linked {
    margin-right: 50px;

    @media ${device.potrait} {
      margin-right: 20px;
    }

    @media ${device.tablet} {
      margin-right: 20px;
    }

    @media ${device.tabletS} {
      margin-right: 15px;
    }
    @media ${device.phone} {
      margin-right: 5px;
    }
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

    @media ${device.potrait} {
      height: 23px;
      width: 23px;
    }

    @media ${device.tablet} {
      height: 23px;
      width: 23px;
    }

    @media ${device.tabletS} {
      height: 20px;
      width: 20px;
    }

    @media ${device.phone} {
      height: 15px;
      width: 15px;
    }
  }
`;
