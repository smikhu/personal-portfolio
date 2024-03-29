import styled from "styled-components";
import { device } from "./MediaQueries";

export const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 150px;

  @media ${device.potrait} {
    margin-top: 100px;
  }

  @media ${device.tablet} {
    margin-top: 100px;
  }

  @media ${device.tabletS} {
    margin-top: 80px;
  }

  @media ${device.phone} {
    margin-top: 50px;
  }
`;

export const AboutCollection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.potrait} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media ${device.tabletS} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media ${device.phone} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const Gauntlet = styled.div`
  h5 {
    font-style: italic;
    margin-bottom: 100px;
    color: ${({ theme }) => theme.colors.h5Header};
  }

`;

export const AboutInfo = styled.div`
  padding: 0px 50px;
  width: 650px;

  p {
    margin-top: 15px;

    @media ${device.phone} {
      font-size: 16px;
    }
  }

  button {
    margin-top: 10px;
  }

  @media ${device.potrait} {
    width: 650px;
  }

  @media ${device.tablet} {
    width: 650px;
  }

  @media ${device.tabletS} {
    width: 550px;
  }

  @media ${device.phone} {
    width: 375px;
  }
`;
