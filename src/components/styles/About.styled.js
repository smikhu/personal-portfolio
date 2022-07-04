import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 150px;
`;

export const AboutCollection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 970px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const AboutInfo = styled.div`
  padding: 0px 50px;
  width: 650px;

  p {
    margin-top: 15px;
  }

  button {
    margin-top: 10px
  }

  @media only screen and (max-width: 970px) {
    padding: 0;
    width: 350px;
  }
`;
