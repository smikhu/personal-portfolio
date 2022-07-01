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
    border-radius: 25%;
  }
`;

export const AboutInfo = styled.div`
  padding: 0px 50px;
  width: 650px;
`;
