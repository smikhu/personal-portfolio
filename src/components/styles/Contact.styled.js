import styled from "styled-components";

export const ContactContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 100px;
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
    transition: all 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.contactButtonsHover};
    }
  }
`;
