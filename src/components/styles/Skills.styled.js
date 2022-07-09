import styled from "styled-components";
import { device } from "./MediaQueries";

export const SkillsContainer = styled.div`
  margin-top: 100px;

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
      width: 30px;
      height: 30px;
    }
  }
`;

export const SkillsCollection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media ${device.potrait} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media ${device.tabletS} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media ${device.phone} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const SkillsSet = styled.div`
  width: 30%;
  margin: 50px;
  

  @media ${device.potrait} {
    width: 50%;
    margin: 20px;
  }

  @media ${device.tablet} {
    width: 50%;
    margin: 20px;
  }

  @media ${device.tabletS} {
    width: 50%;
    margin: 10px;
  }

  @media ${device.phone} {
    width: 50%;
    margin: 0px;
  }

  p {
    font-weight: bold;
    border-bottom: 2px solid ${({ theme }) => theme.colors.skillsBorder};
    border-left: 2px solid ${({ theme }) => theme.colors.skillsBorder};
    border-radius: 5px;
    padding: 15px;
    transition: all 0.2s ease-in-out;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      transform: scale(1.1);
      border-bottom: 2px solid ${({ theme }) => theme.colors.skillsBorderHover};
      border-left: 2px solid ${({ theme }) => theme.colors.skillsBorderHover};
      background-color: ${({ theme }) => theme.colors.skillsBackgroundHover};
      color: ${({ theme }) => theme.colors.skillsTextHover};
      box-shadow: 2px 2px 10px 0px ${({ theme }) => theme.colors.skillsShadow};
    }

    @media ${device.potrait} {
      font-size: 18px;
    }

    @media ${device.tablet} {
      font-size: 18px;
    }

    @media ${device.tabletS} {
      font-size: 16px;
      margin: 10px;
      padding: 10px;
    }

    @media ${device.phone} {
      font-size: 12px;
      margin: 10px;
      padding: 3px;
    }
  }
`;
