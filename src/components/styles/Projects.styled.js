import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 100vh;
`;

export const ProjectsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 50px; */
`;

export const ProjectsCollection = styled.div`
  .projects-split {
    display: flex;
    padding: 50px;
  }

  .swiper-pagination-bullet-active {
    background-color: orangered;
  }

  .swiper-scrollbar-drag {
    background-color: orangered;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: orangered;
  }
`;

export const ProjectsLeft = styled.div`
  width: 50%;

  img {
    width: 100%;
    border-radius: 5px;
    border: 2px solid black;
  }
`;

export const ProjectsRight = styled.div`
  width: 500px;
  margin-left: 30px;

  h3 {
    margin-top: 5px;
  }

  p {
    margin-top: 20px;
  }

  .live {
    margin: 20px;
  }
`;
