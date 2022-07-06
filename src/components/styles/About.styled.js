import styled from "styled-components";
import { device } from "./MediaQueries";

export const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 150px;
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

  /* @media only screen and (max-width: 970px) {
    padding: 0;
    width: 350px;
  } */

  @media ${device.potrait} {
    width: 650px;
  }

  @media ${device.tablet} {
    width: 650px;
  }

  @media ${device.tabletS} {
    width: 525px;
  }

  @media ${device.phone} {
    width: 400px;
  }
`;
