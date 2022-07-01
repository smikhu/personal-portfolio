import styled from "styled-components";

export const ProjectsContainer = styled.div`
  /* height: 100vh; */
`;

export const ProjectsCollection = styled.div`
  .projects-split {
    display: flex;
    padding: 50px;
  }

  .swiper-pagination-bullet-active {
    background-color: #ff8b00;
  }

  .swiper-scrollbar-drag {
    background-color: #ff8b00;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #ff8b00;
  }
`;

export const ProjectsLeft = styled.div`
  width: 100%;

  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const ProjectsRight = styled.div`
  width: 500px;
  margin-left: 10px;

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
