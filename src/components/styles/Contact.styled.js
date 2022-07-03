import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 40vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContactButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  .contact-icons {
    font-size: 100px;
    color: ${({ theme }) => theme.colors.contactButtons};
    transition: all 1s;
    &:hover {
      color: ${({ theme }) => theme.colors.contactButtonsHover};
    }
  }
`;
