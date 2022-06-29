import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 10px;

  img {
    height: 375px;
    width: 300px;
    border-radius: 45%;
  }
`;

export const AboutInfo = styled.div`
  padding: 0px 100px;
  width: 850px;

  p {
    margin-top: 20px;
  }
`;
