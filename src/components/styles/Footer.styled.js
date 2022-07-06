import styled from "styled-components";
import { device } from "./MediaQueries";

export const FooterContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.footerBorder};
  border-radius: 4px;
  margin-top: 100px;

  @media ${device.tabletS} {
    font-size: 14px;
  }

  @media ${device.phone} {
    font-size: 12px;
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
