import styled from "styled-components";

export const ProjectsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
`;

export const ProjectsCollection = styled.div`
  .projects-split {
    display: flex;
    padding: 50px;
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

  img {
    width: 100%;
    border-radius: 5px;
    border: 3px solid ${({ theme }) => theme.colors.imageBorder};
    box-shadow: 2px 2px 10px 0px
      ${({ theme }) => theme.colors.imageBorderShadow};
  }
`;

export const ProjectsRight = styled.div`
  width: 50%;
  margin-left: 15px;

  h3 {
    margin-top: 5px;
  }

  p {
    margin-top: 20px;
  }

  .live {
    margin: 10px;
  }
`;
