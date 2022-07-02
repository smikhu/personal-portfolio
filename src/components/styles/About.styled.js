import styled from "styled-components";
import ironman from "../../images/ironman.png";

export const AboutContainer = styled.div`
height: 100vh;
`;

export const AboutCollection = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  img {
    height: 375px;
    width: 300px;
    border: 3px solid black;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    box-shadow: 2px 2px 10px 0px black;
  }
`;

export const AboutInfo = styled.div`
  padding: 0px 50px;
  width: 650px;
`;
