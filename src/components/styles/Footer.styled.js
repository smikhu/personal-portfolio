import styled from "styled-components";

export const FooterContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.footerBorder};
  border-radius: 4px;
  margin-top: 100px;
  @media only screen and (max-width: 950px) {
    font-size: 14px;
  }
`;

export const FooterInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.footerBackground};
  padding: 20px;
  color: ${({ theme }) => theme.colors.footerText};
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.footerText};
    &:hover {
      transition: all 1s;
      color: ${({ theme }) => theme.colors.footerHover};
    }
  }
`;
