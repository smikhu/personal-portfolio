import styled from "styled-components";
import { device } from "./MediaQueries";

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContactButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;

  .contact-icons {
    font-size: 100px;
    color: ${({ theme }) => theme.colors.contactButtons};
    transition: all 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.contactButtonsHover};
    }
    @media only screen and (max-width: 950px) {
      font-size: 50px;
    }
  }
`;
