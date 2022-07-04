import styled from "styled-components";

export const ProjectsContainer = styled.div`
  margin-top: 100px;
`;

export const ProjectsCollection = styled.div`
  .projects-split {
    display: flex;
    padding: 50px;
    @media only screen and (max-width: 950px) {
      flex-direction: column;
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
  width: 850px;
  @media only screen and (max-width: 950px) {
    width: 100%;
  }

  img {
    width: 100%;
    border-radius: 5px;
    border: 3px solid ${({ theme }) => theme.colors.imageBorder};
    box-shadow: 2px 2px 10px 0px
      ${({ theme }) => theme.colors.imageBorderShadow};
  }
`;

export const ProjectsRight = styled.div`
  width: 650px;
  margin-left: 15px;
  @media only screen and (max-width: 950px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }

  h3 {
    margin-top: 5px;
  }

  p {
    margin-top: 20px;
    @media only screen and (max-width: 950px) {
      text-align: center;
    }
  }

  .live {
    margin: 10px;
  }

  button {
    @media only screen and (max-width: 950px) {
      margin-top: 15px;
    }
  }
`;
