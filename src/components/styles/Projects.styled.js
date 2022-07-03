import styled from "styled-components";

export const ProjectsContainer = styled.div`
background-color: #e5e4e2;
height: 100vh;
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
  width: 850px;

  img {
    width: 100%;
    border-radius: 5px;
    border: 3px solid black;
    box-shadow: 2px 2px 10px 0px black;
  }
`;

export const ProjectsRight = styled.div`
  width: 650px;
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
