import styled from "styled-components";
import { device } from "./MediaQueries";

export const ProjectsContainer = styled.div`
  margin-top: 100px;
`;

export const ProjectsCollection = styled.div`
  .projects-split {
    display: flex;
    flex-direction: row;
    padding: 100px;
    width: 100%;

    @media ${device.potrait} {
      flex-direction: column;
      padding: 50px;
    }

    @media ${device.tablet} {
      flex-direction: column;
      padding: 50px;
    }

    @media ${device.tabletS} {
      flex-direction: column;
      padding: 10px;
      margin-top: 10px;
    }

    @media ${device.phone} {
      flex-direction: column;
      padding: 5px;
      margin-top: 10px;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.swiper};
  }

  .swiper-scrollbar-drag {
    background-color: ${({ theme }) => theme.colors.swiper};
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.swiper};
  }
`;

export const ProjectsLeft = styled.div`
  width: 100%;

  img {
    width: 100%;
    border-radius: 5px;
    border: 3px solid ${({ theme }) => theme.colors.imageBorder};
    box-shadow: 2px 2px 5px 0px
      ${({ theme }) => theme.colors.imageBorderShadow};
  }
`;

export const ProjectsRight = styled.div`
  width: 650px;
  margin-left: 20px;

  @media ${device.potrait} {
    width: 100%;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }

  @media ${device.tablet} {
    width: 100%;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }

  @media ${device.tabletS} {
    width: 100%;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 65px;
  }

  @media ${device.phone} {
    width: 100%;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    font-size: 14px;
  }

  h3 {
    margin-top: 5px;
  }

  p {
    margin-top: 20px;

    @media ${device.potrait} {
      text-align: center;
    }

    @media ${device.tablet} {
      text-align: center;
    }

    @media ${device.tabletS} {
      text-align: center;
      font-size: 15px;
    }

    @media ${device.phone} {
      text-align: center;
      font-size: 13px;
    }
  }

  button {
    margin: 25px 2px;
  }
`;
